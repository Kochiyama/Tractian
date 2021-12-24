import {
	Button,
	Center,
	Flex,
	Grid,
	Heading,
	Radio,
	Text,
	useToast,
} from '@chakra-ui/react'
import { useState } from 'react'
import { RadioGroup } from '../molecules/RadioGroup'
import { Section } from '../templates/Section'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { InputGroup } from '../molecules/InputGroup'
import { useRouter } from 'next/router'

const formSchema = yup.object().shape({
	name: yup.string().required(),
	jobtitle: yup.string().required(),
	email: yup.string().email().required(),
	phone: yup.string().required(),
})

export function RequestFormSection() {
	const [isLoading, setIsLoading] = useState(false)
	const [machines, setMachines] = useState('10-20')
	const router = useRouter()
	const toast = useToast()

	const formik = useFormik({
		initialValues: {
			name: '',
			jobtitle: '',
			email: '',
			phone: '',
		},
		validationSchema: formSchema,
		onSubmit: async values => {
			setIsLoading(true)
			setTimeout(() => {
				toast({
					title: 'Your Demo Request was sent!',
					description:
						'Thank you for your request, we are happy to see you are interested, soon you will receive an email to start the demo.',
					status: 'success',
					isClosable: true,
					duration: 5000,
				})

				console.log({ ...values, machines })

				router.reload()
				setIsLoading(false)
			}, 500)
		},
	})

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

					<form onSubmit={formik.handleSubmit}>
						<Flex flexDir='column' mt='2rem'>
							<Grid templateRows='repeat(3, 1fr)' gap='1.5rem' mb='2rem'>
								<InputGroup
									label='Name'
									placeholder='Full Name'
									name='name'
									onChange={formik.handleChange}
									error={formik.errors.name}
									touched={formik.touched.name}
								/>

								<InputGroup
									label='Job Title'
									placeholder='Your Job Title'
									name='jobtitle'
									onChange={formik.handleChange}
									error={formik.errors.jobtitle}
									touched={formik.touched.jobtitle}
								/>

								<Grid gridTemplateColumns='3fr 2fr' gap='1rem'>
									<InputGroup
										label='Corporate Email'
										placeholder='example@corps.com'
										name='email'
										type='email'
										onChange={formik.handleChange}
										error={formik.errors.email}
										touched={formik.touched.email}
									/>

									<InputGroup
										label='Phone Number'
										placeholder='(xx) xxxxx-xxxx'
										name='phone'
										onChange={formik.handleChange}
										error={formik.errors.phone}
										touched={formik.touched.phone}
									/>
								</Grid>
							</Grid>

							<RadioGroup
								label='How many machines do you want to monitor?'
								name='machineNumber'
								defaultValue='10-20'
								onChange={value => {
									setMachines(value)
								}}
								value={machines}
							>
								<Radio value='10-20'>10-20</Radio>
								<Radio value='21-30'>21-30</Radio>
								<Radio value='31-50'>31-50</Radio>
								<Radio value='50+'>More than 50</Radio>
							</RadioGroup>

							<Button
								isLoading={isLoading}
								type='submit'
								mt='2rem'
								variant='complementar'
							>
								Send Demo Request
							</Button>
						</Flex>
					</form>
				</Flex>
			</Center>
		</Section>
	)
}
