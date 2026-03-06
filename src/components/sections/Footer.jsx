import { navLinks } from "../../constants/navigation";
import Reveal from "../ui/Reveal";

function Footer() {
  return (
    <footer className="w-full bg-white">
      <Reveal className="gap-12 mx-auto flex w-full max-w-440 flex-col items-center px-10 pb-10 pt-14 max-md:px-5 max-md:pb-8 max-md:pt-10">
        <a href="#top" aria-label="Ga naar boven">
          <img
            className="h-20 w-auto max-md:h-12"
            src="/images/pluk-nu-logo-dark.svg"
            alt="PlukNu logo"
          />
        </a>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 max-md:mt-6 max-md:gap-x-5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              className="text-md text-on-light-alt transition duration-150 hover:text-primary-default"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="w-full border-t border-black/10 pt-6 max-md:mt-6 max-md:pt-5">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-on-light-muted">
            <span>2026 PlukNu, Alle rechten voorbehouden</span>
            <span>|</span>
            <a className="transition duration-150 hover:text-primary-default" href="#">
              Algemene voorwaarden
            </a>
          </div>
        </div>
      </Reveal>
    </footer>
  );
}

export default Footer;
