import { BadgeCheck, UsersRound } from "lucide-react";
import PartnerCard from "../ui/PartnerCard";
import Reveal from "../ui/Reveal";

function ExperienceSection() {
  return (
    <section id="ervaren-plukkers" className="w-full bg-primary-lightest">
      <div className="mx-auto flex w-full max-w-440 flex-col items-center gap-8 px-10 py-24 max-md:px-5 max-md:py-16">
        <Reveal className="w-full flex flex-col items-center" delay={40}>
        <span className="rounded-full bg-white px-5 py-1.5 text-sm font-semibold text-primary-default">
          Ervaren in moestuinen
        </span>

        <h2 className="text-center font-heading text-5xl font-bold text-primary-darkest max-lg:text-4xl max-md:text-3xl">
          PlukNu samen met jarenlange Plukkers
        </h2>
        </Reveal>

        <div className="grid w-full grid-cols-2 gap-8 max-[1050px]:grid-cols-1">
          <Reveal delay={120} variant="left">
            <PartnerCard
              imageSrc="/images/pf-ninon.png"
              imageAlt="Profielfoto Uitninonstuin"
              title="Uitninonstuin"
              description="Influencer en moestuin expert die duizenden mensen inspireert"
              metaIcon={UsersRound}
              metaText="87.000+ volgers"
            />
          </Reveal>
          <Reveal delay={220} variant="right">
            <PartnerCard
              imageSrc="/images/pf-plukkers.png"
              imageAlt="Profielfoto partner moeswereld"
              title="Partners vanuit moestuin wereld"
              description="Toonaangevende webshops voor producten voor de moestuin"
              metaIcon={BadgeCheck}
              metaText="Pluk partner worden"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
