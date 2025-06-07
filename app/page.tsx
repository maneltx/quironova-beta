import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
// Importaremos PhilosophySection y NaoAIChat en el futuro

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      {/* Aquí irán las otras secciones cuando las creemos o reparemos */}
      </div>
  );
}
