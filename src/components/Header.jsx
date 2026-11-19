import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Our Shop" },
  { to: "/product-details", label: "Product Details" },
  { to: "/contact", label: "Contact Us" },
];

const linkBase =
  "block h-10 rounded-[20px] px-5 text-[15px] font-light capitalize leading-10 tracking-[.25px] text-white transition-all duration-[400ms] hover:bg-white/10 max-lg:px-[10px] max-md:h-[50px] max-md:rounded-none max-md:bg-white max-md:font-normal max-md:leading-[50px] max-md:text-[#1e1e1e] max-md:hover:bg-white max-md:hover:text-[#ee626b]";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      const box =
        document.querySelector("[data-header-text]")?.offsetHeight ?? 0;

      setScrolled(window.scrollY >= box - 80);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return (
    <header
      className={`left-0 right-0 z-[100] transition-all duration-500
      ${
        scrolled
          ? "fixed top-0 h-20 rounded-b-[25px] bg-[#0071f8] shadow-[0_0_10px_rgba(0,0,0,.15)]"
          : "absolute top-10 bg-transparent"
      }
      max-md:fixed max-md:top-0 max-md:h-20 max-md:px-[15px]
      max-md:bg-[#0071f8]`}
    >
      <div className="lx-container max-md:px-0">
        <nav
          className="relative flex min-h-20 items-center justify-between"
          aria-label="Main"
        >
          {/* Logo */}
          <Link to="/" className="shrink-0">
            <img
              src="/images/logo.png"
              alt="Lugx Gaming"
              className="w-[158px] max-lg:w-[120px] max-md:w-[110px]"
            />
          </Link>

          {/* Navigation */}
          <ul
            className={`flex items-center justify-end
            ${scrolled ? "mt-0" : "mt-[10px]"}
            max-md:absolute max-md:left-0 max-md:right-0
            max-md:top-20 max-md:z-[999]
            max-md:mt-0 max-md:w-full max-md:flex-col
            max-md:items-stretch max-md:bg-white
            max-md:shadow-lg max-md:rounded-b-[15px]
            ${open ? "max-md:flex" : "max-md:hidden"}`}
          >
            {links.map((l) => (
              <li
                key={l.to}
                className="h-10 px-[10px] leading-10
                max-xl:px-[5px] max-md:h-[50px]
                max-md:w-full max-md:border-t
                max-md:border-[#ddd] max-md:bg-white
                max-md:px-0"
              >
                <NavLink
                  to={l.to}
                  end
                  className={({ isActive }) =>
                    `${linkBase} ${
                      isActive
                        ? "bg-white/10 max-md:text-[#ee626b]"
                        : ""
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}

            <li
              className="h-10 pl-[10px] leading-10
              max-xl:pl-[5px] max-md:h-[50px]
              max-md:w-full max-md:border-t
              max-md:border-[#ddd] max-md:bg-white
              max-md:pl-0"
            >
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="block h-10 rounded-[20px]
                bg-[#ee626b] px-5 text-[15px]
                font-medium uppercase leading-10 tracking-[.25px] text-white
                max-lg:px-[10px]
                max-md:h-[50px] max-md:rounded-none
                max-md:bg-white max-md:font-light
                max-md:capitalize max-md:leading-[50px]
                max-md:text-[#1e1e1e]"
              >
                Sign In
              </a>
            </li>
          </ul>

          {/* Hamburger */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="hidden h-10 w-10 items-center
            justify-center text-white max-md:flex"
          >
            <span className="text-[30px] leading-none">
              {open ? "×" : "☰"}
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
}