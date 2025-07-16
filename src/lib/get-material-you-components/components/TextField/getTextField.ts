import { Theme } from '@mui/material'

import { MaterialYouTextField } from './types'

export const getTextField = (_theme: Theme): MaterialYouTextField => {
  return {
    MuiTextField: {
      styleOverrides: {},
    },
  }
}
