import {
	Menu,
	MenuButton,
	MenuProps,
	Button,
	MenuList,
	VStack,
	Box,
} from '@chakra-ui/react'
import { FiChevronDown } from 'react-icons/fi'
import {
	NavigationMenuLink,
	NavigationMenuLinkProps,
} from './NavigationMenuLink'

interface Props extends MenuProps {
	children: string
	menuItems: NavigationMenuLinkProps[]
}

export function NavigationMenu({ children, menuItems, ...rest }: Props) {
	return (
		<Menu>
			{({ isOpen }) => (
				<>
					<MenuButton
						as={Button}
						px='1rem'
						py='0.5rem'
						borderRadius='base'
						fontSize='1rem'
						fontWeight='normal'
						bg='transparent'
						_hover={{
							bgColor: 'brand.100',
							textDecorationColor: 'red',
						}}
						transition='ease 300ms'
						rightIcon={
							<Box
								transform={isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}
								transition='ease-in-out 200ms'
							>
								<FiChevronDown />
							</Box>
						}
					>
						{children}
					</MenuButton>
					<MenuList p='1rem' maxW='25rem'>
						<VStack>
							{menuItems.map(item => (
								<NavigationMenuLink key={item.href} {...item} />
							))}
						</VStack>
					</MenuList>
				</>
			)}
		</Menu>
	)
}
