import { allArtifactSlotKeys, charKeyToLocCharKey, LocationCharacterKey, LocationKey } from "@genshin-optimizer/consts";
import SettingsIcon from '@mui/icons-material/Settings';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import { Box, Button, CardActionArea, CardContent, Divider, Grid, Stack, ToggleButton, Typography } from "@mui/material";
import { MouseEvent, useCallback, useContext, useDeferredValue, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import SlotIcon from "../../../../../Components/Artifact/SlotIcon";
import CardDark from "../../../../../Components/Card/CardDark";
import CardLight from "../../../../../Components/Card/CardLight";
import CharacterCardPico from "../../../../../Components/Character/CharacterCardPico";
import CloseButton from "../../../../../Components/CloseButton";
import InfoTooltip from "../../../../../Components/InfoTooltip";
import ModalWrapper from "../../../../../Components/ModalWrapper";
import SolidToggleButtonGroup from "../../../../../Components/SolidToggleButtonGroup";
import SqBadge from "../../../../../Components/SqBadge";
import { CharacterContext } from "../../../../../Context/CharacterContext";
import { DatabaseContext } from "../../../../../Database/Database";
import { allAllowLocationsState, AllowLocationsState } from "../../../../../Database/DataManagers/BuildSettingData";
import useBoolState from "../../../../../ReactHooks/useBoolState";
import useForceUpdate from "../../../../../ReactHooks/useForceUpdate";
import { iconInlineProps } from "../../../../../SVGIcons";
import { toggleArr } from "../../../../../Util/Util";
import useBuildSetting from "../useBuildSetting";

export default function AllowChar({ disabled = false, numArtsEquippedUsed }: { disabled?: boolean, numArtsEquippedUsed: string }) {
  const { t } = useTranslation("page_character_optimize")
  const { character: { key: characterKey } } = useContext(CharacterContext)
  const { buildSetting: { allowLocations, allowLocationsState }, buildSettingDispatch } = useBuildSetting(characterKey)
  const { database } = useContext(DatabaseContext)
  const [show, onOpen, onClose] = useBoolState(false)
  const [dbDirty, forceUpdate] = useForceUpdate()
  const deferredDbDirty = useDeferredValue(dbDirty)

  useEffect(() => database.charMeta.followAny(_ => forceUpdate()), [forceUpdate, database])
  useEffect(() => database.chars.followAny(_ => forceUpdate()), [forceUpdate, database])

  const locList = useMemo(() => deferredDbDirty && Array.from(new Set(
    Object.entries(database.chars.data)
      .filter(([ck]) => ck !== characterKey)
      .sort(([ck1, c1], [ck2, c2]) => {
        // sort characters by: star => more artifacts equipped
        const [choosec1, choosec2] = [-1, 1]
        const c1f = database.charMeta.get(ck1).favorite
        const c2f = database.charMeta.get(ck2).favorite
        if (c1f && !c2f) return choosec1
        else if (c2f && !c1f) return choosec2

        const art1 = Object.values(c1.equippedArtifacts).filter(id => id).length
        const art2 = Object.values(c2.equippedArtifacts).filter(id => id).length
        if (art1 > art2) return choosec1
        else if (art2 > art1) return choosec2
        return ck1.localeCompare(ck2)

      }).map(([k]) => charKeyToLocCharKey(k))))
    , [deferredDbDirty, characterKey, database])

  const allowAll = useCallback(() => buildSettingDispatch({ allowLocations: [...locList], allowLocationsState: "customList" }), [buildSettingDispatch, locList])
  const disallowAll = useCallback(() => buildSettingDispatch({ allowLocations: [], allowLocationsState: "customList" }), [buildSettingDispatch])

  const toggle = useCallback((lk: LocationKey) => buildSettingDispatch({ allowLocations: toggleArr(allowLocations, lk), allowLocationsState: "customList" }), [allowLocations, buildSettingDispatch])

  const setState = useCallback((_e: MouseEvent, state: AllowLocationsState) => buildSettingDispatch({ allowLocationsState: state }), [buildSettingDispatch])

  const total = locList.length
  const useTot = allowLocations.length
  const charactersAllowed = allowLocationsState === "all"
    ? total
    : (allowLocationsState === "customList"
      ? `${useTot}/${total}`
      : 0 // unequippedOnly
    )
  return <Box display="flex" gap={1}>
    {/* Begin modal */}
    <ModalWrapper open={show} onClose={onClose} containerProps={{ maxWidth: "xl" }}><CardDark>
      <CardContent>
        <Box display="flex" gap={1} alignItems="center" >
          <Typography variant="h6">{t`excludeChar.title`}</Typography>
          <InfoTooltip title={
            <Typography>
              {t`excludeChar.tooltip`}
            </Typography>
          } />
          <Box flexGrow={1} />
          <CloseButton onClick={onClose} size="small" />
        </Box>
      </CardContent>
      <Divider />
      <CardContent sx={{ pb : 0 }}>
        <SolidToggleButtonGroup
          exclusive
          baseColor="secondary"
          size="small"
          value={allowLocationsState}
          onChange={setState}
        >
          {allAllowLocationsState.map(s =>
            <ToggleButton key={s} value={s} disabled={allowLocationsState === s || disabled}>
              {t(`excludeChar.states.${s}`)}
            </ToggleButton>
          )}
        </SolidToggleButtonGroup>
      </CardContent>
      <CardContent>
        <Box pb={1} display="flex" gap={1} flexWrap="wrap">
          <Button color="success" sx={{ flexGrow: 1 }} onClick={allowAll} >
            {t`excludeChar.modal.allow_all`}
            <SqBadge sx={{ ml: 1 }}><strong>{`${useTot}/${total}`}</strong></SqBadge>
          </Button>
          <Button color="error" sx={{ flexGrow: 1 }} onClick={disallowAll} >
            {t`excludeChar.modal.disallow_All`}
            <SqBadge sx={{ ml: 1 }}><strong>{`${total - useTot}/${total}`}</strong></SqBadge>
          </Button>
        </Box>
        <Grid container spacing={1} columns={{ xs: 6, sm: 7, md: 10, lg: 12, xl: 16 }}>
          {locList.map((lk) =>
            <Grid item key={lk} xs={1}>
              <SelectItem locKey={lk} onClick={() => toggle(lk)} selected={allowLocations.includes(lk)} />
            </Grid>
          )}
        </Grid>
      </CardContent>
    </CardDark></ModalWrapper>

    {/* Button to open modal */}
    <CardLight sx={{ display: "flex", width: "100%" }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Stack spacing={1}>
          <Typography>
            <strong>{t("excludeChar.buttonTitle")}</strong>
          </Typography>
          <Typography>
            {t("excludeChar.chars")} <SqBadge color="success">{charactersAllowed} <ShowChartIcon {...iconInlineProps} />{t("artSetConfig.allowed")}</SqBadge>
          </Typography>
          <Typography>
            {t("excludeChar.artis")} <SqBadge color="success">{numArtsEquippedUsed} <ShowChartIcon {...iconInlineProps} />{t("artSetConfig.allowed")}</SqBadge>
          </Typography>
        </Stack>
      </CardContent>
      <Button sx={{ borderRadius: 0, flexShrink: 1, minWidth: 40 }} onClick={onOpen} disabled={disabled} color="info">
        <SettingsIcon />
      </Button>
    </CardLight>
  </Box >
}

function SelectItem({ locKey, selected, onClick }: {
  locKey: LocationCharacterKey,
  onClick: () => void,
  selected: boolean
}) {
  const { database } = useContext(DatabaseContext)
  const char = database.chars.get(database.chars.LocationToCharacterKey(locKey))
  return <CardActionArea onClick={onClick}>
    <CardLight sx={{ opacity: selected ? undefined : 0.6, borderColor: selected ? "rgb(100,200,100)" : "rgb(200,100,100)", borderWidth: "3px", borderStyle: "solid", borderRadius: "8px" }}  >
      <CharacterCardPico characterKey={database.chars.LocationToCharacterKey(locKey)} />
      <Box fontSize="0.85em" display="flex" justifyContent="space-between" p={0.3} >
        {allArtifactSlotKeys.map(s => <SlotIcon key={s} slotKey={s} iconProps={{ fontSize: "inherit", sx: { opacity: char?.equippedArtifacts[s] ? undefined : 0.5 } }} />)}
      </Box>
    </CardLight>
  </CardActionArea>
}
