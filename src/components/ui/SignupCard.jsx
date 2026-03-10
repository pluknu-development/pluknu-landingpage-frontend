import { ArrowRight } from "lucide-react";
import { useState } from "react";

function SignupCard() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/.netlify/functions/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Bedankt voor je aanmelding! Controleer je email.");
        setEmail("");
      } else {
        setMessage(data.error || "Er is iets misgegaan.");
      }
    } catch (error) {
      setMessage("Er is iets misgegaan. Probeer het later opnieuw.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex w-full flex-col gap-8 rounded-4xl border border-white/70 bg-white p-8 shadow-[0_24px_80px_rgba(10,32,24,0.18)] max-md:gap-5 max-md:rounded-[1.6rem] max-md:p-5">
      <h2 className="text-2xl font-bold text-primary-default max-md:text-xl max-md:leading-tight">
        Behoor tot de 100 aanbieders op PlukNu en ontvang een exclusief pluk-pakket! 🥕
      </h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          className="rounded-xl border-2 border-gray-200 bg-primary-lighter p-4 text-lg transition duration-150 focus:scale-102 focus:border-secondary-default focus:outline-0 max-md:p-3.5 max-md:text-base"
          placeholder="Je e-mailadres"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          className="flex cursor-pointer items-center justify-center gap-4 rounded-xl bg-secondary-default p-4 text-lg text-white transition duration-150 hover:bg-secondary-darker disabled:opacity-50 max-md:p-3.5 max-md:text-base"
          type="submit"
          disabled={loading}
        >
          {loading ? "Verzenden..." : "Ja, ik doe mee en wil het ervaren"} <ArrowRight />
        </button>
        {message && <p className="text-center text-sm">{message}</p>}
      </form>
    </div>
  );
}

export default SignupCard;
