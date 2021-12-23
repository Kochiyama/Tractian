import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'

interface Props {
	icon: string
	title: string
	description: string
}

export function BenefitCard({ icon, title, description }: Props) {
	return (
		<Flex
			position='relative'
			flexDir='column'
			bgColor='primary.200'
			p='2rem'
			borderRadius='base'
			bottom='0rem'
			boxShadow='none'
			_hover={{ bottom: '1rem', boxShadow: 'lg' }}
			transition='ease 300ms'
		>
			<Box>
				<Image h='5rem' src={icon} alt={title} />
			</Box>

			<Heading size='sm' mt='1rem'>
				{title}
			</Heading>
			<Text fontSize='sm'>{description}</Text>
		</Flex>
	)
}
