import { Box, Stack, TextField, TextFieldProps, Typography } from '@mui/material'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta = {
  title: 'Components/TextField',
  component: TextField,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
  args: {
    placeholder: 'Placeholder',
    variant: 'outlined',
    defaultValue: 'Value',
    size: 'medium',
    disabled: false,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['outlined', 'filled', 'standard'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
    },
  },
}

export default meta
type Story = StoryObj

const colors: NonNullable<TextFieldProps['color']>[] = [
  'primary',
  'secondary',
  'tertiary',
  'error',
  'info',
  'success',
  'warning',
]

export const AllTextfields: Story = {
  render: (args) => (
    <Stack spacing={4}>
      <Box>
        <Typography variant="h6" gutterBottom>
          Basic
        </Typography>
        <Stack direction="row" spacing={3}>
          {colors.map((color) => (
            <TextField key={color} fullWidth color={color} label={color} {...args} />
          ))}
        </Stack>
      </Box>
      <Box>
        <Typography variant="h6" gutterBottom>
          With Adornments
        </Typography>
        <Stack direction="row" spacing={3}>
          {colors.map((color) => (
            <TextField
              key={color}
              fullWidth
              color={color}
              label={color}
              helperText="Helper text"
              {...args}
            />
          ))}
        </Stack>
      </Box>
    </Stack>
  ),
}
