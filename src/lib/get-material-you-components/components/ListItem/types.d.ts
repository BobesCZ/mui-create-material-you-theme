import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material'

export interface MaterialYouListItem {
  MuiListItem: {
    defaultProps?: ComponentsProps['MuiListItem']
    styleOverrides?: ComponentsOverrides<Theme>['MuiListItem']
    variants?: ComponentsVariants['MuiListItem']
  }
}
