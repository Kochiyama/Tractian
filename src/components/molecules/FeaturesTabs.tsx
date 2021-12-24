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
	Stack,
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
		<Tabs defaultIndex={1}>
			<TabPanels>
				{panels.map(panel => (
					<TabPanel
						key={panel.title}
						d='flex'
						flexDir={{ base: 'column', md: 'row' }}
					>
						<Center flex='1' pr='4rem'>
							<Image
								objectFit='contain'
								h={{ base: '10rem', md: '20rem' }}
								src={panel.img}
								alt={panel.title}
							/>
						</Center>
						<Flex flex='1' flexDir='column' py='3rem'>
							<Heading size='lg'>{panel.title}</Heading>
							<Text>{panel.description}</Text>
						</Flex>
					</TabPanel>
				))}
			</TabPanels>

			<TabList mt='2rem' d='flex' justifyContent='center' border='none'>
				<Stack
					direction={{ base: 'column', md: 'row' }}
					spacing='2rem'
					w={{ base: '100%', md: 'auto' }}
				>
					{tabs.map((tab, i) => (
						<Tab
							justifyContent={{ base: 'flex-start', md: 'center' }}
							key={i}
							fontFamily='Poppins'
							fontWeight='medium'
							color='secondary.300'
							_hover={{
								borderBottom: '3px solid #6B7280',
							}}
							_selected={{
								color: 'brand.100',
								borderBottom: '3px solid #263476',
							}}
							transition='ease 300ms'
						>
							{tab}
						</Tab>
					))}
				</Stack>
			</TabList>
		</Tabs>
	)
}
