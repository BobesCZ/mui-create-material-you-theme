import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material'

declare module '@mui/material/ToggleButtonGroup' {
  interface ToggleButtonGroupPropsColorOverrides {
    primary: true
    surface: true
    secondary: true
    tertiary: true

    success: true
    info: true
    warning: true
    error: true
    standard: true
  }
}

export interface MaterialYouToggleButtonGroup {
  MuiToggleButtonGroup: {
    defaultProps?: ComponentsProps['MuiToggleButtonGroup']
    styleOverrides?: ComponentsOverrides<Theme>['MuiToggleButtonGroup']
    variants?: ComponentsVariants['MuiToggleButtonGroup']
  }
}
