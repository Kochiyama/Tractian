import { Flex } from '@chakra-ui/react'
import Head from 'next/head'
import { ReactNode } from 'react'
import { Header } from '../organisms/Header'

interface Props {
	title?: string
	description?: string
	children: ReactNode | ReactNode[]
}

export function MainTemplate({ title, description, children }: Props) {
	return (
		<>
			<Head>
				<title>{title ? title : "Tractian | Kochiyama's UI Clone "}</title>
				{description && <meta property='description'>{description}</meta>}
			</Head>

			<Header />

			<Flex flexDir='column' pt='3rem'>
				{children}
			</Flex>
		</>
	)
}
