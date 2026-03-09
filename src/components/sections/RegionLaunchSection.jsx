import { Check } from "lucide-react";
import Reveal from "../ui/Reveal";

const benefitItems = [
  "Vroege pluk voordeel",
  "Bonus Plukpunten",
  "Stapsgewijs op de hoogte van de ontwikkelingen",
];

function RegionLaunchSection() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section id="ja-ik-doe-mee" className="w-full bg-white scroll-mt-32">
      <div className="mx-auto w-full max-w-440 px-10 py-16 max-md:px-5 max-md:py-16">
        <Reveal
          className="rounded-4xl bg-linear-to-br from-[#256449] to-[#092C20] px-8 py-14 max-md:rounded-[1.75rem] max-md:px-5 max-md:py-10"
          variant="zoom"
        >
          <div className="mx-auto flex flex-col gap-10 items-center text-center">
            <h2 className="font-heading text-5xl font-bold text-on-dark-alt max-lg:text-4xl max-md:text-3xl">
              PlukNu komt naar IJsselmuiden/Kampen
            </h2>

            <p className="max-w-3xl text-lg text-on-dark-default max-md:text-base">
              In 2026 start PlukNu gefaseerd: medio juni in de regio IJsselmuiden/Kampen en
              medio juli in de regio Staphorst en Zwolle. In 2027 is PlukNu landelijk
              beschikbaar. Zo krijgt elke regio de aandacht die het verdient.
            </p>

            <div className="w-full flex flex-col gap-8 max-w-2xl rounded-[1.4rem] bg-white/10 p-8 backdrop-blur-[2px] max-md:mt-8 max-md:rounded-2xl max-md:p-4">
              <p className="mx-auto max-w-xl text-center text-xl font-bold text-on-dark-alt max-md:text-base">
                Behoor tot de 100 aanbieders op PlukNu en ontvang een exclusief pluk-pakket!
              </p>

              <form className="flex gap-3 max-md:flex-col" onSubmit={handleSubmit}>
                <input
                  className="min-w-0 flex-1 rounded-lg border-2 border-gray-200 bg-primary-lighter p-4 text-lg text-on-light-default transition duration-150 placeholder:text-on-light-muted focus:scale-102 focus:border-secondary-default focus:outline-0 max-md:p-3.5 max-md:text-base"
                  placeholder="Je e-mailadres"
                  type="email"
                />
                <button
                  className="cursor-pointer flex items-center justify-center rounded-lg bg-secondary-default p-4 text-lg text-white transition duration-150 hover:bg-secondary-darker max-md:w-full max-md:p-3.5 max-md:text-base"
                  type="submit"
                >
                  Ja, ik doe mee
                </button>
              </form>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 max-md:mt-6 max-md:items-start max-md:justify-start">
              {benefitItems.map((item) => (
                <span key={item} className="flex items-center gap-2 text-lg text-on-dark-default">
                  <Check className="shrink-0 text-secondary-default" size={18} />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default RegionLaunchSection;
