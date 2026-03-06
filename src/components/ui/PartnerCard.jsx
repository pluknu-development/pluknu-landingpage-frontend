function PartnerCard({ imageSrc, imageAlt, title, description, metaIcon: MetaIcon, metaText }) {
  return (
    <article className="flex gap-5 rounded-3xl border border-gray-200 bg-white p-5">
      <img className="h-20 shrink-0 rounded-xl object-cover" src={imageSrc} alt={imageAlt} />
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-bold text-on-light-default max-md:text-2xl">{title}</h3>
        <p className="max-w-104 text-lg text-on-light-alt max-md:text-base">{description}</p>
        <span className="mt-1 inline-flex items-center gap-2 text-lg font-bold text-secondary-default max-md:text-base">
          <MetaIcon size={19} />
          {metaText}
        </span>
      </div>
    </article>
  );
}

export default PartnerCard;
