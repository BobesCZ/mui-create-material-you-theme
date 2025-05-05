/**
 * Design tokens from official theme builder
 * https://material-foundation.github.io/material-theme-builder/
 */
export type MaterialYouSchemeExported = {
    primary: string;
    onPrimary: string;
    primaryContainer: string;
    onPrimaryContainer: string;
    secondary: string;
    onSecondary: string;
    secondaryContainer: string;
    onSecondaryContainer: string;
    tertiary: string;
    onTertiary: string;
    tertiaryContainer: string;
    onTertiaryContainer: string;
    error: string;
    onError: string;
    errorContainer: string;
    onErrorContainer: string;
    background: string;
    onBackground: string;
    surface: string;
    onSurface: string;
    surfaceVariant: string;
    onSurfaceVariant: string;
    outline: string;
    outlineVariant: string;
    shadow: string;
    scrim: string;
    inverseSurface: string;
    inverseOnSurface: string;
    inversePrimary: string;
    primaryFixed: string;
    onPrimaryFixed: string;
    primaryFixedDim: string;
    onPrimaryFixedVariant: string;
    secondaryFixed: string;
    onSecondaryFixed: string;
    secondaryFixedDim: string;
    onSecondaryFixedVariant: string;
    tertiaryFixed: string;
    onTertiaryFixed: string;
    tertiaryFixedDim: string;
    onTertiaryFixedVariant: string;
    surfaceTint: string;
    surfaceDim: string;
    surfaceBright: string;
    surfaceContainerLowest: string;
    surfaceContainerLow: string;
    surfaceContainer: string;
    surfaceContainerHigh: string;
    surfaceContainerHighest: string;
};
/**
 * Design tokens for missing colors
 * We act like these colors should have been generated in Material You
 */
export type MaterialYouScheme = MaterialYouSchemeExported & {
    info: string;
    onInfo: string;
    infoContainer: string;
    onInfoContainer: string;
    success: string;
    onSuccess: string;
    successContainer: string;
    onSuccessContainer: string;
    warning: string;
    onWarning: string;
    warningContainer: string;
    onWarningContainer: string;
};
/**
 * Colors defined in MUI2 but missing in Material You
 */
export type MaterialYouMissingColors = {
    info: string;
    success: string;
    warning: string;
};
