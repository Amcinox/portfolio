
// Layout
import Navbar from '@/components/layout/Navbar'
import SectionsContainer from '@/components/layout/SectionsContainer'
import Footer from '@/components/layout/Footer'

// Sections
import HeroSection from '@/sections/Hero'
import AboutSection from '@/sections/About'
import TechnologiesSection from '@/sections/Technologies'
import ProjectsSection from '@/sections/Projects'
import ReviewsSection from '@/sections/Reviews'
import ContactSection from '@/sections/ContactSection'








export default function Page() {
  return (


    <SectionsContainer>
      <HeroSection />
      <AboutSection />
      <TechnologiesSection />
      <ProjectsSection />
      <ReviewsSection />
      <ContactSection />
    </SectionsContainer>

  )
}