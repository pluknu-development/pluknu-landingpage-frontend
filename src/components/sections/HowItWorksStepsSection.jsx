import { Clock3, MapPin, ShoppingBasket } from "lucide-react";
import StepCard from "../ui/StepCard";
import Reveal from "../ui/Reveal";

const steps = [
  {
    step: 1,
    icon: ShoppingBasket,
    title: "Zoek wat je nodig hebt",
    description:
      "Kijk wie er bij jou in de buurt groenten, fruit, kruiden, honing, noten aanbiedt. Zie direct de afstand en prijs.",
  },
  {
    step: 2,
    icon: Clock3,
    title: "Kies wanneer je wilt kopen",
    description:
      "Wacht op een lagere prijs of bestel meteen. De prijs daalt automatisch als de houdbaarheidsdatum dichterbij komt.",
  },
  {
    step: 3,
    icon: MapPin,
    title: "Haal op wanneer je past",
    description:
      "Ophalen bij de aanbieder in de buurt. Je kiest zelf het moment dat het jou past.",
  },
];

function HowItWorksStepsSection() {
  return (
    <section className="relative z-100 -mt-16 w-full max-md:-mt-10">
      <div className="mx-auto w-full max-w-440 px-10 max-md:px-5">
        <div className="grid grid-cols-3 gap-8 max-[1200px]:grid-cols-2 max-[1200px]:gap-6 max-md:grid-cols-1">
          {steps.map((item, index) => (
            <Reveal key={item.step} delay={index * 110} variant="up">
              <StepCard
                step={item.step}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorksStepsSection;
