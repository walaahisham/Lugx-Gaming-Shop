
import { useState } from "react";
import PageHeading from "../components/PageHeading";
import SectionHead from "../components/SectionHead";
import CategoryTile from "../components/CategoryTile";
import BagIcon from "../components/BagIcon";
import { categoryTiles } from "../data/games";

const text1 =
  'You can search for more templates on Google Search using keywords such as "templatemo digital marketing", "templatemo one-page", "templatemo gallery", etc. Please tell your friends about our website. If you need a variety of HTML templates, you may visit Tooplate and Too CSS websites.';

const text2 =
  "Coloring book air plant shabby chic, crucifix normcore raclette cred swag artisan activated charcoal. PBR&B fanny pack pok pok gentrify truffaut kitsch helvetica jean shorts edison bulb poutine next level humblebrag la croix adaptogen. Hashtag poke literally locavore, beard marfa kogi bruh artisan succulents seitan tonx waistcoat chambray taxidermy. Same cred meggings 3 wolf moon lomo irony cray hell of bitters asymmetrical gluten-free art party raw denim chillwave tousled try-hard succulents street art.";

const tabs = [
  { id: "description", label: "Description" },
  { id: "reviews", label: "Reviews (3)" },
];

const meta = "my-5 block text-sm text-[#0071f8] max-sm:text-xs";

const metaLabel =
  "inline-block w-[120px] text-[#aaa] max-sm:w-[95px]";

export default function ProductDetails() {
  const [tab, setTab] = useState("description");
  const [qty, setQty] = useState(1);

  return (
    <>
      <PageHeading
        title="Modern Warfare® II"
        crumbs={[
          { label: "Shop", to: "/shop" },
          { label: "Assasin Creed" },
        ]}
      />

      {/* Product Details */}
      <section className="mt-[120px] max-lg:mt-[80px] max-md:mt-[60px]">
        <div className="lx-container">

          <div className="grid gap-x-6 gap-y-10 lg:grid-cols-2">

            {/* Product Image */}
            <div className="lg:mr-20">
              <img
                src="/images/single-game.jpg"
                alt="Call of Duty: Modern Warfare II"
                className="w-full rounded-[25px] object-cover"
              />
            </div>

            {/* Product Information */}
            <div className="self-center">
              <h4 className="mb-5 text-[27px] leading-tight
              max-md:text-[23px] max-sm:text-[20px]">
                Call of Duty®: Modern Warfare® II
              </h4>

              <span className="text-[27px] font-bold text-[#0071f8]
              max-sm:text-[23px]">
                <em className="mr-[5px] text-[17px] font-medium
                not-italic text-[#c8c8c8] line-through">
                  $28
                </em>{" "}
                $22
              </span>

              <p className="mb-[40px] mt-[40px] max-md:mt-[25px]
              max-md:mb-[30px] max-sm:text-sm">
                LUGX Gaming Template is based on the latest Bootstrap 5
                CSS framework. This template is provided by TemplateMo
                and it is suitable for your gaming shop ecommerce websites.
                Feel free to use this for any purpose. Thank you.
              </p>

              {/* Quantity and Cart */}
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-wrap items-center gap-3"
              >
                <input
                  type="number"
                  min="1"
                  value={qty}
                  onChange={(e) =>
                    setQty(Math.max(1, Number(e.target.value) || 1))
                  }
                  aria-label="Quantity"
                  className="h-[50px] w-20 rounded-[25px]
                  border border-[#e7e7e7] bg-[#f7f7f7]
                  text-center outline-none"
                />

                <button
                  type="submit"
                  className="inline-flex h-[50px] items-center
                  justify-center rounded-[25px] bg-[#ee626b]
                  px-[25px] text-[15px] font-medium uppercase
                  text-white transition-all duration-300
                  hover:bg-[#0071f8] max-sm:px-4 max-sm:text-xs"
                >
                  <BagIcon className="mr-[5px] h-4 w-4" />
                  ADD TO CART
                </button>
              </form>

              {/* Product Meta */}
              <ul className="mt-[50px] max-md:mt-[35px]">
                <li className={meta}>
                  <span className={metaLabel}>Game ID:</span>
                  COD MMII
                </li>

                <li className={meta}>
                  <span className={metaLabel}>Genre:</span>
                  <a href="#">Action</a>, <a href="#">Team</a>,{" "}
                  <a href="#">Single</a>
                </li>

                <li className={`${meta} !mb-0`}>
                  <span className={metaLabel}>Multi-tags:</span>
                  <a href="#">War</a>, <a href="#">Battle</a>,{" "}
                  <a href="#">Royal</a>
                </li>
              </ul>
            </div>

            <div className="my-20 h-px w-full bg-[#eee] lg:col-span-2
            max-md:my-10" />

          </div>
        </div>
      </section>

      {/* Description and Reviews */}
      <section>
        <div className="lx-container">
          <div className="rounded-[25px] bg-[#f7f7f7]
          p-[60px] transition-all duration-300
          max-lg:p-[40px] max-md:p-[25px]
          max-sm:p-5">

            {/* Tabs */}
            <div
              role="tablist"
              className="flex flex-wrap items-center gap-y-3"
            >
              {tabs.map((t, i) => (
                <button
                  key={t.id}
                  role="tab"
                  id={`${t.id}-tab`}
                  aria-selected={tab === t.id}
                  aria-controls={t.id}
                  onClick={() => setTab(t.id)}
                  className={`text-xl font-semibold
                  max-lg:text-base max-sm:text-sm
                  ${
                    i < tabs.length - 1
                      ? "mr-[30px] border-r border-[#d7d7d7] pr-[30px] max-md:mr-[15px] max-md:pr-[15px]"
                      : ""
                  }
                  ${
                    tab === t.id
                      ? "text-[#0071f8]"
                      : "text-[#1e1e1e]"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="mt-[30px] max-md:mt-5">
              {tab === "description" ? (
                <div
                  role="tabpanel"
                  id="description"
                  aria-labelledby="description-tab"
                >
                  <p className="max-sm:text-sm max-sm:leading-7">
                    {text1}
                  </p>

                  <br />

                  <p className="max-sm:text-sm max-sm:leading-7">
                    {text2}
                  </p>
                </div>
              ) : (
                <div
                  role="tabpanel"
                  id="reviews"
                  aria-labelledby="reviews-tab"
                >
                  <p className="max-sm:text-sm max-sm:leading-7">
                    {text2.split(" Hashtag")[0]}.
                  </p>

                  <br />

                  <p className="max-sm:text-sm max-sm:leading-7">
                    Hashtag{text2.split(" Hashtag")[1]}
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Related Games */}
      <section className="mt-[120px] max-lg:mt-[80px]
      max-md:mt-[60px]">
        <div className="lx-container">

          <SectionHead
            eyebrow="Action"
            title="Related Games"
          />

          <div className="grid grid-cols-1 gap-x-6
          sm:grid-cols-2 lg:grid-cols-5">
            {categoryTiles.map((c, i) => (
              <CategoryTile key={i} {...c} />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
