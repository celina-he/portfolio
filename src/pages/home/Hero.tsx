import heroImage from "../../assets/images/home/fish.png";

export function Hero() {
  return (
    <section
      className="relative flex min-h-[620px] items-center justify-center bg-cover bg-center md:min-h-[760px]"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* dark image overlay */}
      <div className="absolute inset-0 bg-black/35" />

      <div className="relative z-10 px-6 text-center text-white">
        <h1 className="text-6xl font-bold tracking-tight md:text-7xl">
          hi! i’m celina
        </h1>

        <p className="mt-3 text-xl font-light md:text-2xl">
          developer & illustrator
        </p>
      </div>
    </section>
  );
}