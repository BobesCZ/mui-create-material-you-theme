import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material'

declare module '@mui/material/IconButton' {
  interface IconButtonOwnProps {
    variant?: 'standard' | 'filled' | 'tonal' | 'outlined'
  }
  interface IconButtonPropsColorOverrides {
    tertiary: true
    default: false
  }
}

export interface MaterialYouIconButton {
  MuiIconButton: {
    defaultProps?: ComponentsProps['MuiIconButton']
    styleOverrides?: ComponentsOverrides<Theme>['MuiIconButton']
    variants?: ComponentsVariants['MuiIconButton']
  }
}
