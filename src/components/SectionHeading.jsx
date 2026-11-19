
export default function SectionHeading({
  eyebrow,
  children,
  className = "mb-[70px]",
}) {
  return (
    <div className={className}>
      <h6 className="text-[13px] font-bold uppercase text-[#ee626b] sm:text-[15px]">
        {eyebrow}
      </h6>

      <h2 className="mt-3 text-[26px] font-bold capitalize leading-[34px] sm:mt-5 sm:text-[32px] sm:leading-[40px] lg:text-[36px] lg:leading-[44px] [&_em]:not-italic [&_em]:text-[#0071f8]">
        {children}
      </h2>
    </div>
  );
}
