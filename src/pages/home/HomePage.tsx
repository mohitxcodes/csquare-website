import HeroSection from "./components/HeroSection";
import Events from './components/Events'

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <Events />
    </div>
  )
}
