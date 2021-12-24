import type { NextPage } from 'next'

import { MainTemplate } from '../components/templates/MainTemplate'
import { HeroSection } from '../components/organisms/HeroSection'
import { FeaturesSection } from '../components/organisms/FeaturesSection'
import { ProductsSection } from '../components/organisms/ProductsSection'
import { BenefitsSection } from '../components/organisms/BenefitsSection'
import { HowItWorksSection } from '../components/organisms/HowItWorksSection'
import { BigInfoSection } from '../components/organisms/BigInfoSection'
import { TestimonialsSection } from '../components/organisms/TestimonialsSection'
import { RequestFormSection } from '../components/organisms/RequestFormSection'
import { Footer } from '../components/organisms/Footer'

const Home: NextPage = () => {
	return (
		<MainTemplate>
			{/* <HeroSection /> */}

			{/* <FeaturesSection />

			<ProductsSection />

			<BenefitsSection />

			<HowItWorksSection />

			<BigInfoSection />

			<TestimonialsSection />

			<RequestFormSection /> */}

			<Footer />
		</MainTemplate>
	)
}

export default Home
