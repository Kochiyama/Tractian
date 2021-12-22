import { ComponentStyleConfig } from '@chakra-ui/react'

export const Text: ComponentStyleConfig = {
	baseStyle: {
		fontWeight: 'normal',
	},
	variants: {
		dark: {
			color: 'brand.200',
		},
		light: {
			color: 'primary.200',
		},
	},
	defaultProps: {
		size: 'md',
		variant: 'dark',
	},
}
