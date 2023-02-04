import { ArtifactSetKey, CharacterKey, WeaponKey } from '@genshin-optimizer/consts'
import { cmpEq } from '@genshin-optimizer/waverider'
import { allCustoms, convert, Data, Member, Preset, reader, selfBuff, selfTag, Stat } from './data/util'

export function withPreset(preset: Preset, ...data: Data): Data {
  return data.map(({ tag, value }) => ({ tag: { ...tag, preset }, value }))
}
export function withMember(member: Member, ...data: Data): Data {
  return data.map(({ tag, value }) => ({ tag: { ...tag, member }, value }))
}

export function charData(data: {
  name: CharacterKey, lvl: number, ascension: number, constellation: number
  custom: Record<string, number | string>
}): Data {
  const { lvl, ascension, constellation } = selfBuff.char, custom = allCustoms(data.name)

  return [
    reader.withTag({ src: 'agg' }).reread(reader.withTag({ src: data.name })),
    reader.withTag({ src: 'iso', et: 'self' }).reread(reader.withTag({ src: data.name })),

    lvl.add(data.lvl),
    ascension.add(data.ascension),
    constellation.add(data.constellation),
    ...Object.entries(data.custom).map(([k, v]) => custom[k].add(v)),
  ]
}

export function weaponData(data: {
  name: WeaponKey, lvl: number, ascension: number, refinement: number
  custom: Record<string, number | string>
}): Data {
  const { lvl, ascension, refinement } = selfBuff.weapon, custom = allCustoms(data.name)

  return [
    reader.withTag({ src: 'agg' }).reread(reader.withTag({ src: data.name })),

    lvl.add(data.lvl),
    ascension.add(data.ascension),
    refinement.add(data.refinement),
    ...Object.entries(data.custom).map(([k, v]) => custom[k].add(v)),
  ]
}

export function artifactsData(data: {
  set: ArtifactSetKey, stats: { key: Stat, value: number }[]
}[], custom: Record<ArtifactSetKey, Record<string, number | string>>): Data {
  const { common: { count }, premod } = convert(selfTag, { src: 'art', et: 'self' })
  const sets: Partial<Record<ArtifactSetKey, number>> = {}, stats: Partial<Record<Stat, number>> = {}
  for (const { set: setKey, stats: stat } of data) {
    const set = sets[setKey]
    if (set === undefined) sets[setKey] = 1
    else sets[setKey] = set + 1
    for (const { key, value } of stat) {
      const stat = stats[key]
      if (stat === undefined) stats[key] = value
      else stats[key] = stat + value
    }
  }
  return [
    // Opt-in for artifact buffs, instead of enabling it by default to reduce `read` traffic
    reader.withTag({ src: 'agg', et: 'self' }).reread(reader.withTag({ src: 'art' })),

    ...Object.entries(sets).map(([k, v]) => count.with('src', k as ArtifactSetKey).add(v)),
    ...Object.entries(stats).map(([k, v]) => premod[k as Stat].add(v)),
    ...Object.entries(custom).flatMap(([art, v]) => {
      const custom = allCustoms(art as ArtifactSetKey)
      return Object.entries(v).map(([k, v]) =>
        custom[k].add(v))
    })
  ]
}

export function teamData(active: Member[], members: Member[]): Data {
  const teamEntry = reader.withTag({ et: 'team' })
  const stack = {
    in: reader.withTag({ et: 'stackIn' }),
    int: reader.withTag({ et: 'stackInt' }),
    out: reader.withTag({ et: 'stackOut' }),
  }
  return [
    // Active Member Buff
    ...active.flatMap(dst => {
      const entry = reader.withTag({ member: dst, src: 'agg', et: 'self' })
      return members.map(src =>
        entry.reread(reader.withTag({ dst, member: src, src: 'agg', et: 'active' })))
    }),
    // Team Buff
    ...members.flatMap(dst => {
      const entry = reader.withTag({ member: dst, src: 'agg', et: 'self' })
      return members.map(src =>
        entry.reread(reader.withTag({ dst, member: src, src: 'agg', et: 'teamBuff' })))
    }),
    // Total Team Stat

    // CAUTION:
    // This formula only works for queries with default `undefined` or `sum` accumulators.
    // Using this on queries with other accumulators, e.g., `ampMulti` may results in an
    // incorrect result. We cannot use `reread` here because the outer `team` query may
    // use different accumulators from the inner query. Such is the case for maximum team
    // final eleMas, where the outer query uses a `max` accumulator, while final eleMas
    // must use `sum` accumulator for a correct result.
    ...members.map(member => teamEntry.add(reader.withTag({ member, et: 'self' }).sum)),
    // Stacking
    ...members.map((member, i) => stack.int.add(cmpEq(stack.in.withTag({ member }).sum, 1, i + 1))),
    ...members.map((member, i) => stack.out.withTag({ member }).add(cmpEq(stack.int.max, i + 1, 1))),
  ]
}
