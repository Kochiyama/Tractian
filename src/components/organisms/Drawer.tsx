import {
	Drawer as ChakraDrawer,
	DrawerBody,
	DrawerFooter,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Button,
	useDisclosure,
	Flex,
} from '@chakra-ui/react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'
import { LanguageSelect } from '../atoms/LanguageSelect'
import { NavigationBar } from '../molecules/NavigationBar'

export function Drawer() {
	const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<>
			<Button
				colorScheme='teal'
				onClick={() => (isOpen ? onClose() : onOpen())}
				fontSize='1.5rem'
			>
				{isOpen ? <IoMdClose /> : <GiHamburgerMenu />}
			</Button>
			<ChakraDrawer isOpen={isOpen} placement='top' onClose={onClose}>
				<DrawerOverlay />
				<DrawerContent pt='6rem' bgColor='brand.200' color='primary.100'>
					<DrawerCloseButton />
					<DrawerBody p='1rem'>
						<NavigationBar direction='column' alignItems='flex-start' />
					</DrawerBody>

					<DrawerFooter>
						<Flex w='100%'>
							<LanguageSelect />
						</Flex>
					</DrawerFooter>
				</DrawerContent>
			</ChakraDrawer>
		</>
	)
}
