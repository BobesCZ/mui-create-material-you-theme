import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material'

export interface MaterialYouToggleButton {
  MuiToggleButton: {
    defaultProps?: ComponentsProps['MuiToggleButton']
    styleOverrides?: ComponentsOverrides<Theme>['MuiToggleButton']
    variants?: ComponentsVariants['MuiToggleButton']
  }
}
