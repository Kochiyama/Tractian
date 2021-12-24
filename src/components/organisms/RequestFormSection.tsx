import {
	Button,
	Center,
	Flex,
	Grid,
	Heading,
	InputGroup,
	Text,
} from '@chakra-ui/react'
import { RadioGroup } from '../molecules/RadioGroup'
import { Section } from '../templates/Section'

export function RequestFormSection() {
	return (
		<Section>
			<Center>
				<Flex
					bgColor='brand.200'
					p='2rem'
					flexDir='column'
					minW='35rem'
					borderRadius='0.5rem'
				>
					<Heading variant='light'>
						Start to Improve your <br />
						maintenance processes
					</Heading>
					<Text variant='light'>Request a demo to understand more!</Text>

					<Flex flexDir='column' mt='2rem'>
						<Grid templateRows='repeat(3, 1fr)' gap='1.5rem'>
							<InputGroup label='Name' placeholder='Full name' name='name' />

							<InputGroup
								label='Job Title'
								placeholder='Your Job Title'
								name='jobTitle'
							/>

							<Grid gridTemplateColumns='3fr 2fr' gap='1rem'>
								<InputGroup
									label='Corporate Email'
									placeholder='example@corps.com'
									name='email'
								/>

								<InputGroup
									label='Phone Number'
									placeholder='(xx) xxxxx-xxxx'
									name='phone'
								/>
							</Grid>
						</Grid>

						<Text variant='light' mt='2rem'>
							How many machines do you want to monitor?
						</Text>

						<RadioGroup
							name='machineNumber'
							radios={[
								{
									text: '10-20',
									value: '10-20',
								},
								{
									text: '21-30',
									value: '21-30',
								},
								{
									text: '31-50',
									value: '31-50',
								},
								{
									text: 'More than 50',
									value: '50+',
								},
							]}
						/>

						<Button mt='2rem' variant='complementar'>
							Send Demo Request
						</Button>
					</Flex>
				</Flex>
			</Center>
		</Section>
	)
}
