import Reveal from "../ui/Reveal";

function DashboardSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-440 flex-col items-center gap-8 px-10 py-22 max-md:px-5 max-md:py-16">
        <Reveal className="flex flex-col items-center gap-8" delay={40}>
        <h2 className="text-center font-heading text-5xl font-bold text-primary-darkest max-lg:text-4xl max-md:text-3xl">
          Het PlukNu dashboard
        </h2>

        <p className="max-w-220 text-center text-xl text-on-light-alt max-md:text-base">
          Beheer je producten, volg je omzet en zie statistieken in één overzicht
        </p>
        </Reveal>

        <Reveal className="mt-8 w-full max-w-7xl" delay={140} variant="zoom">
          <img
            className="h-auto w-full"
            src="/images/dashboard.svg"
            alt="PlukNu dashboard overzicht"
          />
        </Reveal>
      </div>
    </section>
  );
}

export default DashboardSection;
