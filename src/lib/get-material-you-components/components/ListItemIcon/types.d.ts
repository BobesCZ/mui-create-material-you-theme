import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material'

export interface MaterialYouListItemIcon {
  MuiListItemIcon: {
    defaultProps?: ComponentsProps['MuiListItemIcon']
    styleOverrides?: ComponentsOverrides<Theme>['MuiListItemIcon']
    variants?: ComponentsVariants['MuiListItemIcon']
  }
}
