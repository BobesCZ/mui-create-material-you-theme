import { Theme } from '@mui/material'

import {
  getAccordion,
  getAlert,
  getAppBar,
  getBadge,
  getButton,
  getCard,
  getCssBaseline,
  getDrawer,
  getFab,
  getIconButton,
  getListItem,
  getListItemButton,
  getListItemIcon,
  getMenu,
  getSwitch,
  getTextField,
  getToggleButton,
  getToggleButtonGroup,
  getTooltip,
} from './components'

export const getMaterialYouComponents = (theme: Theme): Theme['components'] => {
  return {
    ...getCssBaseline(theme),
    ...getAccordion(theme),
    ...getAlert(theme),
    ...getAppBar(theme),
    ...getBadge(theme),
    ...getButton(theme),
    ...getCard(theme),
    ...getDrawer(theme),
    ...getFab(theme),
    ...getIconButton(theme),
    ...getListItem(theme),
    ...getListItemButton(theme),
    ...getListItemIcon(theme),
    ...getMenu(theme),
    ...getSwitch(theme),
    ...getTextField(theme),
    ...getToggleButton(theme),
    ...getToggleButtonGroup(theme),
    ...getTooltip(theme),
  } as Theme['components']
}
