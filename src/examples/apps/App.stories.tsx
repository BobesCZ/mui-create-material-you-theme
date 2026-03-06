import { createTheme, CssBaseline, ThemeOptions, ThemeProvider } from '@mui/material'
import { Meta, StoryObj } from '@storybook/react'

import {
  createMaterialYouTheme,
  getMaterialYouComponents,
  getMaterialYouPalette,
  getMaterialYouScheme,
  MaterialYouSchemeExported,
} from '../../lib'
import { customTheme } from './customTheme'
import { ExamplePage } from './ExamplePage'

const meta: Meta = {
  title: 'Examples/App',
  parameters: {
    controls: { disabled: true },
  },
}

export default meta
type Story = StoryObj

const DefaultThemeAppStory = () => {
  const materialYouLight = createMaterialYouTheme('light')

  return (
    <ThemeProvider theme={materialYouLight}>
      <CssBaseline />
      <ExamplePage />
    </ThemeProvider>
  )
}
export const DefaultThemeApp: Story = {
  render: () => <DefaultThemeAppStory />,
}

const CustomThemeAppStory = () => {
  const themeOptions: ThemeOptions = {
    typography: {
      fontFamily: 'Playpen Sans Variable, cursive',
      h5: {
        fontSize: '3rem',
      },
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            padding: 20,
          },
        },
      },
    },
  }
  const missingColors = {
    info: '#0000ff',
    success: '#00ff00',
    warning: '#ff0000',
  }
  const scheme = customTheme.schemes.light
  const customMaterialYouLight = createMaterialYouTheme(
    'light',
    scheme,
    themeOptions,
    missingColors,
  )

  return (
    <ThemeProvider theme={customMaterialYouLight}>
      <CssBaseline />
      <ExamplePage />
    </ThemeProvider>
  )
}
export const CustomThemeApp: Story = {
  render: () => <CustomThemeAppStory />,
}

const ManualThemeAppStory = () => {
  const themeOptions: ThemeOptions = {
    typography: {
      fontFamily: 'Playpen Sans Variable, cursive',
      h5: {
        fontSize: '3rem',
      },
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            padding: 20,
          },
        },
      },
    },
  }
  const missingColors = {
    info: '#0000ff',
    success: '#00ff00',
    warning: '#ff0000',
  }
  const exportedScheme: MaterialYouSchemeExported = customTheme.schemes.light

  const scheme = getMaterialYouScheme('light', exportedScheme, missingColors)
  const palette = getMaterialYouPalette('light', scheme)
  const theme = createTheme({ ...themeOptions, palette })
  const components = getMaterialYouComponents(theme)
  const themeWithComponents = createTheme(theme, { components })

  return (
    <ThemeProvider theme={themeWithComponents}>
      <CssBaseline />
      <ExamplePage />
    </ThemeProvider>
  )
}
export const ManualThemeApp: Story = {
  render: () => <ManualThemeAppStory />,
}
