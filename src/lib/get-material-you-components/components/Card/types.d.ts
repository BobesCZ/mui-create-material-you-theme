import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material'

declare module '@mui/material/Paper' {
  interface PaperPropsVariantOverrides {
    filled: true
  }
}

export interface MaterialYouCard {
  MuiCard: {
    defaultProps?: ComponentsProps['MuiCard']
    styleOverrides?: ComponentsOverrides<Theme>['MuiCard']
    variants?: ComponentsVariants['MuiCard']
  }
}
