import { Center, Container, ContainerProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface Props extends ContainerProps {
	children?: ReactNode | ReactNode[]
}

export function Section({ children, bgColor, ...rest }: Props) {
	return (
		<Center as='section' bgColor={bgColor} py='4rem'>
			<Container {...rest}>{children}</Container>
		</Center>
	)
}
