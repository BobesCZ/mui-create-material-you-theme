import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material'

export interface MaterialYouCssBaseline {
  MuiCssBaseline: {
    defaultProps?: ComponentsProps['MuiCssBaseline']
    styleOverrides?: ComponentsOverrides<Theme>['MuiCssBaseline']
    variants?: ComponentsVariants['MuiCssBaseline']
  }
}
