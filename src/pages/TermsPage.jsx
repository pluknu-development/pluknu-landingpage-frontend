import Footer from "../components/sections/Footer";
import Reveal from "../components/ui/Reveal";

const sections = [
  {
    title: "1. Definities",
    body:
      "Beschrijf hier wie onder PlukNu, gebruiker, aanbieder, koper en platform worden verstaan. Dit onderdeel helpt om de rest van de voorwaarden juridisch eenduidig te maken.",
  },
  {
    title: "2. Toepasselijkheid",
    body:
      "Leg hier vast wanneer deze voorwaarden gelden, voor welke diensten ze bedoeld zijn en wat er gebeurt als aanvullende afspraken afwijken van deze tekst.",
  },
  {
    title: "3. Gebruik van het platform",
    body:
      "Omschrijf welke handelingen gebruikers wel en niet mogen uitvoeren op PlukNu, bijvoorbeeld het aanbieden van producten, het plaatsen van onjuiste informatie of misbruik van accounts.",
  },
  {
    title: "4. Accounts en registratie",
    body:
      "Gebruik dit onderdeel voor regels rondom accountaanmaak, juistheid van gegevens, beveiliging van inloggegevens en verantwoordelijkheid voor gebruik van het account.",
  },
  {
    title: "5. Aanbod, bestellingen en betalingen",
    body:
      "Vul hier in hoe aanbod tot stand komt, wanneer een bestelling definitief is, hoe prijzen worden weergegeven en welke rol PlukNu zelf heeft bij betalingen of transacties.",
  },
  {
    title: "6. Aansprakelijkheid",
    body:
      "Neem hier op in welke gevallen PlukNu aansprakelijk kan zijn, waar de aansprakelijkheid wordt beperkt en welke verantwoordelijkheden bij aanbieders en kopers zelf blijven liggen.",
  },
  {
    title: "7. Privacy en gegevensverwerking",
    body:
      "Verwijs hier naar de privacyverklaring en licht kort toe welke persoonsgegevens nodig zijn om het platform te laten werken.",
  },
  {
    title: "8. Wijzigingen en contact",
    body:
      "Beschrijf hoe wijzigingen in de voorwaarden worden gecommuniceerd, vanaf wanneer ze gelden en via welk e-mailadres of postadres gebruikers contact kunnen opnemen.",
  },
];

function TermsPage() {
  return (
    <main className="min-h-screen bg-primary-lightest font-body text-on-light-default">
      <section className="relative overflow-hidden bg-linear-to-br from-[#256449] to-[#092C20]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 top-16 h-72 w-72 rounded-full bg-[#7ebc47]/20 blur-3xl" />
          <div className="absolute -right-24 top-12 h-80 w-80 rounded-full bg-[#0d5c3d]/35 blur-3xl" />
        </div>

        <div className="relative mx-auto flex w-full max-w-440 items-center justify-between px-10 py-6 max-md:px-5">
          <a href="/" aria-label="Terug naar home">
            <img className="h-14 w-auto max-md:h-10" src="/images/pluk-nu-logo-light.svg" alt="PlukNu logo" />
          </a>
          <a
            className="rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-on-dark-alt transition duration-150 hover:bg-white/10"
            href="/"
          >
            Terug naar home
          </a>
        </div>

        <div className="relative mx-auto flex w-full max-w-440 flex-col px-10 pb-18 pt-10 max-md:px-5 max-md:pb-14 max-md:pt-6">

          <Reveal className="mt-6 max-w-4xl" delay={140}>
            <h1 className="font-heading text-6xl font-bold text-on-dark-alt max-lg:text-5xl max-md:text-4xl">
              Algemene voorwaarden
            </h1>
          </Reveal>

          <Reveal className="mt-5 max-w-3xl" delay={220}>
            <p className="text-lg text-on-dark-default max-md:text-base">
              Dit is een opzetpagina voor de algemene voorwaarden van PlukNu. De
              structuur staat klaar, zodat je later alleen nog de definitieve
              juridische tekst hoeft toe te voegen.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="w-full">
        <div className="mx-auto flex w-full max-w-440 flex-col gap-8 px-10 py-18 max-md:px-5 max-md:py-14">
          <Reveal className="rounded-[2rem] border border-primary-default/10 bg-white p-8 shadow-[0_24px_80px_rgba(10,32,24,0.08)] max-md:rounded-[1.6rem] max-md:p-5">
            <div className="flex flex-col gap-4">
              <h2 className="font-heading text-3xl font-bold text-primary-darkest max-md:text-2xl">
                Status van dit document
              </h2>
              <p className="text-lg text-on-light-alt max-md:text-base">
                Deze pagina is een template. Laat de definitieve inhoud controleren
                door een jurist voordat je deze publiceert als bindende versie.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6">
            {sections.map((section, index) => (
              <Reveal
                key={section.title}
                className="rounded-[1.75rem] border border-primary-default/10 bg-white p-8 shadow-[0_18px_60px_rgba(10,32,24,0.06)] max-md:rounded-[1.4rem] max-md:p-5"
                delay={index * 70}
              >
                <div className="flex flex-col gap-3">
                  <h3 className="font-heading text-2xl font-bold text-primary-darkest max-md:text-xl">
                    {section.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-on-light-alt max-md:text-base">
                    {section.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer homePrefix="/" legalHref="/algemene-voorwaarden.html" />
    </main>
  );
}

export default TermsPage;
