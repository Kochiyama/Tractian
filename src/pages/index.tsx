import {
	Container,
	Flex,
	Heading,
	Text,
	Image,
	Box,
	HStack,
	Button,
	Center,
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import { FeaturesTabs } from '../components/organisms/FeaturesTabs'
import { ProductCard } from '../components/organisms/ProductCard'
import { MainTemplate } from '../components/templates/MainTemplate'
import { Section } from '../components/templates/Section'

const Home: NextPage = () => {
	return (
		<MainTemplate>
			<Flex bgColor='brand.200' flexDir='column'>
				<Container d='flex' alignItems='center'>
					<Box flex='1'>
						<Heading variant='light' size='lg'>
							Revolutionizing the lives of <br />
							maintenance professionals
						</Heading>

						<HStack mt='0.5rem' spacing='4rem'>
							<Image src='/icons/capterra-classification.svg' alt='capterra' />
							<Image src='/icons/google-classification.svg' alt='capterra' />
						</HStack>

						<Text variant='light' my='1rem'>
							Avoid failures in your machines and make downtime a thing <br />
							of the past with TRACTIAN&apos;s predictive online monitoring and
							asset management system.
						</Text>

						<Button variant='complementar' w='20rem'>
							Schedule a Demo
						</Button>
					</Box>

					<Center flex='1'>
						<Image maxW='40vw' src='/images/hero.svg' alt='Tractian' />
					</Center>
				</Container>

				<Image
					position='relative'
					w='100vw'
					src='/images/ondas.svg'
					alt='Ondas'
				/>
			</Flex>

			<FeaturesTabs
				tabs={['Plug & Play Sensors', 'Online Monitoring', 'Asset Management']}
				panels={[
					{
						img: '/images/cole-o-sensor.png',
						title: 'Advanced IoT technology to connect your assets',
						description:
							'Our sensors send data about your machine via a 3g / 4g network with no need of tons of gateways. Just attach the sensor to the location to be monitored and everything is ready: monitor the condition of your machine in real time.',
					},
					{
						img: '/images/features-header.png',
						title: 'Platform working for you',
						description:
							"Automatic insights, mechanical backlash detection, misalignment, uncoupling, and Tractian's unique AI models for each type of machine.",
					},
					{
						img: '/images/automacoes-e-metricas.png',
						title: 'Work Orders Automation',
						description:
							"Use online procedures to organize checklists and inspections. Centralize your team's routine and leverage the activities of each employee through automation and metrics.",
					},
				]}
			/>

			<Section py='6rem'>
				<Flex>
					<ProductCard
						mr='4rem'
						flex='1'
						variant='complementar'
						img='/images/cmms-presentation.png'
						title='TracOS™'
						subtitle='Maintenance Software'
						description='The revolutionary CMMS for planning, tracking metrics, and connecting with your team.'
						url='https://tractian.com/en/tracos'
					/>

					<ProductCard
						flex='1'
						variant='brand'
						img='/images/sensor-plataforma-celular-tablet.png'
						title='Smart Trac'
						subtitle='Online Monitoring'
						description='The most complete predictive system on the market. Monitor your assets vibration, temperature and hour meter.'
						url='https://tractian.com/en/sensor-inteligente'
					/>
				</Flex>
			</Section>
		</MainTemplate>
	)
}

export default Home
