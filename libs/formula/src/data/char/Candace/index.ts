import { allElementKeys } from '@genshin-optimizer/consts'
import { cmpEq, cmpGE, prod, sum } from '@genshin-optimizer/waverider'
import { infusionPrio } from '../../common/dmg'
import { allCustoms, percent, register, self, selfBuff, teamBuff } from '../../util'
import { CharDataGen, customDmg, dataGenToCharInfo, dmg, entriesForChar, shield } from '../util'
import data_gen from './data.gen.json'
import skillParam_gen from './skillParam.gen.json'

let a = 0, s = 0, b = 0
const dm = {
  normal: {
    hitArr: [
      skillParam_gen.auto[a++], // 1
      skillParam_gen.auto[a++], // 2
      skillParam_gen.auto[a++], // 3.1
      skillParam_gen.auto[a++], // 3.2
      skillParam_gen.auto[a++], // 4
    ]
  },
  charged: {
    dmg: skillParam_gen.auto[a++],
    stamina: skillParam_gen.auto[a++][0],
  },
  plunging: {
    dmg: skillParam_gen.auto[a++],
    low: skillParam_gen.auto[a++],
    high: skillParam_gen.auto[a++],
  },
  skill: {
    shield_hp_: skillParam_gen.skill[s++],
    shield_base: skillParam_gen.skill[s++],
    basic_dmg: skillParam_gen.skill[s++],
    charged_dmg: skillParam_gen.skill[s++],
    pressCd: skillParam_gen.skill[s++][0],
    holdCd: skillParam_gen.skill[s++][0],
  },
  burst: {
    skill_dmg: skillParam_gen.burst[b++],
    duration: skillParam_gen.burst[b++][0],
    dmg_bonus_: skillParam_gen.burst[b++][0],
    wave_dmg: skillParam_gen.burst[b++],
    num_waves: skillParam_gen.burst[b++][0],
    cd: skillParam_gen.burst[b++][0],
    cost: skillParam_gen.burst[b++][0]
  },
  passive2: {
    normalEle_dmg_: skillParam_gen.passive2[0][0],
  },
  constellation1: {
    durationInc: skillParam_gen.constellation1[0],
  },
  constellation2: {
    hp_: skillParam_gen.constellation2[0],
    duration: skillParam_gen.constellation2[1],
  },
  constellation6: {
    dmg: skillParam_gen.constellation6[0],
    cd: skillParam_gen.constellation6[1],
  },
} as const

const info = dataGenToCharInfo(data_gen as CharDataGen)
const { final, char: { ascension, constellation } } = self
// Conditional
const { afterBurst, c2AfterSkillHit } = allCustoms(info.key)

const normalEle_dmg_ = cmpEq(afterBurst, 'on', percent(dm.burst.dmg_bonus_))

const a4_normalEle_dmg_ = cmpGE(ascension, 4, cmpEq(afterBurst, 'on',
  prod(percent(dm.passive2.normalEle_dmg_), final.hp, 1 / 1000)
))
const c2_hp_ = cmpGE(constellation, 2, cmpEq(c2AfterSkillHit, 'on', percent(dm.constellation2.hp_)))

export default register(info.key,
  entriesForChar(info, data_gen),
  selfBuff.char.burst.add(cmpGE(constellation, 3, 3)),
  selfBuff.char.skill.add(cmpGE(constellation, 5, 3)),

  selfBuff.premod.hp_.add(c2_hp_),

  allElementKeys.map(ele =>
    teamBuff.premod.dmg_.normal[ele].add(sum(normalEle_dmg_, a4_normalEle_dmg_))),
  teamBuff.reaction.infusionIndex.add(cmpEq(afterBurst, 'on', infusionPrio.team.hydro)),

  // Dmg Formula
  dm.normal.hitArr.flatMap((arr, i) =>
    dmg(`normal_${i}`, info, 'atk', arr, 'normal')),
  dmg(`charged`, info, 'atk', dm.charged.dmg, 'charged'),
  Object.entries(dm.plunging).flatMap(([name, arr]) =>
    dmg(`plunging_${name}`, info, 'atk', arr, 'plunging')),
  (['basic', 'charged'] as const).flatMap(k =>
    dmg(`skill_${k}`, info, 'hp', dm.skill[`${k}_dmg`], 'skill')),
  (['skill', 'wave'] as const).flatMap(k =>
    dmg(`burst_${k}`, info, 'hp', dm.burst[`${k}_dmg`], 'burst')),
  shield(`skill_shield`, info, 'hp', dm.skill.shield_hp_, dm.skill.shield_base, 'skill'),
  shield(`skill_hydroShield`, info, 'hp', dm.skill.shield_hp_, dm.skill.shield_base, 'skill', { ele: 'hydro' }),
  customDmg(`c6`, info, 'burst', prod(dm.constellation6.dmg, final.hp)) // TODO Guard this behind c6
)