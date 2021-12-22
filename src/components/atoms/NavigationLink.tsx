import { LinkProps } from '@chakra-ui/react'
import { Link } from './Link'

interface Props extends LinkProps {
	href: string
	children: string
}

export function NavigationLink({ href, children, ...rest }: Props) {
	return (
		<Link
			href={href}
			px='1rem'
			py='0.5rem'
			borderRadius='base'
			fontSize='1rem'
			_hover={{
				bgColor: 'brand.100',
				color: 'complementar.100',
				textDecorationColor: 'red',
			}}
			transition='ease 300ms'
			{...rest}
		>
			{children}
		</Link>
	)
}
