import { FeaturesTabs } from '../molecules/FeaturesTabs'
import { Section } from '../templates/Section'

export function FeaturesSection() {
	return (
		<Section>
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
		</Section>
	)
}
