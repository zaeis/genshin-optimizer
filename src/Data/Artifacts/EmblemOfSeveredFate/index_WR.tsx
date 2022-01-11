import flower from './flower.png'
import plume from './plume.png'
import sands from './sands.png'
import goblet from './goblet.png'
import circlet from './circlet.png'
import { IArtifactSheet } from '../../../Types/artifact_WR'
import { Data } from '../../../Formula/type'
import { min, prod, threshold_add } from '../../../Formula/utils'
import { input } from '../../../Formula/index'


export const data: Data = {
  number: {
    premod: {
      enerRech_: threshold_add(input.art.EmblemOfSeveredFate, 2, 0.2)
    },
    dmgBonus: {
      burst: threshold_add(input.art.EmblemOfSeveredFate, 4,
        min(0.75, prod(0.25, input.premod.enerRech_)))
    }
  }, string: {}
}

const artifact: IArtifactSheet = {
  name: "Emblem of Severed Fate", rarity: [4, 5],
  icons: {
    flower,
    plume,
    sands,
    goblet,
    circlet
  },
  setEffects: {
    2: {},
    4: {
      document: [{
        fields: [{
          text: "Elemental Burst DMG",
          formula: ["number", "dmgBonus", "burst"],
          fixed: 1,
          unit: "%"
        }]
      }]
    }
  }
}
export default artifact