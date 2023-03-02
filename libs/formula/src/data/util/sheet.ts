import { ArtifactSetKey, ElementKey, ElementWithPhyKey, MoveKey } from '@genshin-optimizer/consts';
import { NumNode, prod, StrNode, tag } from '@genshin-optimizer/waverider';
import { Data, reader, self, selfBuff, Source, teamBuff, usedNames } from '.';

// Use `registerArt` for artifacts
export function register(src: Exclude<Source, ArtifactSetKey>, ...data: (Data[number] | Data)[]): Data {
  const internal = ({ tag, value }: Data[number]) => ({ tag: { ...tag, src }, value })
  return data.flatMap(data => Array.isArray(data) ? data.map(internal) : internal(data))
}

export type FormulaArg = {
  team?: boolean // true if applies to every member, and false (default) if applies only to self
  cond?: string | StrNode
}

export function customDmg(name: string, eleOverride: ElementWithPhyKey | undefined, move: MoveKey, base: NumNode, { team, cond = 'dmg' }: FormulaArg = {}, ...extra: Data): Data {
  const buff = team ? teamBuff : selfBuff
  return registerFormula(name, team, cond,
    buff.formula.base.add(base),
    buff.prep.ele.add(eleOverride ?? self.reaction.infusion),
    buff.prep.move.add(move),
    ...extra,
  )
}

export function customShield(name: string, ele: ElementKey | undefined, base: NumNode, { team, cond = 'shield' }: FormulaArg = {}, ...extra: Data): Data {
  switch (ele) {
    case undefined: break
    case 'geo': base = prod(tag(1.5, reader.geo.tag), base); break
    default: base = prod(tag(2.5, reader[ele].tag), base)
  }

  const buff = team ? teamBuff : selfBuff
  return registerFormula(name, team, cond,
    buff.prep.ele.add(ele ?? ''),
    buff.formula.base.add(base),
    ...extra,
  )
}

export function customHeal(name: string, base: NumNode, { team, cond = 'heal' }: FormulaArg = {}, ...extra: Data): Data {
  const buff = team ? teamBuff : selfBuff
  return registerFormula(name, team, cond,
    buff.formula.base.add(base),
    ...extra,
  )
}

function registerFormula(name: string, team: boolean | undefined, cond: string | StrNode, ...extra: Data): Data {
  usedNames.add(name)
  return [
    (team ? teamBuff : selfBuff).formula.listing.add(tag(cond, { name })),
    ...extra.map(({ tag, value }) => ({ tag: { ...tag, name }, value }))
  ]
}
