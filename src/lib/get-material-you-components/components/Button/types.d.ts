import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material'

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    filled: true
    tonal: true
    outlined: true
    elevated: true
    text: true
    contained: false
  }
  interface ButtonPropsColorOverrides {
    tertiary: true
    surface: true
  }
}

export interface MaterialYouButton {
  MuiButton: {
    defaultProps?: ComponentsProps['MuiButton']
    styleOverrides?: ComponentsOverrides<Theme>['MuiButton']
    variants?: ComponentsVariants['MuiButton']
  }
}
