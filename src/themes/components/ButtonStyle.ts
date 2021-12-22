import { ComponentStyleConfig } from '@chakra-ui/react'

export const ButtonStyle: ComponentStyleConfig = {
	// The styles all button have in common
	baseStyle: {
		fontWeight: 'semibold',
		borderRadius: 'base',
		fontSize: '1rem',
		px: '1rem',
		py: '0.5rem',
		_active: {
			filter: 'brightness(0.9)',
			boxShadow: 'none',
		},
		transition: 'ease 300ms',
	},
	variants: {
		brand: {
			bg: 'brand.200',
			color: 'white',
			_hover: {
				bg: 'brand.300',
				boxShadow: 'md',
			},
		},
		complementar: {
			bg: 'complementar.100',
			color: 'white',
			_hover: {
				bg: 'complementar.200',
				boxShadow: 'md',
			},
		},
	},
	// The default size and variant values
	defaultProps: {
		size: 'md',
		variant: 'brand',
	},
}
