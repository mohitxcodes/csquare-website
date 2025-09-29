import HeroSection from "./components/HeroSection";
import Events from './components/Events'
import OurTeam from './components/OurTeam'

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <Events />
      <OurTeam />
    </div>
  )
}
