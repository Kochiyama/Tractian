import { Center, Container, ContainerProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface Props extends ContainerProps {
	children?: ReactNode | ReactNode[]
}

export function Section({ children, bgColor, ...rest }: Props) {
	return (
		<Center bgColor={bgColor}>
			<Container {...rest}>{children}</Container>
		</Center>
	)
}
