import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material'

export interface MaterialYouAccordion {
  MuiAccordion: {
    defaultProps?: ComponentsProps['MuiAccordion']
    styleOverrides?: ComponentsOverrides<Theme>['MuiAccordion']
    variants?: ComponentsVariants['MuiAccordion']
  }
}
