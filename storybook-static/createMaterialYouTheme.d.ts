import { PaletteMode, ThemeOptions } from '@mui/material';
import { MaterialYouMissingColors, MaterialYouSchemeExported } from './types';
/**
 * Replace `createTheme` with this function in your code
 */
export declare const createMaterialYouTheme: (mode: PaletteMode, exportedScheme?: MaterialYouSchemeExported, themeOptions?: ThemeOptions, missingColors?: MaterialYouMissingColors) => import('@mui/material').Theme;
