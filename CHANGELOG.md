# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

## 2.0.0

- Updated @mui/material 7.2.0 → 7.3.9
- Updated @material/material-color-utilities to 0.3.0 → 0.4.0
- Changed peerDependencies to support react 18 and 19
- Fix TypeScript module augmentations not being detected when using `moduleResolution: bundler`.

### Breaking changes

TypeScript users must now explicitly enable the library's type augmentations:

```ts
import type {} from 'mui-create-material-you-theme/themeAugmentation'
```

See the [TypeScript setup](https://github.com/BobesCZ/mui-create-material-you-theme?tab=readme-ov-file#%EF%B8%8F-typescript-setup) for details.

## 1.3.0

- Added styles for TextField

## 1.2.0

- Changed color mappings in getMaterialYouPalette
- Fix styles for ListItemButton

## 1.1.0

- Revert scrollbar display
- Added stories for FAB, ToggleButton
- Added styles for IconButton

## 1.0.2

- Fix publishing types

## 1.0.1

- Fix publishing types

## 1.0.0

- Initial release of `mui-create-material-you-theme` 🎉
- `createMaterialYouTheme` function to generate MUI theme based on Material You scheme
- Support for extended palette colors: `tertiary`, `surface`, `onSurface`, etc.
- Component variants for:
  - Button (filled, tonal, elevated)
  - Card (filled, elevation, outlined)
  - Alert, Accordion, AppBar, Badge, Drawer, Fab, ListItem, Menu, Switch, ToggleButton, Tooltip
- Storybook with working demo and usage examples
- Automatic mapping from Material You scheme to MUI palette

---

> 💡 If you want to contribute, feel free to open an issue or PR!
