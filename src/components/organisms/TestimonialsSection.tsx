import 'react-alice-carousel/lib/alice-carousel.css'
import { Flex, Heading, Image, Text } from '@chakra-ui/react'
import AliceCarousel from 'react-alice-carousel'
import { TestimonialCard } from '../molecules/TestimonialCard'
import { Section } from '../templates/Section'

export function TestimonialsSection() {
	return (
		<Section bgColor='brand.200'>
			<Heading mb='3rem' variant='light'>
				What our customers say about us:
			</Heading>

			<AliceCarousel
				disableDotsControls
				disableButtonsControls
				mouseTracking
				responsive={{
					0: {
						items: 1,
					},
					800: {
						items: 2,
					},
					1024: {
						items: 2.7,
					},
				}}
				items={[
					<TestimonialCard
						testimonial='"Before Tractian, failure happened without us having any chance to react. Now we are able to identify any unusual anomaly and this allows us to intervene before the breakdown happens."'
						avatar='/icons/tiago-junqueira.png'
						name='Tiago Junqueira'
						title='General Maintenance Supervisor - AmstedMaxion'
					/>,
					<TestimonialCard
						testimonial='"With the Tractian solution we optimize time, reduce costs with failures anticipated by the solution. Their technology is a great tool for monitoring and managing our assets."'
						avatar='/icons/gustavo.png'
						name='Gustavo Ribeiro'
						title='Industrial Director - Waste Management Industry'
					/>,
					<TestimonialCard
						testimonial='"The device brings more reliability to the process, speeding up the analysis of information and avoiding production stops, which positively impacts productivity."'
						avatar='/icons/eduarda.png'
						name='Eduarda Bauiz'
						title='General Director - Food industry'
					/>,
					<TestimonialCard
						testimonial='"A child can install the Tractian sensor, and the platform is as easy to use as a social network. Every system is very simple and reliable."'
						avatar='/icons/rene.png'
						name='Renê Santos'
						title='Mechanical Technician - Brewing Industry'
					/>,
				]}
			/>

			<Flex mt='2rem'>
				<Image
					mr='1rem'
					h='3rem'
					src='/images/capterra-badge.png'
					alt='capterra badge'
				/>

				<Text variant='light'>
					Named favorite CMMS and <br />
					OEE solution in Capterra 2021 ranking
				</Text>
			</Flex>
		</Section>
	)
}
