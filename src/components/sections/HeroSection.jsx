import { useEffect, useState } from "react";
import { Check, Menu, Sprout, X } from "lucide-react";
import SignupCard from "../ui/SignupCard";
import { navLinks } from "../../constants/navigation";

const heroBenefits = [
  "Bestel in 2 minuten",
  "100% lokaal",
  "100% geen tussenpersonen",
];

function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <section id="top" className="relative flex min-h-[min(100vh,64rem)] w-full flex-col overflow-hidden bg-linear-to-br from-[#256449] to-[#092C20] pt-24 max-lg:pt-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-28 h-72 w-72 rounded-full bg-[#7ebc47]/18 blur-3xl max-md:h-56 max-md:w-56" />
        <div className="absolute -right-32 top-18 h-96 w-96 rounded-full bg-[#0d5c3d]/38 blur-3xl max-md:h-72 max-md:w-72" />
        <div className="absolute -bottom-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#8ec35a]/12 blur-3xl max-md:h-60 max-md:w-60" />
      </div>
      <nav
        className={`fixed left-0 right-0 top-0 z-200 h-24 w-full shrink-0 transition-all duration-300 max-lg:h-20 ${
          isScrolled ? "bg-primary-default/95 backdrop-blur-sm shadow-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-full w-full max-w-440 items-center justify-between px-10 max-lg:px-5">
          <img className="h-14 w-auto max-lg:h-10" src="/images/pluk-nu-logo-light.svg" alt="PlukNu logo" />
          <div className="flex gap-5 max-lg:hidden">
            {navLinks.map((link) => (
              <a
                key={link.label}
                className="text-on-dark-default py-2 px-4 border border-on-dark-default rounded-lg transition duration-150 hover:bg-primary-lightest/10"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            className="cursor-pointer rounded-lg border border-transparent bg-secondary-default px-4 py-2 text-white transition duration-150 hover:bg-secondary-darker max-lg:hidden"
            href="#ja-ik-doe-mee"
          >
            Ja, ik doe mee
          </a>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="hidden max-lg:flex h-10 w-10 items-center justify-center rounded-lg border border-on-dark-default/60 text-on-dark-default bg-black/10 backdrop-blur-xs"
          >
            <span className="relative h-5 w-5 overflow-hidden">
              <Menu
                size={18}
                strokeWidth={2.25}
                className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition duration-200 ${mobileMenuOpen ? "scale-75 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"}`}
              />
              <X
                size={18}
                strokeWidth={2.25}
                className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition duration-200 ${mobileMenuOpen ? "scale-100 rotate-0 opacity-100" : "scale-75 -rotate-90 opacity-0"}`}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-190 hidden max-lg:block transition-all duration-300 ${mobileMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <button
          aria-label="Sluit menu"
          onClick={() => setMobileMenuOpen(false)}
          className="absolute inset-0 top-20 bg-black/45 backdrop-blur-[1px]"
        />
        <div
          className={`absolute inset-x-5 top-24 rounded-2xl border border-emerald-200/25 bg-[#0f3d2e]/95 p-3 shadow-2xl transition-all duration-300 ${mobileMenuOpen ? "translate-y-0 scale-100" : "-translate-y-2 scale-95"}`}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={`mobile-${link.label}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-on-dark-default py-2.5 px-3 border border-on-dark-default/70 rounded-lg transition duration-150 hover:bg-primary-lightest/10"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="mt-1 cursor-pointer rounded-lg border border-transparent bg-secondary-default px-4 py-2.5 text-center text-sm font-semibold text-white transition duration-150 hover:bg-secondary-darker"
              href="#ja-ik-doe-mee"
            >
              Ja, ik doe mee
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-440 grow gap-18 px-10 py-12 2xl:gap-14 max-[1180px]:gap-10 max-[1050px]:flex-col max-[1050px]:px-5 max-[1050px]:pb-10 max-[1050px]:pt-4">
        <img className="absolute bottom-0 right-10 h-75 2xl:right-6 2xl:h-68 max-[1400px]:hidden" src="/images/hero_cards.png" alt="PlukNu cards" />
        <div className="flex basis-[56%] flex-col justify-between gap-12 max-[1050px]:basis-auto max-[1050px]:items-center max-[1050px]:text-center max-md:gap-8">
          <div className="flex max-w-3xl flex-col gap-9 max-[1050px]:items-center max-md:gap-6">
            <h1
              className="hero-intro text-on-dark-default font-heading text-7xl font-bold text-balance 2xl:text-6xl max-[1180px]:text-6xl max-[1050px]:max-w-4xl max-[1050px]:text-5xl max-md:text-[2.45rem] max-md:leading-[1.02]"
              style={{ animationDelay: "80ms" }}
            >
              Iedereen een eerlijke oogst, gedeeld met en vanuit de buurt.
            </h1>

            <p
              className="hero-intro max-w-2xl text-xl text-on-dark-default max-[1180px]:text-lg max-[1050px]:max-w-3xl max-md:text-base max-md:leading-relaxed"
              style={{ animationDelay: "180ms" }}
            >
              Bied aan of koop lokale groenten, fruit, kruiden, honing en noten op
              PlukNu, altijd vers en lokaal bij u in de buurt. Van persoon tot
              persoon, binnen 2 minuten besteld!
            </p>

            <div
              className="hero-intro flex w-fit items-center gap-4 rounded-2xl border border-white/18 bg-white/8 p-4 pr-8 shadow-[0_24px_80px_rgba(7,23,17,0.18)] backdrop-blur-sm max-[1050px]:w-full max-[1050px]:max-w-2xl max-[1050px]:justify-start max-[1050px]:text-left max-[1050px]:pr-4 max-md:items-start"
              style={{ animationDelay: "280ms" }}
            >
              <div className="rounded-full bg-secondary-default p-5 shadow-lg shadow-secondary-default/25 max-[1050px]:p-4">
                <Sprout size={22} className="text-white" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-lg font-bold text-on-dark-alt max-[1050px]:text-base max-md:leading-snug">
                  Behoor tot de eerste 100 plukkers en krijg gratis punten
                </p>
                <p className="text-on-dark-default max-[1050px]:text-sm">
                  Ruil ze in voor gratis zaden en begin met zaaien!
                </p>
              </div>
            </div>

            <div
              className="hero-intro hidden w-full max-w-2xl max-[1050px]:block"
              style={{ animationDelay: "380ms" }}
            >
              <SignupCard />
            </div>
          </div>

          <div
            className="hero-intro flex flex-wrap gap-3 max-[1050px]:justify-center max-md:grid max-md:w-full max-md:grid-cols-1"
            style={{ animationDelay: "460ms" }}
          >
            {heroBenefits.map((item) => (
              <span
                key={item}
                className="flex items-center gap-2 rounded-full border border-white/14 bg-black/10 px-4 py-2 text-base text-white backdrop-blur-sm max-[1050px]:justify-center max-[1050px]:text-sm max-md:rounded-2xl max-md:justify-start"
              >
                <Check className="shrink-0 text-secondary-default" size={18} />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div
          className="hero-intro hidden basis-[40%] py-4 min-[1051px]:block min-[1051px]:py-0"
          style={{ animationDelay: "360ms" }}
        >
          <SignupCard />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
