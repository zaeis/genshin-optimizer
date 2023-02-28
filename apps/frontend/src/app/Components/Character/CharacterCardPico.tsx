import { CharacterKey } from '@genshin-optimizer/consts';
import { characterAsset } from '@genshin-optimizer/g-assets';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Box, CardActionArea, Skeleton, Typography } from '@mui/material';
import { ReactNode, Suspense, useCallback } from 'react';
import Assets from '../../Assets/Assets';
import { getCharSheet } from '../../Data/Characters';
import { ascensionMaxLevel } from '../../Data/LevelData';
import { ElementIcon } from '../../KeyMap/StatIcon';
import useCharacter from '../../ReactHooks/useCharacter';
import useCharMeta from '../../ReactHooks/useCharMeta';
import useDBMeta from '../../ReactHooks/useDBMeta';
import BootstrapTooltip from '../BootstrapTooltip';
import CardDark from '../Card/CardDark';
import ConditionalWrapper from '../ConditionalWrapper';
import SqBadge from '../SqBadge';
import CharacterCard from './CharacterCard';

export default function CharacterCardPico({ characterKey, onClick, simpleTooltip = false, }:
  { characterKey: CharacterKey, onClick?: (characterKey: CharacterKey) => void, simpleTooltip?: boolean }) {
  const character = useCharacter(characterKey)
  const { favorite } = useCharMeta(characterKey)
  const { gender } = useDBMeta()
  const characterSheet = getCharSheet(characterKey, gender)
  const onClickHandler = useCallback(() => onClick?.(characterKey), [characterKey, onClick])
  const actionWrapperFunc = useCallback((children: ReactNode) =>
    <CardActionArea onClick={onClickHandler}>{children}</CardActionArea>,
    [onClickHandler]
  )

  const simpleTooltipWrapperFunc = useCallback((children: ReactNode) =>
    <BootstrapTooltip placement="top" title={
      <Suspense fallback={<Skeleton width={300} height={400} />}><Typography>{characterSheet.elementKey && <ElementIcon ele={characterSheet.elementKey} iconProps={{
        fontSize: "inherit",
        sx: { verticalAlign: "-10%", color: `${characterSheet.elementKey}.main` }
      }} />} {characterSheet.name}</Typography></Suspense>
    }>
      {children as JSX.Element}
    </BootstrapTooltip>,
    [characterSheet]
  )
  const charCardTooltipWrapperFunc = useCallback((children: ReactNode) =>
    <BootstrapTooltip enterNextDelay={1000} enterTouchDelay={1000} placement="top" title={
      <Box sx={{ width: 300, m: -1 }}>
        <CharacterCard hideStats characterKey={characterKey} />
      </Box>
    }>
      {children as JSX.Element}
    </BootstrapTooltip>,
    [characterKey]
  )

  return <ConditionalWrapper condition={simpleTooltip} wrapper={simpleTooltipWrapperFunc} falseWrapper={charCardTooltipWrapperFunc}>
    <CardDark sx={{ maxWidth: 128, position: "relative", display: "flex", flexDirection: "column", }}>
      <ConditionalWrapper condition={!!onClick} wrapper={actionWrapperFunc}>
        <Box display="flex" className={`grad-${characterSheet.rarity}star`}>
          <Box
            component="img"
            src={characterAsset(characterKey, "iconSide", gender)}
            maxWidth="100%"
            maxHeight="100%"
            sx={{ transform: "scale(1.4)", transformOrigin: "bottom" }}
          />
        </Box>
        {character && <Typography sx={{ position: "absolute", fontSize: "0.75rem", lineHeight: 1, opacity: 0.85, pointerEvents: "none", top: 0, }}>
          <strong><SqBadge color="primary" >{character.level}/{ascensionMaxLevel[character.ascension]}</SqBadge></strong>
        </Typography>}
        <Box sx={{ position: "absolute", top: 0, right: 0 }}>
          {favorite ? <FavoriteIcon fontSize="small" /> : <FavoriteBorderIcon fontSize="small" />}
        </Box>
        {character && <Typography sx={{ position: "absolute", fontSize: "0.75rem", lineHeight: 1, opacity: 0.85, pointerEvents: "none", bottom: 0, right: 0, }}>
          <strong><SqBadge color="secondary" >C{character.constellation}</SqBadge></strong>
        </Typography>}
      </ConditionalWrapper>
    </CardDark>
  </ConditionalWrapper>
}

export function BlankCharacterCardPico({ index }: { index: number }) {
  return <CardDark sx={{ display: "flex", alignItems: "center", justifyContent: "center", py: "12.5%" }}>
    <Box component="img" src={Assets.team[`team${index + 2}`]} sx={{ width: "75%", height: "auto", opacity: 0.7 }} />
  </CardDark>
}
