import { cmpGE, lookup, prod, subscript, sum, sumfrac } from '@genshin-optimizer/waverider'
import { Data, enemy, enemyDebuff, percent, priorityTable, self, selfBuff } from '../util'

export const infusionPrio = {
  overridable: { hydro: 4, pyro: 5 },
  team: { hydro: 2, pyro: 3 },
  nonOverridable: { hydro: 0, pyro: 1 },
}
const infusionTable = priorityTable(infusionPrio), preRes = enemy.common.preRes

const data: Data = [
  enemyDebuff.common.postRes.add(cmpGE(preRes, percent(0.75),
    sumfrac(1, prod(4, preRes)),
    cmpGE(preRes, 0,
      sum(1, prod(-1, preRes)),
      sum(1, prod(-0.5, preRes))
    )
  )),
  enemyDebuff.common.inDmg.add(prod(
    sumfrac(
      sum(self.char.lvl, 100),
      prod(
        sum(enemy.common.lvl, 100),
        sum(percent(1), prod(-1, enemy.common.defRed_)), // TODO: Cap
        sum(percent(1), prod(-1, enemy.common.defIgn)),  // TODO: Cap
      ),
    ),
    enemy.common.postRes,
  )),
  selfBuff.dmg.out.add(prod(
    self.reaction.ampMulti,
    sum(self.formula.base, self.reaction.cataAddi),
    sum(percent(1), self.final.dmg_),
  )),
  selfBuff.dmg.critMulti.add(lookup(self.common.critMode, {
    'crit': sum(1, self.common.cappedCritRate_),
    'nonCrit': 1,
    'avg': sum(1, prod(self.common.cappedCritRate_, self.final.critDMG_)),
  })),

  selfBuff.reaction.infusion.add(subscript(self.reaction.infusionIndex.max, infusionTable)),
  selfBuff.reaction.infusionIndex.add(0),
]
export default data