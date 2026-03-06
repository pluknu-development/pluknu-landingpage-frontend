import { ChartLine, Clock3, UsersRound } from "lucide-react";
import StepCard from "../ui/StepCard";
import Reveal from "../ui/Reveal";

const earnSteps = [
  {
    step: 1,
    icon: UsersRound,
    title: "Bereik lokale kopers",
    description:
      "Verkoop direct aan je buren en mensen in de buurt. Geen tussenpersonen.",
  },
  {
    step: 2,
    icon: ChartLine,
    title: "Houd je verdiensten bij",
    description:
      "Met je persoonlijke dashboard zie je in één oogopslag wat je verdient. Je volgt je verkopen en ziet jouw omzet.",
  },
  {
    step: 3,
    icon: Clock3,
    title: "Flexibel ophalen",
    description:
      "Bepaal zelf je ophaal tijden en locaties. Perfect naast je dagelijkse bezigheden.",
  },
];

function EarnWithGardenSection() {
  return (
    <section id="verdien-met-je-tuin" className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-440 flex-col items-center gap-8 px-10 py-10 max-md:px-5">
        <Reveal className="flex flex-col items-center gap-8" delay={40}>
        <span className="rounded-full bg-primary-lighter px-5 py-1.5 text-sm font-semibold text-primary-default">
          Groei met PlukNu
        </span>

        <h2 className="text-center font-heading text-5xl font-bold text-primary-darkest max-lg:text-4xl max-md:text-3xl">
          Verdien bij met je moestuin
        </h2>

        <p className="max-w-220 text-center text-xl text-on-light-alt max-md:text-base">
          Heb je een moestuin of boomgaard? Verdien iets extra&apos;s met je
          overschotten en laat buurtgenoten genieten van verse producten. Al je
          verkopen en inkomsten worden overzichtelijk bijgehouden in je
          persoonlijke dashboard.
        </p>
        </Reveal>

        <div className="mt-10 grid w-full grid-cols-3 gap-8 max-[1200px]:grid-cols-2 max-md:mt-6 max-md:grid-cols-1">
          {earnSteps.map((item, index) => (
            <Reveal key={item.step} delay={index * 110} variant="up">
              <StepCard
                step={item.step}
                showStep={false}
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

export default EarnWithGardenSection;
