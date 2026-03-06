import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material'

export interface MaterialYouDrawer {
  MuiDrawer: {
    defaultProps?: ComponentsProps['MuiDrawer']
    styleOverrides?: ComponentsOverrides<Theme>['MuiDrawer']
    variants?: ComponentsVariants['MuiDrawer']
  }
}
