import NextLink from 'next/link'
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'

interface Props extends LinkProps {
	children: string
	href: string
}

export function Link({ children, href, ...rest }: Props) {
	return (
		<NextLink href={href} passHref>
			<ChakraLink {...rest}>{children}</ChakraLink>
		</NextLink>
	)
}
