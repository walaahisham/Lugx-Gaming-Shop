
import { Link } from "react-router-dom";
import BagIcon from "./BagIcon";

export default function GameCard({ game }) {
  const { img, category, title, price, oldPrice } = game;

  return (
    <div className="group relative mb-[30px] overflow-hidden rounded-[25px] bg-[#eee]">

      <div className="relative overflow-hidden rounded-[25px]">
        <Link to="/product-details">
          <img
            src={`/images/${img}`}
            alt={title}
            className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        <span className="absolute right-5 top-5 rounded-[10px] bg-[#008af8] px-[15px] pb-[6px] pt-2 text-right text-[17px] font-semibold uppercase text-white max-md:right-3 max-md:top-3 max-md:px-3 max-md:text-[15px]">
          {oldPrice && (
            <em className="block text-sm font-normal not-italic line-through">
              ${oldPrice}
            </em>
          )}
          ${price}
        </span>
      </div>

      <div className="relative min-h-[110px] p-[25px] max-md:p-5 max-sm:p-[18px]">
        <span className="mb-[5px] inline-block text-sm text-[#7a7a7a] max-sm:text-xs">
          {category}
        </span>

        <h4 className="max-w-[85%] break-words text-[17px] font-semibold transition-all duration-300 group-hover:text-[#0071f8] max-md:text-[15px] max-sm:text-sm">
          {title}
        </h4>

        <Link
          to="/product-details"
          aria-label={`Open ${title}`}
          className="absolute bottom-[25px] right-[25px] flex h-10 w-10 items-center justify-center rounded-full bg-[#ee626b] text-white transition-all duration-300 group-hover:bg-[#0071f8] max-md:bottom-5 max-md:right-5 max-sm:bottom-[18px] max-sm:right-[18px] max-sm:h-9 max-sm:w-9"
        >
          <BagIcon />
        </Link>
      </div>

    </div>
  );
}
