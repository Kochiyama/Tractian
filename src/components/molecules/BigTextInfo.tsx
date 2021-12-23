import { Flex, Heading, Text } from '@chakra-ui/react'

interface Props {
	bigText: string
	description: string
}

export function BigTextInfo({ bigText, description }: Props) {
	return (
		<Flex flexDir='column' p='1rem'>
			<Heading fontWeight='bold' fontSize='7rem' color='secondary.100'>
				{bigText}
			</Heading>
			<Text color='secondary.300'>{description}</Text>
		</Flex>
	)
}
