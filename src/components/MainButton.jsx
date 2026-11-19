
import { Link } from "react-router-dom";

export default function MainButton({ to, children }) {
  return (
    <Link
      to={to}
      className="inline-flex h-[46px] sm:h-[50px] items-center justify-center rounded-[25px] bg-[#ee626b] px-6 sm:px-[30px] text-xs sm:text-sm font-semibold uppercase text-white transition-all duration-300 hover:bg-[#0071f8]"
    >
      {children}
    </Link>
  );
}
