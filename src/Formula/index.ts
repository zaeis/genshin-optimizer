import { allEleEnemyResKeys } from "../KeyMap"
import { allMainStatKeys, allSubstats } from "../Types/artifact_WR"
import { allArtifactSets, allElementsWithPhy, allSlotKeys } from "../Types/consts"
import { crawlObject, deepClone, objectKeyMap } from "../Util/Util"
import { Data, Info, Input, NumNode, ReadNode, StrNode } from "./type"
import { constant, frac, lookup, matchStr, max, min, naught, percent, prod, read, res, setReadNodeKeys, stringPrio, stringRead, sum, unit } from "./utils"

const asConst = true as const, pivot = true as const

const allElements = allElementsWithPhy
const allTalents = ["auto", "skill", "burst"] as const
const allMoves = ["normal", "charged", "plunging", "skill", "burst"] as const
const allMainSubStats = [...new Set([...allMainStatKeys, ...allSubstats] as const)]
const allTransformative = ["overloaded", "shattered", "electrocharged", "superconduct", "swirl"] as const
const allAmplifying = ["vaporize", "melt"] as const
const allMisc = [
  "stamina", "staminaDec_", "staminaSprintDec_", "staminaGlidingDec_", "staminaChargedDec_",
  "incHeal_", "shield_", "cdRed_", "moveSPD_", "atkSPD_", "weakspotDMG_"
] as const

const allModStats = [
  ...allMainSubStats,
  ...(["all", ...allTransformative, ...allAmplifying, ...allMoves] as const).map(x => `${x}_dmg_` as const),
]
const allNonModStats = [
  ...allElements.map(x => `${x}_res_` as const),
  ...allMoves.map(x => `${x}_critRate_` as const),
  ...allEleEnemyResKeys,
  ...allMisc,
]

const talent = objectKeyMap(allTalents, _ => read())
const allMainSubStatNodes = objectKeyMap(allMainSubStats, key => read(undefined, { key }))
const allModStatNodes = objectKeyMap(allModStats, key => read(undefined, { key }))
const allNonModStatNodes = objectKeyMap(allNonModStats, key => read(undefined, { key }))

for (const ele of allElements) {
  allMainSubStatNodes[`${ele}_dmg_`].info!.variant = ele
  allNonModStatNodes[`${ele}_res_`].info!.variant = ele
  allNonModStatNodes[`${ele}_enemyRes_`].info!.variant = ele
  allModStatNodes[`${ele}_dmg_`].info!.variant = ele
}
for (const reaction of [...allTransformative, ...allAmplifying]) {
  allModStatNodes[`${reaction}_dmg_`].info!.variant = reaction
}

function withDefaultInfo<T>(info: Info, value: T): T {
  value = deepClone(value)
  crawlObject(value, [], (x: any) => x.operation, (x: NumNode | StrNode) => x.info = { ...info, ...x.info, })
  return value
}
function markAccu<T>(accu: ReadNode<number>["accu"], value: T): void {
  crawlObject(value, [], (x: any) => x.operation, (x: NumNode | StrNode) => {
    if (x.operation === "read" && x.type === "number") x.accu = accu
  })
}

/** All read nodes */
const input = setReadNodeKeys(deepClone({
  charKey: stringRead(), charEle: stringRead(), infusion: stringRead(), weaponType: stringRead(),
  lvl: read(undefined, { key: "level", prefix: "char" }), constellation: read(), asc: read(), special: read(),

  base: objectKeyMap(['atk', 'hp', 'def'], key => read("add", { key })),
  customBonus: withDefaultInfo({ prefix: "custom", pivot }, {
    ...allModStatNodes, ...allNonModStatNodes,
  }),
  bonus: { talent },
  premod: { talent, ...allModStatNodes },
  total: withDefaultInfo({ prefix: "total", pivot }, {
    talent,
    ...allModStatNodes, ...allNonModStatNodes,
    /** Total Crit Rate capped to [0%, 100%] */
    cappedCritRate: read(undefined, { key: "critRate_" }),
  }),

  art: withDefaultInfo({ prefix: "art", asConst }, {
    ...allMainSubStatNodes,
    ...objectKeyMap(allSlotKeys, _ => ({ id: stringRead(), set: stringRead() })),
  }),
  artSet: objectKeyMap(allArtifactSets, set => read("add", { key: set })),

  weapon: withDefaultInfo({ prefix: "weapon", asConst }, {
    key: stringRead(), type: stringRead(),

    lvl: read(), asc: read(), refinement: read(), refineIndex: read(),
    main: read(), sub: read(), sub2: read(),
  }),

  team: { infusion: stringRead() },

  enemy: {
    def: read("add", { key: "enemyDef_multi", pivot }),
    resMulti: objectKeyMap(allElements, _ => read()),

    level: read(undefined, { key: "enemyLevel" }),
    res: objectKeyMap(allElements, ele => read("add", { key: `${ele}_enemyRes_`, variant: ele })),
    defRed: read("add", { key: "enemyDefRed_", pivot }),
    defIgn: read("add", { key: "enemyDefIgn_", pivot }),
  },

  hit: {
    ele: stringRead(), reaction: stringRead(), move: stringRead(), hitMode: stringRead(),
    base: read("add", { key: "base" }),

    dmgBonus: read(undefined, { key: "dmg_", pivot }), dmg: read(),
  },
}))

