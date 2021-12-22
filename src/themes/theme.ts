import { extendTheme } from '@chakra-ui/react'
import { colorScheme } from './colors'
import { fonts } from './fonts'
import { HeadingStyle } from './components/HeadingStyle'
import { TextStyle } from './components/TextStyle'
import { global } from './global'
import { ButtonStyle } from './components/ButtonStyle'

export const theme = extendTheme({
	colors: colorScheme,
	fonts: fonts,
	styles: {
		global,
	},
	components: {
		Heading: HeadingStyle,
		Text: TextStyle,
		Button: ButtonStyle,
	},
})
