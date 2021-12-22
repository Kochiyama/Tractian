import { extendTheme } from '@chakra-ui/react'
import { colorScheme } from './colors'
import { fonts } from './fonts'
import { Heading } from './components/Heading'
import { Text } from './components/Text'
import { global } from './global'

export const theme = extendTheme({
	colors: colorScheme,
	fonts: fonts,
	styles: {
		global,
	},
	components: {
		Heading,
		Text,
	},
})
