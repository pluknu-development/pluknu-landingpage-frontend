import { ArrowRight } from "lucide-react";

function SignupCard() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex w-full flex-col gap-8 rounded-4xl border border-white/70 bg-white p-8 shadow-[0_24px_80px_rgba(10,32,24,0.18)] max-md:gap-5 max-md:rounded-[1.6rem] max-md:p-5">
      <h2 className="text-3xl font-bold text-primary-default max-md:text-xl max-md:leading-tight">
        Ben jij een van de plukkers in IJselmuiden?
      </h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          className="rounded-xl border-2 border-gray-200 bg-primary-lighter p-4 text-lg transition duration-150 focus:scale-102 focus:border-secondary-default focus:outline-0 max-md:p-3.5 max-md:text-base"
          placeholder="Je e-mailadres"
          type="text"
        />
        <button
          className="flex cursor-pointer items-center justify-center gap-4 rounded-xl bg-secondary-default p-4 text-lg text-white transition duration-150 hover:bg-secondary-darker max-md:p-3.5 max-md:text-base"
          type="submit"
        >
          Ja, ik ga plukken <ArrowRight />
        </button>
      </form>
    </div>
  );
}

export default SignupCard;
