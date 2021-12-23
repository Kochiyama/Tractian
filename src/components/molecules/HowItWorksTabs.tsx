import {
	Tabs,
	TabList,
	Tab,
	TabPanels,
	TabPanel,
	Heading,
	Box,
	Text,
	VStack,
	Flex,
	Image,
	Center,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'

interface PanelItem {
	img: string
	title: string
	description: string
}

interface Props {
	tabs: string[]
	panels: {
		variant: 'brand' | 'complementar'
		items: PanelItem[]
	}[]
}

export function HowItWorksTabs({ tabs, panels }: Props) {
	const [selectedIndex, setSelectedIndex] = useState(0)

	useEffect(() => {
		console.log(selectedIndex)
	}, [selectedIndex])

	return (
		<Tabs variant='enclosed'>
			<TabList>
				{tabs.map((tab, i) => (
					<Tab
						flex='1'
						key={tab}
						bgColor='secondary.300'
						color='primary.100'
						_selected={{
							bgColor:
								panels[i].variant === 'brand' ? 'brand.200' : 'secondary.100',
						}}
					>
						{tab}
					</Tab>
				))}
			</TabList>

			<TabPanels>
				{panels.map((panel, i) => (
					<TabPanel
						key={i}
						bgColor={panel.variant === 'brand' ? 'brand.200' : 'secondary.100'}
						borderBottomRadius='base'
						alignItems='center'
						d='flex'
					>
						<VStack spacing='1rem' flex='1'>
							{panel.items.map((item, i) => {
								let bg =
									panel.variant === 'brand' ? 'brand.200' : 'secondary.100'

								if (selectedIndex === i)
									bg = panel.variant === 'brand' ? 'brand.100' : 'secondary.200'

								return (
									<Flex
										w='100%'
										onClick={() => setSelectedIndex(i)}
										p='1rem'
										borderRadius='base'
										d='flex'
										bgColor={bg}
										cursor='pointer'
										_hover={{
											bgColor:
												panel.variant === 'brand'
													? 'brand.100'
													: 'secondary.200',
										}}
										_active={{
											filter: 'opacity(0.8)',
										}}
									>
										<Heading mr='2rem' variant='light'>
											{i}
										</Heading>

										<Box textAlign='left' flex='1'>
											<Heading variant='light' size='sm' mb='0.5rem'>
												{item.title}
											</Heading>
											<Text variant='light' fontSize='sm'>
												{item.description}
											</Text>
										</Box>
									</Flex>
								)
							})}
						</VStack>

						<Center flex='1' p='2rem'>
							<Image
								h='20rem'
								src={panel.items[selectedIndex].img}
								alt={panel.items[selectedIndex].title}
							/>
						</Center>
					</TabPanel>
				))}
			</TabPanels>
		</Tabs>
	)
}
