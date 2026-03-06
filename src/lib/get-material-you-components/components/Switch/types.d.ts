import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material'

export interface MaterialYouSwitch {
  MuiSwitch: {
    defaultProps?: ComponentsProps['MuiSwitch']
    styleOverrides?: ComponentsOverrides<Theme>['MuiSwitch']
    variants?: ComponentsVariants['MuiSwitch']
  }
}
