import Reveal from "../ui/Reveal";

function HowItWorksSection() {
  return (
    <section id="in-2-minuten-besteld" className="w-full mb-20">
      <div className="mx-auto flex w-full max-w-440 flex-col gap-8 items-center px-10 py-22 max-md:px-5 max-md:py-16">
       <Reveal className="flex flex-col items-center gap-8" delay={40}>
       <span className="rounded-full bg-primary-lighter px-5 py-1.5 text-sm font-semibold text-primary-default">
          Zo simpel werkt PlukNu
        </span>

        <h2 className="text-center font-heading text-5xl font-bold text-primary-darkest max-lg:text-4xl max-md:text-3xl">
          In 2 minuten besteld
        </h2>

        <p className="max-w-220 text-center text-xl text-on-light-alt max-md:text-base">
          Van je buurman met te veel rode bieten tot een buurtgenoot met een
          overvloed aan verse stoofperen. Op PlukNu kan alles snel en eenvoudig
          worden aangeboden en gekocht door mensen bij jou in de buurt.
        </p>
        </Reveal>

        <Reveal className="mt-12 w-full max-w-260 overflow-hidden rounded-4xl max-md:mt-8" delay={160} variant="zoom">
          <img
            className="h-auto w-full object-cover"
            src="/images/asset-1.png"
            alt="Moestuin met verse groenten"
            loading="lazy"
          />
        </Reveal>
      </div>
    </section>
  );
}

export default HowItWorksSection;
