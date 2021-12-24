import {
	FormControl,
	FormLabel,
	RadioGroupProps,
	RadioGroup as ChakraRadioGroup,
	Radio,
	FormHelperText,
} from '@chakra-ui/react'

interface Props extends RadioGroupProps {
	name: string
	label?: string
	error?: string | undefined
	touched?: boolean
}

export function RadioGroup({
	name,
	label,
	error,
	touched,
	children,
	...rest
}: Props) {
	return (
		<FormControl w='100%'>
			<FormLabel
				htmlFor={name}
				color='primary.100'
				fontWeight='medium'
				fontFamily='Poppins'
			>
				{label}
			</FormLabel>

			<ChakraRadioGroup
				mt='1rem'
				color='primary.100'
				d='flex'
				flexDir={{ base: 'column', md: 'row' }}
				justifyContent='space-between'
				{...rest}
			>
				{children}
			</ChakraRadioGroup>

			{error && touched && <FormHelperText>{error}</FormHelperText>}
		</FormControl>
	)
}
