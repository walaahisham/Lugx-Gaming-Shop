
export default function Footer() {
  return (
    <footer className="mt-24 md:mt-[150px] min-h-[150px] rounded-t-[70px] md:rounded-t-[150px] bg-[#0071f8] bg-[url('/images/footer-bg.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="lx-container px-4">
        <p className="flex min-h-[150px] flex-col items-center justify-center gap-2 py-6 text-center text-sm font-normal leading-relaxed text-white md:flex-row md:gap-1 md:text-base">
          <span>
            Copyright © 2048 LUGX Gaming Company. All rights reserved.
          </span>

          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="relative z-[3] text-white transition-all duration-300 hover:opacity-75"
          >
            Design: Doston21-wq
          </a>
        </p>
      </div>
    </footer>
  );
}
