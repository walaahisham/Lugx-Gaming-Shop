
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import PageHeading from "../components/PageHeading";
import GameCard from "../components/GameCard";
import { shopGames, shopFilters } from "../data/games";

export default function Shop() {
  const [filter, setFilter] = useState("*");
  const [page, setPage] = useState(2);
  const [params] = useSearchParams();
  const q = (params.get("q") || "").toLowerCase();

  const list = shopGames.filter(
    (g) =>
      (filter === "*" || g.tags.includes(filter)) &&
      g.title.toLowerCase().includes(q)
  );

  return (
    <>
      <PageHeading
        title="Our Shop"
        crumbs={[{ label: "Our Shop" }]}
      />

      <section className="mt-[120px] max-lg:mt-[80px] max-md:mt-[60px]">
        <div className="lx-container">

          {/* Filters */}
          <ul className="mb-[70px] flex flex-wrap items-center
          justify-center gap-3 max-md:mb-[45px] max-sm:gap-2">
            {shopFilters.map((f) => (
              <li key={f.value}>
                <button
                  type="button"
                  onClick={() => setFilter(f.value)}
                  aria-pressed={filter === f.value}
                  className={`inline-block rounded-[25px] px-5 py-2
                  text-[15px] font-semibold uppercase
                  transition-all duration-300
                  max-md:px-4 max-md:text-[13px]
                  max-sm:px-3 max-sm:py-2 max-sm:text-[11px]
                  ${
                    filter === f.value
                      ? "bg-[#ee626b] text-white"
                      : "bg-[#eee] text-[#1e1e1e] hover:text-[#ee626b]"
                  }`}
                >
                  {f.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Games */}
          {list.length ? (
            <div className="grid grid-cols-1 gap-x-6
            sm:grid-cols-2 lg:grid-cols-4">
              {list.map((g) => (
                <GameCard key={g.id} game={g} />
              ))}
            </div>
          ) : (
            <p className="py-10 text-center text-sm sm:text-base">
              No games found.
            </p>
          )}

          {/* Pagination */}
          <ul className="mt-[50px] flex flex-wrap items-center
          justify-center gap-2 max-md:mt-[35px]">
            {["<", 1, 2, 3, ">"].map((p) => (
              <li key={p}>
                <button
                  type="button"
                  onClick={() =>
                    typeof p === "number" && setPage(p)
                  }
                  aria-label={
                    typeof p === "number"
                      ? `Page ${p}`
                      : p === "<"
                      ? "Previous"
                      : "Next"
                  }
                  className={`flex h-10 w-10 items-center
                  justify-center rounded-full text-[15px]
                  font-semibold transition-all duration-300
                  hover:bg-[#0071f8] hover:text-white
                  max-sm:h-9 max-sm:w-9 max-sm:text-sm
                  ${
                    p === page
                      ? "bg-[#0071f8] text-white"
                      : "bg-[#eee] text-[#1e1e1e]"
                  }`}
                >
                  {p}
                </button>
              </li>
            ))}
          </ul>

        </div>
      </section>
    </>
  );
}
