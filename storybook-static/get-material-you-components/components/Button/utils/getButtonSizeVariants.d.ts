import { ButtonProps, ComponentsVariants } from '@mui/material';
/**
 * Adding new variant of Button also requires defining styles for `size` prop
 */
export declare const getButtonSizeVariants: (variantName: ButtonProps["variant"]) => NonNullable<ComponentsVariants["MuiButton"]>[number][];
