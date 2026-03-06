function StepCard({ step, icon: Icon, title, description, showStep = true }) {
  return (
    <article className="rounded-3xl border border-gray-200 bg-white p-8 max-md:p-6 flex flex-col items-center gap-8">

      <div className="relative grid h-22 w-22 place-items-center rounded-full bg-primary-lightest text-secondary-default max-md:h-18 max-md:w-18">
        <Icon size={32} />

        {showStep ? (
          <span className="absolute right-0 top-0 grid h-7 w-7 place-items-center rounded-full bg-secondary-default text-sm font-bold text-white">
            {step}
          </span>
        ) : null}
      </div>

      <h3 className="text-3xl text-center font-bold text-primary-darkest font-heading max-md:text-2xl">
        {title}
      </h3>

      <p className="text-lg text-center text-on-light-alt max-md:text-base">
        {description}
      </p>
    </article>
  );
}

export default StepCard;
