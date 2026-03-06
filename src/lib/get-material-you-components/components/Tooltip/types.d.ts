import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material'

export interface MaterialYouTooltip {
  MuiTooltip: {
    defaultProps?: ComponentsProps['MuiTooltip']
    styleOverrides?: ComponentsOverrides<Theme>['MuiTooltip']
    variants?: ComponentsVariants['MuiTooltip']
  }
}
