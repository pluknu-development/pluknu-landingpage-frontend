function BenefitItem({ icon: Icon, title, description, badge }) {
  return (
    <div className="flex gap-4">
      <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-white text-secondary-default">
        <Icon size={24} />
      </div>
      <div className="pt-1">
        <div className="flex items-center gap-3">
          <h3 className="text-2xl font-bold text-on-light-default">{title}</h3>
          {badge ? (
            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-secondary-darkest">
              {badge}
            </span>
          ) : null}
        </div>
        <p className="mt-1 text-lg text-on-light-alt max-md:text-base">{description}</p>
      </div>
    </div>
  );
}

export default BenefitItem;
