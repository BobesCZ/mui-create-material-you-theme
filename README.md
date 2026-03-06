# Material You (Material Design 3) theme for MUI

[![npm version](https://img.shields.io/npm/v/mui-create-material-you-theme)](https://www.npmjs.com/package/mui-create-material-you-theme)
[![npm downloads](https://img.shields.io/npm/dm/mui-create-material-you-theme)](https://www.npmjs.com/package/mui-create-material-you-theme)
[![license](https://img.shields.io/npm/l/mui-create-material-you-theme)](https://github.com/BobesCZ/mui-create-material-you-theme)
[![live demo](https://img.shields.io/badge/Storybook-live%20demo-ff4785?logo=storybook)](https://bobescz.github.io/mui-create-material-you-theme/storybook-static)

mui-create-material-you-theme is a utility for creating **Material You (Material Design 3 / MD3) themes for MUI React applications**.

The library generates a Material You color scheme and applies it to existing MUI components without replacing their implementation, providing a simple **MUI Material You example** using standard MUI theming APIs.

It also helps migrate an existing MUI theme to a Material You look and adds support for new color props such as `tertiary`.

> This package does **not** provide new components or theme providers/switches — it only restyles existing MUI components.

## 📦 Live demo

Explore the live Storybook to see all Material You components in action:

👉 [**Live Material You MUI demo (Storybook)**](https://bobescz.github.io/mui-create-material-you-theme/storybook-static/?path=/story/components-button--all-variants)

This demo shows how MUI components look when restyled with the Material You design system using this package.

## 🌟 Motivation and Goals

Our company signed a contract (in summer 2024) to build a web app based on the **Material You** design system. Since we're fully invested in the MUI ecosystem and our designers used Material You in Figma, we needed to adapt the MUI library accordingly.

MUI currently implements **Material Design 2**, and we don't expect a Material You-compatible version to be released in 2025 (or in 2026). Therefore, we decided to restyle MUI components ourselves.

> The goal of this package is to **efficiently restyle MUI components to resemble Material You** — without rewriting the entire component logic or breaking MUI internals.\
> We aim to follow Material You guidelines as closely as possible, but **not strictly**.

If you're interested in implementing stricter guideline compliance, we welcome contributions via pull requests!

## 📚 Concepts

- **Material You** = Material Design 3
- **MUI2** = MUI's implementation of Material Design 2

### Key Challenges

- The MUI2 palette uses a different design system than Material You.\
  We need to map **49 named colors** (Material You) to the existing **32 differently named** colors used by the MUI palette.
- Material You does not define colors for `info`, `success`, or `warning` (only `error` is included).
- Material You introduces a `tertiary` color, which needs to be supported across all components that previously only used `primary` and `secondary`.

## 📦 Installation

You can install the package from NPM:

```bash
npm install mui-create-material-you-theme
```

This package is designed to work with **MUI v7** and **React 18+**.

### ⚠️ Peer dependencies

Make sure you have the following packages installed in your project:

```bash
npm install @mui/material @emotion/react @emotion/styled react react-dom
```

> If you are already using MUI in your project, you most likely already have these installed.

## ⚠️ TypeScript setup

This library **extends several MUI component types** to support the additional Material You colors (for example `tertiary`).

Because these changes are implemented using **TypeScript module augmentation**, TypeScript needs to load the augmentation definitions explicitly.

Add the following **type-only import once in your project**:

```ts
import type {} from 'mui-create-material-you-theme/themeAugmentation'
```

This import:

- loads the library's type augmentations
- extends existing MUI types such as ButtonProps, ToggleButtonGroupProps, etc.
- enables additional color values like tertiary
- has no runtime effect, only tells TypeScript to load the type extensions provided by this library

After this import is present, TypeScript will correctly recognize the new color values in component props.

## 🚀 Usage

For an example of how to integrate the theme in your app, check out the code in the [App.stories.tsx file](https://github.com/BobesCZ/mui-create-material-you-theme/blob/main/src/examples/apps/App.stories.tsx).

Choose the setup that best fits your use case:

### Try it quickly

Use the default theme with no customization:

```tsx
import type {} from 'mui-create-material-you-theme/themeAugmentation'

import { CssBaseline, ThemeProvider } from '@mui/material'
import { createMaterialYouTheme } from 'mui-create-material-you-theme'

const materialYouLight = createMaterialYouTheme('light')

return (
  <ThemeProvider theme={materialYouLight}>
    <CssBaseline />
    {children}
  </ThemeProvider>
)
```

### Migrate your existing theme to Material You

If you already have a customized theme with palette overrides, you'll need to convert your color definitions to the Material You system.

1. Open the official [Material Theme Builder](https://material-foundation.github.io/material-theme-builder/)
2. Export your theme as a JSON file
3. Select the desired scheme (e.g., `light`) from the `schemes` object
4. Copy the scheme object and save it in your project

> Notes:
>
> - `createMaterialYouTheme` internally uses `createTheme`, so do **not** call it manually.
> - Do **not** pass `palette` directly in `themeOptions` — the colors are handled automatically from the scheme.

```tsx
import type {} from 'mui-create-material-you-theme/themeAugmentation'

import { CssBaseline, ThemeOptions, ThemeProvider } from '@mui/material'
import { createMaterialYouTheme } from "mui-create-material-you-theme"

// Scheme from official builder
const scheme = {
  primary: '#3C6090',
  onPrimary: '#FFFFFF',
  // ...
}

// Your custom theme options
const themeOptions: ThemeOptions = {
  typography: { ... },
  components: { ... },
}

// Add missing colors not included in Material You
const missingColors = {
  info: '#0000ff',
  success: '#00ff00',
  warning: '#ff0000',
}

const customMaterialYouTheme = createMaterialYouTheme(
  'light',
  scheme,
  themeOptions,
  missingColors,
)

return (
  <ThemeProvider theme={customMaterialYouTheme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
)
```

### Advanced theme migration (manual control)

If you need full control over the theme creation process:

```tsx
import type {} from 'mui-create-material-you-theme/themeAugmentation'

import { createTheme, CssBaseline, ThemeOptions, ThemeProvider } from '@mui/material'
import {
  getMaterialYouComponents,
  getMaterialYouPalette,
  getMaterialYouScheme,
} from 'mui-create-material-you-theme'

const scheme = {}
const themeOptions: ThemeOptions = {}
const missingColors = {}

// `scheme` contains all colors which are needed to create MUI2 palette
const scheme = getMaterialYouScheme(mode, exportedScheme, missingColors)

// `palette` contains colors mapped to MUI2 palette
const palette = getMaterialYouPalette(mode, scheme)

// `theme` merges your `themeOptions` and Material You palette
const theme = createTheme({ ...themeOptions, palette })

const components = getMaterialYouComponents(theme)

// `themeWithComponent` merges `theme` and Material You components styles
const themeWithComponents = createTheme(theme, { components })

return (
  <ThemeProvider theme={themeWithComponents}>
    <CssBaseline />
    {children}
  </ThemeProvider>
)
```

### Customize components further

If you want to make deeper changes to component styling, clone this repository and copy the `src/lib` folder into your project.

You can then adjust component styles as needed.

> If you fix bugs or improve design fidelity with the Material You spec, please consider submitting a pull request!

## 🙏 Acknowledgments

Styles based on [react-material-you-theme](https://github.com/ZakAlbert/react-material-you-theme/)
