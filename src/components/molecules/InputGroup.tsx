import {
	FormControl,
	FormHelperText,
	FormLabel,
	Input,
	InputProps,
} from '@chakra-ui/react'

interface Props extends InputProps {
	name: string
	label?: string
	error?: string | undefined
	touched?: boolean
}

export function InputGroup({ name, label, error, touched, ...rest }: Props) {
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

			<Input
				isInvalid={Boolean(error && touched)}
				id={name}
				name={name}
				errorBorderColor='error.100'
				bgColor='primary.200'
				{...rest}
			/>

			{error && touched && <FormHelperText>{error}</FormHelperText>}
		</FormControl>
	)
}
