import { CharacterKey, ElementKey, ElementWithPhyKey, MoveKey, RegionKey, WeaponTypeKey } from '@genshin-optimizer/consts'
import { AnyNode, NumNode, prod, RawTagMapEntries, subscript, sum } from '@genshin-optimizer/waverider'
import { allStatics, customDmg, customShield, Data, FormulaArg, percent, self, selfBuff, Stat } from '../util'

export interface CharInfo {
  key: CharacterKey /* Might need to change this to CharacterSheetKey */
  ele: ElementKey
  weaponType: WeaponTypeKey
  region: RegionKey | ""
}
export type CharDataGen = {
  charKey: CharacterKey
  ele?: ElementKey
  weaponType: WeaponTypeKey
  region?: RegionKey
  lvlCurves: { key: string, base: number, curve: string }[]
  ascensionBonus: { key: string, values: number[] }[]
}
export function dataGenToCharInfo(data_gen: CharDataGen, travelerEle: ElementKey = "anemo"): CharInfo {
  return {
    key: data_gen.charKey,
    ele: data_gen.ele ?? travelerEle,
    weaponType: data_gen.weaponType,
    region: data_gen.region ?? "",
  }
}

export function dmg(name: string, info: CharInfo, stat: Stat, levelScaling: number[], move: Exclude<MoveKey, 'elemental'>, arg: { ele?: ElementWithPhyKey, baseMulti?: NumNode } & FormulaArg = {}, ...extra: Data): Data {
  let { ele } = arg
  if (!ele)
    switch (move) {
      case 'skill': case 'burst': ele = info.ele; break
      default:
        switch (info.weaponType) {
          case 'catalyst': ele = info.ele; break
          case 'bow': ele = 'physical'; break
        }
    }

  const { char: { auto, skill, burst }, final } = self
  const talentByMove = { normal: auto, charged: auto, plunging: auto, skill, burst } as const
  const talentMulti = percent(subscript(talentByMove[move], levelScaling))
  const base = prod(final[stat], talentMulti, ...(arg.baseMulti ? [arg.baseMulti] : []))
  return customDmg(name, ele, move, base, arg, ...extra)
}

export function shield(name: string, stat: Stat, tlvlMulti: number[], flat: number[], talent: 'auto' | 'skill' | 'burst', arg: { ele?: ElementKey } & FormulaArg = {}, ...extra: Data): Data {
  const lvl = self.char[talent]
  return customShield(name, arg.ele, sum(
    prod(percent(subscript(lvl, tlvlMulti)), self.final[stat]),
    subscript(lvl, flat)
  ), arg, ...extra)
}

export function fixedShield(name: string, base: Stat, percent: number | NumNode, flat: number | NumNode, arg: { ele?: ElementKey } & FormulaArg = {}, ...extra: Data): Data {
  return customShield(name, arg.ele, sum(prod(percent, self.final[base]), flat), arg, ...extra)
}

export function entriesForChar(
  { ele, weaponType, region }: CharInfo,
  { lvlCurves, ascensionBonus }: {
    lvlCurves: { key: string, base: number, curve: string /* TODO: key of char curves */ }[],
    ascensionBonus: { key: string, values: number[] }[],
  }
): RawTagMapEntries<AnyNode> {
  const specials = new Set(Object.keys(lvlCurves.map(({ key }) => key)))
  specials.delete('atk')
  specials.delete('def')
  specials.delete('hp')

  const { ascension } = self.char
  return [
    // Stats
    ...lvlCurves.map(({ key, base, curve }) =>
      selfBuff.base[key as Stat].add(prod(base, allStatics('static')[curve]))),
    ...ascensionBonus.map(({ key, values }) =>
      selfBuff.base[key as Stat].add(subscript(ascension, values))),

    // Constants
    ...[...specials].map(s => selfBuff.common.special.add(s)),
    selfBuff.common.weaponType.add(weaponType),
    selfBuff.char.ele.add(ele),

    // Counters
    selfBuff.common.count[ele].add(1),
    ...(region !== "" ? [selfBuff.common.count[region].add(1)] : []),
  ]
}
