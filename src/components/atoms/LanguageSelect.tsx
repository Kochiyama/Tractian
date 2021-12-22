import { Select } from '@chakra-ui/react'
import { FiChevronDown } from 'react-icons/fi'

export function LanguageSelect() {
	return (
		<Select
			w='auto'
			border='none'
			borderRadius='base'
			fontSize='1rem'
			fontWeight='normal'
			bg='transparent'
			_hover={{
				bgColor: 'brand.100',
			}}
			transition='ease 300ms'
			rightIcon={<FiChevronDown />}
		>
			<option value='en-US'>🇺🇸 EN</option>
			<option value='pt-BR'>🇧🇷 PT</option>
		</Select>
	)
}
