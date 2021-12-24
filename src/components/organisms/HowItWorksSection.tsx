import { Heading, Text } from '@chakra-ui/react'
import { HowItWorksTabs } from '../molecules/HowItWorksTabs'
import { Section } from '../templates/Section'

export function HowItWorksSection() {
	return (
		<Section>
			<Heading>How it works?</Heading>
			<Text mb='3rem'>Combine monitoring and management, take your pick:</Text>

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
	)
}
