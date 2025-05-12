import { PaletteMode } from '@mui/material';
type ColorGroupHex = {
    color: string;
    onColor: string;
    colorContainer: string;
    onColorContainer: string;
};
export declare const getTokens: (mode: PaletteMode, name: string, colorHex: string) => ColorGroupHex;
export {};
