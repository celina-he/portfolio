import heroImage from "../../assets/images/home/fish.png";
import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export function Hero() {
  const [ hasScrolled, setHasScrolled ] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // once the user starts scrolling, hide the indicator
      if (window.scrollY > 20) {
        setHasScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className="
        relative
        min-h-[620px]
        overflow-hidden
        bg-neutral-900
        md:min-h-[760px]
      "
    >
      <div
        className="hero-background-float absolute inset-0 scale-110 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />

      {/* dark image overlay */}
      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 flex min-h-[620px] items-center justify-center px-6 text-center text-white md:min-h-[760px] sticky font-mono">
        <div className="hero-title-float">
          <h1 className="text-5xl font-bold tracking-wide md:text-8xl">
            <span>
                CELINA HE
            </span>
          </h1>
          <p className="mt-4 text-2xl font-light tracking-wide md:text-3xl">
            developer & illustrator
          </p>
        </div>

        <button
          type="button"
          aria-label="Scroll to next section"
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            });
          }}
          className={`
            scroll-indicator
            absolute
            bottom-12
            left-1/2
            flex
            h-18
            w-18
            -translate-x-1/2
            items-center
            justify-center
            rounded-full
            bg-white/15
            text-xl
            text-white
            backdrop-blur-sm
            transition-all
            duration-500
            animate-bounce

            ${
              hasScrolled
                ? "pointer-events-none translate-y-8 opacity-0"
                : "opacity-100"
            }
          `}
        >
          <FaChevronDown />
        </button>

      </div>
    </section>
  );
}