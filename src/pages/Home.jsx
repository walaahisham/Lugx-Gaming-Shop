
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import SectionHead from "../components/SectionHead";
import MainButton from "../components/MainButton";
import GameCard from "../components/GameCard";
import CategoryTile from "../components/CategoryTile";
import { trending, mostPlayed, categoryTiles } from "../data/games";

const features = [
  { img: "featured-01.png", title: "Free Storage" },
  { img: "featured-02.png", title: "User More" },
  { img: "featured-03.png", title: "Reply Ready" },
  { img: "featured-04.png", title: "Easy Layout" },
];

const formBtn =
  "absolute right-0 top-0 h-[50px] rounded-[25px] bg-[#ee626b] px-[25px] text-[15px] font-medium uppercase leading-[50px] text-white transition-all duration-300 hover:bg-[#0071f8] max-sm:px-5 max-sm:text-[13px]";

const formInput =
  "h-[50px] w-full rounded-[25px] border-0 bg-white px-[25px] text-sm text-[#7a7a7a] outline-none max-sm:px-5";

export default function Home() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const onSearch = (e) => {
    e.preventDefault();
    const q = query.trim();
    navigate(q ? `/shop?q=${encodeURIComponent(q)}` : "/shop");
  };

  const onSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <>
      {/* Banner */}
      <div className="rounded-b-[150px] bg-[url('/images/banner-bg.jpg')] bg-cover bg-bottom bg-no-repeat py-[225px] max-lg:rounded-b-[100px] max-lg:py-[140px] max-md:rounded-b-[70px] max-md:py-[100px] max-sm:py-[75px]">
        <div className="lx-container">
          <div className="grid items-center gap-x-6 gap-y-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <div data-header-text className="max-lg:mb-[20px] max-lg:text-center">
                <h6 className="text-[20px] font-medium uppercase tracking-[.5px] text-white max-sm:text-[16px]">
                  Welcome to lugx
                </h6>

                <h2 className="relative mb-10 mt-5 pb-[5px] text-[48px] font-bold text-white after:absolute after:bottom-0 after:left-[125px] after:h-3 after:w-[202px] after:bg-[url('/images/caption-dec.png')] after:bg-no-repeat after:content-[''] max-lg:text-[40px] max-md:mb-7 max-md:text-[32px] max-sm:text-[26px] max-sm:after:left-1/2 max-sm:after:-translate-x-1/2">
                  BEST GAMING SITE EVER!
                </h2>

                <p className="mb-[70px] !text-white max-md:mb-10 max-sm:text-sm">
                  LUGX Gaming is free Bootstrap 5 HTML CSS website template for your gaming websites. You can download and use this layout for commercial purposes. Please tell your friends about TemplateMo.
                </p>

                <form
                  onSubmit={onSearch}
                  role="search"
                  className="relative max-w-[450px] max-lg:max-w-full"
                >
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Type Something"
                    aria-label="Search games"
                    className={formInput}
                  />
                  <button type="submit" className={formBtn}>
                    Search Now
                  </button>
                </form>
              </div>
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <div className="relative mx-auto max-w-[450px] lg:max-w-none">
                <img
                  src="/images/banner-image.jpg"
                  alt="Featured game"
                  className="w-full rounded-[25px]"
                />

                <span className="absolute right-5 top-5 rounded-[25px] bg-[#008af8] px-[15px] py-1 text-[22px] font-bold uppercase text-white max-sm:right-3 max-sm:top-3 max-sm:text-[17px]">
                  $22
                </span>

                <span className="absolute -bottom-[25px] -left-[25px] inline-block h-[100px] w-[100px] rounded-full bg-[#ee626b] text-center text-[28px] font-bold uppercase leading-[100px] text-white max-md:bottom-5 max-md:left-5 max-sm:h-[75px] max-sm:w-[75px] max-sm:text-[21px] max-sm:leading-[75px]">
                  -40%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="-mt-20 max-md:-mt-12">
        <div className="lx-container">
          <div className="grid gap-x-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <a
                key={f.title}
                href="#"
                onClick={(e) => e.preventDefault()}
                className="group"
              >
                <div className="rounded-[25px] bg-white p-[35px] text-center shadow-[0_0_15px_rgba(0,0,0,.15)] max-lg:mb-[30px] max-sm:p-[25px]">
                  <div className="inline-flex h-[90px] w-[90px] items-center justify-center rounded-full bg-[#0071f8] transition-all duration-300 group-hover:bg-[#ee626b]">
                    <img src={`/images/${f.img}`} alt="" className="max-w-[44px]" />
                  </div>

                  <h4 className="mt-[25px] text-[17px] uppercase max-sm:text-[15px]">
                    {f.title}
                  </h4>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Trending */}
      <section className="mt-[120px] max-lg:mt-[90px] max-md:mt-[70px]">
        <div className="lx-container">
          <SectionHead eyebrow="Trending" title="Trending Games" />

          <div className="grid gap-x-6 md:grid-cols-2 lg:grid-cols-4">
            {trending.map((g) => (
              <GameCard key={g.id} game={g} />
            ))}
          </div>
        </div>
      </section>

      {/* Most Played */}
      <section className="mt-[120px] rounded-[150px] bg-[#f7f7f7] py-[100px] max-lg:mt-[90px] max-lg:rounded-[100px] max-lg:py-[75px] max-md:mt-[70px] max-md:rounded-[60px] max-md:py-[55px]">
        <div className="lx-container">
          <SectionHead eyebrow="TOP GAMES" title="Most Played" centerOnMobile />

          <div className="grid gap-x-6 sm:grid-cols-2 lg:grid-cols-6">
            {mostPlayed.map((g) => (
              <div
                key={g.id}
                className="relative mb-10 rounded-[25px] bg-white text-center"
              >
                <div className="relative overflow-hidden rounded-[25px]">
                  <Link to="/product-details">
                    <img
                      src={`/images/${g.img}`}
                      alt={g.title}
                      className="w-full"
                    />
                  </Link>
                </div>

                <div className="px-[15px] pb-10 pt-5">
                  <span className="mb-[5px] inline-block text-sm text-[#7a7a7a]">
                    {g.category}
                  </span>

                  <h4 className="text-[17px] font-semibold max-sm:text-[15px]">
                    {g.title}
                  </h4>

                  <Link
                    to="/product-details"
                    className="absolute -bottom-5 left-1/2 inline-block h-10 -translate-x-1/2 rounded-[20px] bg-[#ee626b] px-[15px] text-[15px] font-semibold uppercase leading-10 text-white transition-all duration-300 hover:bg-[#0071f8]"
                  >
                    Explore
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mt-[120px] max-lg:mt-[90px] max-md:mt-[70px]">
        <div className="lx-container">
          <SectionHeading
            eyebrow="Categories"
            className="mb-[70px] text-center max-md:mb-[40px]"
          >
            Top Categories
          </SectionHeading>

          <div className="grid gap-x-6 sm:grid-cols-2 lg:grid-cols-5">
            {categoryTiles.map((c, i) => (
              <CategoryTile key={i} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative mt-[120px] max-lg:mt-[90px] max-md:mt-[70px] after:absolute after:left-1/2 after:top-0 after:-z-10 after:h-full after:max-h-[510px] after:w-full after:max-w-[550px] after:-translate-x-[275px] after:rounded-[25px] after:bg-[url('/images/cta-bg.jpg')] after:bg-no-repeat after:content-[''] max-lg:after:hidden">
        <div className="lx-container">
          <div className="grid gap-x-6 gap-y-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="mt-20 rounded-[25px] bg-[#f7f7f7] p-20 max-lg:mt-0 max-lg:mb-[30px] max-lg:p-[30px] max-sm:p-[25px]">
                <SectionHeading
                  eyebrow="Our Shop"
                  className="mb-[50px] lg:mr-[30px] max-md:mb-[30px]"
                >
                  Go Pre-Order Buy &amp; Get Best <em>Prices</em> For You!
                </SectionHeading>

                <p className="text-base font-semibold max-sm:text-sm">
                  Lorem ipsum dolor consectetur adipiscing, sed do eiusmod tempor incididunt.
                </p>

                <div className="mt-[50px] max-md:mt-[30px]">
                  <MainButton to="/shop">Shop Now</MainButton>
                </div>
              </div>
            </div>

            <div className="self-end lg:col-span-5 lg:col-start-8">
              <div className="rounded-[25px] bg-[#f7f7f7] px-[60px] py-20 max-lg:p-[30px] max-sm:p-[25px]">
                <SectionHeading
                  eyebrow="NEWSLETTER"
                  className="mb-[50px] max-md:mb-[30px]"
                >
                  Get Up To $100 Off Just Buy <em>Subscribe</em> Newsletter!
                </SectionHeading>

                {subscribed ? (
                  <p role="status" className="font-semibold text-[#0071f8]">
                    Subscribed. Check your inbox.
                  </p>
                ) : (
                  <form onSubmit={onSubscribe} className="relative">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email..."
                      aria-label="Your email"
                      className={formInput}
                    />

                    <button
                      type="submit"
                      className={`${formBtn} max-md:relative max-md:mt-[15px] max-md:w-full`}
                    >
                      Subscribe Now
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
