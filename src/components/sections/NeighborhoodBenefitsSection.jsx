import { Heart, Leaf, Recycle, TrendingDown } from "lucide-react";
import BenefitItem from "../ui/BenefitItem";
import Reveal from "../ui/Reveal";

const benefits = [
  {
    icon: TrendingDown,
    title: "Dalende prijzen",
    description:
      "De prijzen worden bepaald door de aanbieder. Ook kan de aanbieder ervoor kiezen om de prijs te laten dalen.",
  },
  {
    icon: Recycle,
    title: "Verminder oogst verlies",
    description:
      "Van je buurman met te veel courgettes tot de dame verderop met verse appels. Gewoon persoon tot persoon handelen, zonder gedoe.",
  },
  {
    icon: Heart,
    title: "Eerlijk en lokaal vanuit jou buurt",
    description:
      "Wat de één over heeft, kan de ander goed gebruiken. Zo ontstaat een buurt waar mensen elkaar helpen, verspilling verminderen en samen zorgen voor eerlijk, lokaal voedsel dat dichtbij blijft. ",
  },
  {
    icon: Leaf,
    title: "Wekelijks nieuwe recepten",
    description:
      "Voor elke groente die in jouw buurt wordt aangeboden, verschijnen meerdere inspirerende recepten. Zo haal je meer uit de lokale oogst en kook je met wat het seizoen brengt.",
    badge: "Binnenkort beschikbaar",
  },
];

function NeighborhoodBenefitsSection() {
  return (
    <section className="relative z-30 -mt-35 w-full bg-primary-lighter pb-50 pt-42 max-md:-mt-14 max-md:pt-24 max-md:pb-28">
      <div className="relative mx-auto grid w-full max-w-440 gap-12 px-10 lg:grid-cols-2 lg:items-start max-md:px-5">
          <img
            className="pointer-events-none absolute -bottom-26 right-25 z-40 w-120 max-lg:right-5 max-md:w-80 max-md:-bottom-18"
            src="/images/man-holding-phone.png"
            alt="Hand met telefoon"
          />
        <Reveal className="mt-10" variant="left">
          <h2 className="font-heading text-5xl font-bold text-primary-darkest max-lg:text-4xl max-md:text-3xl">
            De groente en fruit gedeeld met en vanuit de buurt
          </h2>

          <div className="mt-10 space-y-8 max-md:space-y-6">
            {benefits.map((item, index) => (
              <Reveal key={item.title} delay={index * 110} variant="up">
                <BenefitItem
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  badge={item.badge}
                />
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal className="relative mt-6 lg:mt-12" delay={180} variant="right">
          <img
            className="w-full max-w-170"
            src="/images/example-1.svg"
            alt="Voorbeeld van PlukNu productoverzicht"
          />
        </Reveal>
      </div>
    </section>
  );
}

export default NeighborhoodBenefitsSection;
