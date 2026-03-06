import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material'

declare module '@mui/material/Fab' {
  interface FabPropsColorOverrides {
    primary: true
    surface: true
    secondary: true
    tertiary: true

    success: false
    info: false
    warning: false
    error: false
    default: false
    inherit: false
  }
}

export interface MaterialYouFab {
  MuiFab: {
    defaultProps?: ComponentsProps['MuiFab']
    styleOverrides?: ComponentsOverrides<Theme>['MuiFab']
    variants?: ComponentsVariants['MuiFab']
  }
}
