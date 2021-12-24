import { Grid, Heading } from '@chakra-ui/react'
import { BenefitCard } from '../molecules/BenefitCard'
import { Section } from '../templates/Section'

export function BenefitsSection() {
	return (
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
	)
}
