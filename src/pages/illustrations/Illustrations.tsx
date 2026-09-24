import { IllustrationGallery } from "./IllustrationGallery";

export function Illustrations() {
  return (
    <>
      {/* Page title banner */}
      <section className="bg-[#315eff] px-8 py-16 text-white md:py-20">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-sm tracking-widest text-white/70">
            PORTFOLIO / ART
          </p>

          <h1 className="mt-3 text-5xl font-bold tracking-tight md:text-7xl">
            Illustrations
          </h1>

          <p className="mt-4 max-w-xl text-base leading-7 text-white/80 hover:underline hover:text-white md:text-lg">
            <a
              href="https://yumicommissions.carrd.co/#"
            >
              <span>↗ </span>
              Commission Info
            </a>
          </p>
        </div>
      </section>

      {/* Gallery */}
      <IllustrationGallery />
    </>
  );
}