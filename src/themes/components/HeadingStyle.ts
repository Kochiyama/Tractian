import { ComponentStyleConfig } from '@chakra-ui/react'

export const HeadingStyle: ComponentStyleConfig = {
	baseStyle: {
		fontWeight: 500,
	},
	sizes: {
		xs: {
			fontSize: '0.8rem',
		},
		sm: {
			fontSize: '1rem',
		},
		md: {
			fontSize: '1.5rem',
		},
		lg: {
			fontSize: '2rem',
		},
		xl: {
			fontSize: '2.5rem',
		},
		'2xl': {
			fontSize: '3rem',
		},
		'3xl': {
			fontSize: '4rem',
		},
	},
	variants: {
		dark: {
			color: 'brand.100',
		},
		light: {
			color: 'primary.100',
		},
	},
	defaultProps: {
		size: 'md',
		variant: 'dark',
	},
}
