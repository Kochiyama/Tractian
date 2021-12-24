import { Flex } from '@chakra-ui/react'
import { ProductCard } from '../molecules/ProductCard'
import { Section } from '../templates/Section'

export function ProductsSection() {
	return (
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
	)
}
