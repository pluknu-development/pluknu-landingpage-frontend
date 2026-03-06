import HeroSection from "./components/sections/HeroSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import HowItWorksSection from "./components/sections/HowItWorksSection";
import HowItWorksStepsSection from "./components/sections/HowItWorksStepsSection";
import NeighborhoodBenefitsSection from "./components/sections/NeighborhoodBenefitsSection";
import PlukPointsSection from "./components/sections/PlukPointsSection";
import EarnWithGardenSection from "./components/sections/EarnWithGardenSection";
import DashboardSection from "./components/sections/DashboardSection";
import RegionLaunchSection from "./components/sections/RegionLaunchSection";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <main className="min-h-screen bg-white font-body text-on-light-default">
      <HeroSection />
      <ExperienceSection />
      <HowItWorksSection />
      <HowItWorksStepsSection />
      <NeighborhoodBenefitsSection />
      <PlukPointsSection />
      <EarnWithGardenSection />
      <DashboardSection />
      <RegionLaunchSection />
      <Footer />
    </main>
  );
}

export default App;
