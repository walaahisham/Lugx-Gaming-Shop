
import { Link } from "react-router-dom";

export default function PageHeading({ title, crumbs = [] }) {
  return (
    <div
      data-header-text
      className="rounded-b-[70px] sm:rounded-b-[100px] lg:rounded-b-[150px] bg-[url('/images/page-heading-bg.jpg')] bg-cover bg-bottom bg-no-repeat px-4 pb-16 pt-32 sm:pb-20 sm:pt-[150px] lg:pb-[100px] lg:pt-[200px] text-center"
    >
      <div className="lx-container">
        <h3 className="relative mb-5 mt-5 text-3xl font-bold uppercase text-white sm:text-[40px] lg:text-[48px]">
          {title}
        </h3>

        <nav
          aria-label="Breadcrumb"
          className="inline-block text-sm text-white sm:text-base"
        >
          <Link to="/" className="transition-opacity hover:opacity-75">
            Home
          </Link>

          {crumbs.map((c) => (
            <span key={c.label}>
              {" > "}
              {c.to ? (
                <Link
                  to={c.to}
                  className="transition-opacity hover:opacity-75"
                >
                  {c.label}
                </Link>
              ) : (
                c.label
              )}
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
}
