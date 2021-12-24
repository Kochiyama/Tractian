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
			w='25rem'
			flexDir='column'
			bgColor='primary.200'
			borderRadius='base'
			p='1rem'
			alignItems='flex-start'
		>
			<Image
				mb='0.5rem'
				h='1.5rem'
				w='1.5rem'
				src='/icons/quotes.png'
				alt='Quotes'
			/>

			<Text>{testimonial}</Text>

			<Image h='1rem' mb='2rem' src='/icons/stars.svg' alt='Five Starts' />

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
