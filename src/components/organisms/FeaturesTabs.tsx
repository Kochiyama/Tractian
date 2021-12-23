import {
	Flex,
	Heading,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
	Image,
	Box,
	Center,
	HStack,
} from '@chakra-ui/react'
import { Section } from '../templates/Section'

interface Props {
	tabs: string[]
	panels: {
		img: string
		title: string
		description: string
	}[]
}

export function FeaturesTabs({ tabs, panels }: Props) {
	return (
		<Section py='2rem'>
			<Tabs defaultIndex={1}>
				<TabPanels>
					{panels.map(panel => (
						<TabPanel key={panel.title} d='flex'>
							<Center flex='1' pr='4rem'>
								<Image h='50vh' src={panel.img} alt={panel.title} />
							</Center>
							<Flex flex='1' flexDir='column' py='3rem'>
								<Heading size='lg'>{panel.title}</Heading>
								<Text>{panel.description}</Text>
							</Flex>
						</TabPanel>
					))}
				</TabPanels>

				<TabList mt='2rem' d='flex' justifyContent='center' border='none'>
					<HStack spacing='2rem'>
						{tabs.map((tab, i) => (
							<Tab
								key={i}
								fontFamily='Poppins'
								fontWeight='medium'
								color='secondary.200'
								_selected={{
									color: 'brand.100',
									borderBottom: '3px solid #263476',
								}}
							>
								{tab}
							</Tab>
						))}
					</HStack>
				</TabList>
			</Tabs>
		</Section>
	)
}
