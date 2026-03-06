import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material'

declare module '@mui/material/Badge' {
  interface BadgePropsColorOverrides {
    tertiary: true
  }
}

export interface MaterialYouBadge {
  MuiBadge: {
    defaultProps?: ComponentsProps['MuiBadge']
    styleOverrides?: ComponentsOverrides<Theme>['MuiBadge']
    variants?: ComponentsVariants['MuiBadge']
  }
}
