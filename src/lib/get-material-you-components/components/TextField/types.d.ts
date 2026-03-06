import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material'

declare module '@mui/material/TextField' {
  interface TextFieldPropsColorOverrides {
    tertiary: true
  }
}

export interface MaterialYouTextField {
  MuiTextField: {
    defaultProps?: ComponentsProps['MuiTextField']
    styleOverrides?: ComponentsOverrides<Theme>['MuiTextField']
    variants?: ComponentsVariants['MuiTextField']
  }
}
