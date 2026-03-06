import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material'

export interface MaterialYouAppBar {
  MuiAppBar: {
    defaultProps?: ComponentsProps['MuiAppBar']
    styleOverrides?: ComponentsOverrides<Theme>['MuiAppBar']
    variants?: ComponentsVariants['MuiAppBar']
  }
}
