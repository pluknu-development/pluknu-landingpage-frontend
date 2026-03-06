import { Check } from "lucide-react";
import Reveal from "../ui/Reveal";

function PlukPointsSection() {
  return (
    <section id="plukpunten" className="relative z-100 -mt-34 w-full pb-22 max-md:-mt-16 max-md:pb-14">
      <div className="relative mx-auto w-full max-w-440 px-10 max-md:px-5">
        <Reveal
          as="article"
          className="flex items-end justify-between gap-12 rounded-[2.5rem] bg-linear-to-br from-[#6FAF3A] to-[#508F1D] px-16 pt-14 max-lg:flex-col max-lg:items-start max-lg:px-10 max-lg:pt-10 max-lg:pb-0 max-md:gap-0 max-md:px-6 max-md:pt-8 max-md:pb-0"
          variant="zoom"
        >
          <div className="pb-14">
            <h2 className="font-heading text-5xl font-bold text-on-dark-alt max-md:text-4xl">
              Spaar met Pluk punten
            </h2>

            <p className="mt-4 max-w-140 text-xl text-on-dark-default max-md:text-base">
              Verdien punten bij elke aankoop en ruil ze in voor tuinspullen om je
              eigen moestuin te starten of te blijven zaaien!
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex gap-3">
                <Check className="mt-1 shrink-0 text-on-dark-alt" size={26} />
                <div>
                  <p className="text-2xl font-bold text-on-dark-alt max-md:text-2xl">
                    Verdien bij elke verkoop
                  </p>
                  <p className="text-lg text-on-dark-default max-md:text-base">
                    €2 besteding = 1 Pluk punt
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Check className="mt-1 shrink-0 text-on-dark-alt" size={26} />
                <div>
                  <p className="text-2xl font-bold text-on-dark-alt max-md:text-2xl">
                    Voordelig tuinspullen
                  </p>
                  <p className="text-lg text-on-dark-default max-md:text-base">
                    Ruil punten in voor tomaten, wortels, kruiden en meer
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            className="block h-auto w-full max-w-120 shrink-0 self-end object-contain max-lg:max-w-104 max-lg:self-end max-md:max-w-84"
            src="/images/example-2.png"
            alt="Voorbeeldkaarten met plukpunten"
          />
        </Reveal>
      </div>
    </section>
  );
}

export default PlukPointsSection;
