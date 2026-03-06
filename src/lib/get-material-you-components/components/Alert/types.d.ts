import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material'

export interface MaterialYouAlert {
  MuiAlert: {
    defaultProps?: ComponentsProps['MuiAlert']
    styleOverrides?: ComponentsOverrides<Theme>['MuiAlert']
    variants?: ComponentsVariants['MuiAlert']
  }
}
