import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material'

export interface MaterialYouMenu {
  MuiMenu: {
    defaultProps?: ComponentsProps['MuiMenu']
    styleOverrides?: ComponentsOverrides<Theme>['MuiMenu']
    variants?: ComponentsVariants['MuiMenu']
  }
}
