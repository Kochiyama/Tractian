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
	Grid,
	Tabs,
	TabList,
	Tab,
	TabPanels,
	TabPanel,
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import { BenefitCard } from '../components/molecules/BenefitCard'
import { FeaturesTabs } from '../components/molecules/FeaturesTabs'
import { HowItWorksTabs } from '../components/molecules/HowItWorksTabs'
import { ProductCard } from '../components/molecules/ProductCard'
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

			<Section>
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

			<Section>
				<Heading mb='3rem'>Why Tractian?</Heading>

				<Grid gridTemplateColumns='repeat(4, 1fr)' gap='2rem' spacing='2rem'>
					<BenefitCard
						icon='/icons/icon-maintence-plataform.svg'
						title='Predictive Maintenance'
						description='Automatic fault detection, 
						real-time asset health, 
						reliability percentage and automatic insights.'
					/>
					<BenefitCard
						icon='/icons/icon-maintence-online.svg'
						title='Online Monitoring'
						description='Tractian sensor collects vibration, temperature, hour meter and energy consumption data in real time.'
					/>
					<BenefitCard
						icon='/icons/icon-maintence-pump.svg'
						title='Instant Setup'
						description='Plug & Play solution, forget about gateways or routers, communication via independent 2G / 3G network'
					/>
					<BenefitCard
						icon='/icons/icon-maintence-horimeter.svg'
						title='Integrated CMMS'
						description='Automate processes, work orders, and have total control over your assets and staff.'
					/>
				</Grid>
			</Section>

			<Section>
				<Heading>How it works?</Heading>
				<Text mb='3rem'>
					Combine monitoring and management, take your pick:
				</Text>

				<HowItWorksTabs
					tabs={['Online Monitoring', 'Asset Management']}
					panels={[
						{
							variant: 'brand',
							items: [
								{
									img: '/images/enviamos-o-sensor.png',
									title: 'We ship the sensors',
									description:
										'The sensors are delivered in your site and you don`t need to go throught industrial Wi-fi or talk to IT departments.',
								},
								{
									img: '/images/motobomba-periferico.png',
									title: 'Attach to your machine',
									description:
										'The sensors are delivered in your site and you don`t need to go throught industrial Wi-fi or talk to IT departments.',
								},
								{
									img: '/images/insights-tela-desalinhamento.png',
									title: 'Get valuable Insights',
									description:
										'Our system centralizes accurate information about your machines, with insights and analyzes, such as equipment health, anomaly detection and machine spectrum degradation.',
								},
							],
						},
						{
							variant: 'complementar',
							items: [
								{
									img: '/images/planos-preventivos.png',
									title: 'Send us your list of Assets, Places and Users',
									description:
										'We make the platform ready and organized for you, preparing your plant and assets following the layout sent to us, as well as your registered maintainers on the platform.',
								},
								{
									img: '/images/cadastro-os.png',
									title: 'Automate your Work Plans and Work Orders',
									description:
										'Use online procedures to organize checklists and inspections. Sequencing and planning Work Orders preemptively has never been easier.',
								},
								{
									img: '/images/automacoes-e-metricas.png',
									title: 'Replace Excel completely',
									description:
										'The platform will open the Work Orders and distribute them according to the configured automations, allowing the entire maintenance team to worry only about performing their routine activities.',
								},
							],
						},
					]}
				/>
			</Section>
		</MainTemplate>
	)
}

export default Home
