import { Flex, Image, Text, Box, Heading } from '@chakra-ui/react'

interface Props {
	testimonial: string
	avatar: string
	name: string
	title: string
}

export function TestimonialCard({ testimonial, avatar, name, title }: Props) {
	const handleDragStart = (e: any) => e.preventDefault()

	return (
		<Flex
			onDragStart={handleDragStart}
			w={{ base: '100%', md: '25rem' }}
			minH='16rem'
			p='1rem'
			justifyContent='space-between'
			flexDir='column'
			bgColor='primary.200'
			borderRadius='base'
		>
			<Flex flexDir='column' alignItems='flex-start' mb='1rem'>
				<Image
					mb='0.5rem'
					h='1.5rem'
					w='1.5rem'
					src='/icons/quotes.png'
					alt='Quotes'
				/>

				<Text fontSize='sm'>{testimonial}</Text>

				<Image h='1rem' src='/icons/stars.svg' alt='Five Starts' />
			</Flex>

			<Flex alignItems='center'>
				<Image h='4rem' mr='1rem' src={avatar} alt={name} />

				<Box>
					<Heading size='sm'>{name}</Heading>
					<Text fontSize='sm'>{title}</Text>
				</Box>
			</Flex>
		</Flex>
	)
}
