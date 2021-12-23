import { Flex, Heading, Text, Image, Button, FlexProps } from '@chakra-ui/react'
import { useRouter } from 'next/router'

interface Props extends FlexProps {
	img: string
	title: string
	subtitle: string
	description: string
	url: string
	variant: 'brand' | 'complementar'
}

export function ProductCard({
	img,
	title,
	subtitle,
	description,
	url,
	variant,
	...rest
}: Props) {
	const router = useRouter()

	return (
		<Flex
			bgColor='primary.200'
			borderRadius='base'
			flexDir='column'
			p='2rem'
			_hover={{ boxShadow: 'lg' }}
			transition='ease 300ms'
			{...rest}
		>
			<Image h='15rem' objectFit='contain' src={img} alt={title} />

			<Heading
				mt='2rem'
				color={variant === 'brand' ? 'brand.100' : 'complementar.100'}
			>
				{title}
			</Heading>
			<Text color={variant === 'brand' ? 'brand.200' : 'complementar.200'}>
				{subtitle}
			</Text>

			<Text mt='1rem'>{description}</Text>

			<Button onClick={() => router.push(url)} mt='3rem' variant={variant}>
				See More
			</Button>
		</Flex>
	)
}
