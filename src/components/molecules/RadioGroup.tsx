import {
	FormControl,
	FormLabel,
	RadioGroupProps,
	RadioGroup as ChakraRadioGroup,
	Radio,
	FormHelperText,
} from '@chakra-ui/react'

interface Props {
	name: string
	label?: string
	error?: string | undefined
	touched?: boolean
	radios: {
		value: string
		text: string
	}[]
}

export function RadioGroup({ name, label, error, touched, radios }: Props) {
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
				justifyContent='space-between'
			>
				{radios.map(radio => (
					<Radio key={radio.value} value={radio.value}>
						{radio.text}
					</Radio>
				))}
			</ChakraRadioGroup>

			{error && touched && <FormHelperText>{error}</FormHelperText>}
		</FormControl>
	)
}
