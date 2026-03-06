import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material'

export interface MaterialYouListItemButton {
  MuiListItemButton: {
    defaultProps?: ComponentsProps['MuiListItemButton']
    styleOverrides?: ComponentsOverrides<Theme>['MuiListItemButton']
    variants?: ComponentsVariants['MuiListItemButton']
  }
}