const { base, bonus, customBonus, premod, total, art, hit, enemy } = input

// Adjust `info` for printing
markAccu('add', { base, bonus, customBonus, premod, total, art })
crawlObject(premod, [], (x: any) => x.operation, (x: NumNode | StrNode) => delete x.info)
markAccu(undefined, { a: total.talent, b: total.cappedCritRate, })
for (const [key, value] of Object.entries(total)) {
  if (key.endsWith("_dmg_"))
    delete (value as ReadNode<number>).accu
}
base.atk.info = { key: "atk", prefix: "base", pivot }
delete total.critRate_.info!.pivot
total.critRate_.info!.prefix = "uncapped"

// Nodes that are not used anywhere else but `common` below

/** Base Amplifying Bonus */
const baseAmpBonus = sum(unit, prod(25 / 9, frac(total.eleMas, 1400)))
/** Effective reaction, taking into account the hit's element */
export const effectiveReaction = lookup(hit.ele, {
  pyro: lookup(hit.reaction, { vaporize: constant("vaporize"), melt: constant("melt") }, undefined),
  hydro: matchStr(hit.reaction, "vaporize", "vaporize", undefined),
  cryo: matchStr(hit.reaction, "melt", "melt", undefined),
}, undefined)

const common: Data = {
  premod: {
    talent: objectKeyMap(allTalents, talent => bonus.talent[talent]),
    ...objectKeyMap(allModStats, key => {
      const operands: NumNode[] = []
      switch (key) {
        case "atk": case "def": case "hp":
          operands.push(prod(base[key], sum(unit, premod[`${key}_`])))
          break
        case "critRate_":
          operands.push(percent(0.05, { key: "critRate", prefix: "default" }),
            lookup(hit.move, objectKeyMap(allMoves, move => customBonus[`${move}_critRate_`]), 0))
          break
        case "critDMG_":
          operands.push(percent(0.5, { key: "critDMG_", prefix: "default" }))
      }
      return sum(...[...operands, art[key], customBonus[key]].filter(x => x))
    }),
  },
  total: {
    talent: objectKeyMap(allTalents, talent => premod.talent[talent]),
    ...objectKeyMap(allModStats, key => premod[key]),
    ...objectKeyMap(allNonModStats, key => customBonus[key]),
    stamina: sum(constant(100, { key: "stamina", prefix: "default" }), customBonus.stamina),

    cappedCritRate: max(min(total.critRate_, unit), naught),
  },

  hit: {
    dmgBonus: sum(
      total.all_dmg_,
      lookup(effectiveReaction, objectKeyMap(allAmplifying, reaction => total[`${reaction}_dmg_`]), naught),
      lookup(hit.move, objectKeyMap(allMoves, move => total[`${move}_dmg_`]), naught),
      lookup(hit.ele, objectKeyMap(allElements, ele => total[`${ele}_dmg_`]), naught)
    ),
    ele: stringPrio(
      input.infusion,
      input.team.infusion,
      matchStr(input.weaponType, "catalyst", input.charEle, undefined),
      "physical",
    ),
    dmg: prod(
      hit.base,
      sum(unit, hit.dmgBonus),
      lookup(hit.hitMode, {
        hit: unit,
        critHit: sum(unit, total.critDMG_),
        avgHit: sum(unit, prod(total.cappedCritRate, total.critDMG_)),
      }, NaN),
      enemy.def,
      lookup(hit.ele,
        objectKeyMap(allElements, ele => enemy.resMulti[ele]), NaN),
      lookup(effectiveReaction, {
        melt: lookup(hit.ele, {
          pyro: prod(2, baseAmpBonus),
          cryo: prod(1.5, baseAmpBonus),
        }, 1, { key: "melt_dmg_" }),
        vaporize: lookup(hit.ele, {
          hydro: prod(2, baseAmpBonus),
          pyro: prod(1.5, baseAmpBonus),
        }, 1, { key: "vaporize_dmg_" }),
      }, 1),
    ),
  },

  enemy: {
    // TODO: shred cap of 90%
    def: frac(sum(input.lvl, 100), prod(sum(enemy.level, 100), sum(1, prod(-1, enemy.defRed)), sum(1, prod(-1, enemy.defIgn)))),
    resMulti: objectKeyMap(allElements, ele => res(enemy.res[ele])),
    res: objectKeyMap(allElements, ele => total[`${ele}_enemyRes_`])
  },
}

const target = setReadNodeKeys(deepClone(input), ["target"])

export {
  input, common, customBonus,

  target,
}
