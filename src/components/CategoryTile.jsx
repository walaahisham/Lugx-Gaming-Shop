
import { Link } from "react-router-dom";

export default function CategoryTile({ name, img }) {
  return (
    <div className="relative mb-[30px] overflow-hidden rounded-[25px] bg-[#0071f8] text-center">

      <h4 className="p-[22px] text-[17px] font-semibold text-white
      max-md:p-[18px] max-md:text-[15px]">
        {name}
      </h4>

      <div className="relative overflow-hidden rounded-[25px]">
        <Link to="/product-details">
          <img
            src={`/images/${img}`}
            alt={name}
            className="w-full object-cover transition-transform
            duration-300 hover:scale-105"
          />
        </Link>
      </div>

    </div>
  );
}
