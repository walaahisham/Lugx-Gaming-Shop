
import SectionHeading from "./SectionHeading";
import MainButton from "./MainButton";

export default function SectionHead({
  eyebrow,
  title,
  to = "/shop",
  centerOnMobile = false,
}) {
  return (
    <div className="grid items-start gap-6 lg:grid-cols-2">
      <SectionHeading
        eyebrow={eyebrow}
        className={`mb-8 lg:mb-[70px] ${
          centerOnMobile ? "max-lg:text-center" : ""
        }`}
      >
        {title}
      </SectionHeading>

      <div
        className={`mt-0 lg:mt-8 ${
          centerOnMobile ? "text-center" : "text-left"
        } lg:text-right`}
      >
        <MainButton to={to}>View All</MainButton>
      </div>
    </div>
  );
}
