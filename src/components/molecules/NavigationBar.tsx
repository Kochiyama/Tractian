import { Stack, StackProps } from '@chakra-ui/react'
import { NavigationLink } from '../atoms/NavigationLink'
import { NavigationMenu } from '../atoms/NavigationMenu'

interface Props extends StackProps {}

export function NavigationBar({ ...rest }: Props) {
	return (
		<Stack direction='row' {...rest}>
			<NavigationMenu
				menuItems={[
					{
						icon: '/icons/sensor.svg',
						title: 'Sensor',
						description: 'Vibration and Temperature analysis in real time',
						href: 'https://tractian.com/en/sensor-tractian',
					},
					{
						icon: '/icons/platform.svg',
						title: 'Platform',
						description:
							'Monitor the condition of your machines from anywhere.',
						href: 'https://tractian.com/en/plataforma',
					},
					{
						icon: '/icons/features.svg',
						title: 'Features',
						description:
							'Asset health score, Work Orders Automation, Alerts, Insights and more',
						href: 'https://tractian.com/en/funcionalidades',
					},
					{
						icon: '/icons/pricing.svg',
						title: 'Pricing',
						description: 'Check out how to get our solution',
						href: 'https://tractian.com/en/planos',
					},
				]}
			>
				Product
			</NavigationMenu>
			<NavigationMenu
				menuItems={[
					{
						icon: '/icons/know-us.svg',
						title: 'Get to know us',
						description:
							'Find out more about the team behing Tractian, our history and open positions.',
						href: 'https://tractian.com/en/sobre',
					},
					{
						icon: '/icons/success-cases.svg',
						title: 'Success Cases',
						description:
							'Learn how our solution improves the day-to-day maintenance professionals life.',
						href: 'https://tractian.com/en/casos-de-sucesso',
					},
					{
						icon: '/icons/contact.svg',
						title: 'Contact us',
						description:
							'Ask questions, understand more about our solution and give us suggestions.',
						href: 'https://tractian.com/en/contato',
					},
					{
						icon: '/icons/careers.svg',
						title: 'Careers',
						description: 'Work in the fatest growing indtech in Brazil.',
						href: 'https://tractian.com/en/carreiras',
					},
					{
						icon: '/icons/press.svg',
						title: 'Press',
						description: 'See what the major newspapers say about Tractian.',
						href: 'https://tractian.com/en/imprensa',
					},
				]}
			>
				About us
			</NavigationMenu>
			<NavigationMenu
				menuItems={[
					{
						icon: '/icons/guides.svg',
						title: 'Guides',
						description: 'Download the best maintenance guides for free.',
						href: 'https://tractian.com/en/guias',
					},
					{
						icon: '/icons/check.svg',
						title: 'Checklists',
						description:
							'Download our free checklists and avoid problems with your maintenance team.',
						href: 'https://tractian.com/en/checklists',
					},
					{
						icon: '/icons/money.svg',
						title: 'ROI Calculator',
						description:
							"What is the cost of your machine in your budget? See if Tractian's solution is worth using.",
						href: 'https://tractian.com/en/calculadora',
					},
				]}
			>
				Resources
			</NavigationMenu>
			<NavigationLink href='https://tractian.com/en/blog'>Blog</NavigationLink>
			<NavigationLink href='https://app.tractian.com/login' isExternal>
				Customer Area
			</NavigationLink>
		</Stack>
	)
}
