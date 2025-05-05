import { PaletteMode } from '@mui/material';
import { MaterialYouMissingColors, MaterialYouScheme, MaterialYouSchemeExported } from '../types';
/**
 * Create design tokens for backward compatibility with MUI2
 * and merge it to exported scheme
 */
export declare const getMaterialYouScheme: (mode: PaletteMode, exportedScheme: MaterialYouSchemeExported, { info, success, warning }?: MaterialYouMissingColors) => MaterialYouScheme;
