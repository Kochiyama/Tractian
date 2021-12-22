import { Box, Button, Center, Heading, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { MainTemplate } from '../components/templates/MainTemplate'

const Home: NextPage = () => {
	return (
		<MainTemplate>
			<Heading>Home</Heading>
		</MainTemplate>
	)
}

export default Home
