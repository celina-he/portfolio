import heroImage from "../../assets/images/home/fish.png";

export function Hero() {
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

      <div className="relative z-10 flex min-h-[620px] items-center justify-center px-6 text-center text-white md:min-h-[760px]">
        <div>
          <h1 className="text-6xl font-bold tracking-wide md:text-8xl">
            <span className="typewriter">
                hi! i’m celina
            </span>
          </h1>
          <p className="mt-4 text-2xl font-light tracking-wide md:text-3xl">
            developer & illustrator
          </p>
        </div>
      </div>
    </section>
  );
}