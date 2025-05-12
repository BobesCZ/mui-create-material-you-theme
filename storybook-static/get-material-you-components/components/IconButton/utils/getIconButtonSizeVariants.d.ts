import { ComponentsVariants, IconButtonProps } from '@mui/material';
/**
 * Adding new variant of IconButton also requires defining styles for `size` prop
 */
export declare const getIconButtonSizeVariants: (variantName: IconButtonProps["variant"]) => NonNullable<ComponentsVariants["MuiIconButton"]>[number][];
