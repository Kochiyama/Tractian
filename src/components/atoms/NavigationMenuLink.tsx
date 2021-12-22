import {
	LinkBox,
	MenuItem,
	LinkOverlay,
	Box,
	Heading,
	Text,
	Image,
} from '@chakra-ui/react'

export interface NavigationMenuLinkProps {
	icon: string
	href: string
	title: string
	description: string
}

export function NavigationMenuLink({
	icon,
	href,
	title,
	description,
}: NavigationMenuLinkProps) {
	return (
		<LinkBox w='100%'>
			<MenuItem p='1rem' d='flex' alignItems='flex-start' borderRadius='base'>
				<Image w='1.2rem' src={icon} alt={title} />

				<Box ml='1rem' flex='1'>
					<LinkOverlay href={href}>
						<Heading size='sm' color='secondary.100'>
							{title}
						</Heading>
						<Text fontSize='sm' color='secondary.200'>
							{description}
						</Text>
					</LinkOverlay>
				</Box>
			</MenuItem>
		</LinkBox>
	)
}
