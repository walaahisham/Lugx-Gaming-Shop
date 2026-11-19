
import { useEffect, useState } from "react";

export default function Preloader() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (document.readyState === "complete") {
      setLoaded(true);
      return;
    }

    const done = () => setLoaded(true);

    window.addEventListener("load", done);

    return () => window.removeEventListener("load", done);
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black/[.99] transition-[opacity,visibility] duration-300 ${
        loaded
          ? "pointer-events-none invisible opacity-0"
          : "visible opacity-100"
      }`}
    >
      <div className="relative h-10 w-[142px]">
        <span className="absolute left-[15px] top-3 h-4 w-4 animate-[dot_2.8s_infinite] rounded-full bg-[#0071f8]" />

        <div className="ml-[31px] mt-3 flex animate-[dots_2.8s_infinite]">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="ml-4 block h-4 w-4 rounded-full bg-[#0071f8]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
