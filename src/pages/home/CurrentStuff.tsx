import subwayImage from "../../assets/images/home/subway.png";

export function CurrentStuff() {
  return (
    <section
      className="
        relative
        flex min-h-[720px]
        items-center
        bg-cover
        bg-center
        bg-fixed
        px-8
        py-20
        md:min-h-[850px]
        md:px-16
      "
      style={{
        backgroundImage: `url(${subwayImage})`,
      }}
    >
      <div className="w-full max-w-md rounded-[28px] border-[3px] border-[#356cff] bg-[#f8f9ff] p-10 shadow-lg md:p-15">
        <h2 className="text-4xl font-bold text-[#356cff]">
          what i’m up to...
        </h2>

        <div className="mt-8 space-y-6 text-lg leading-6 text-neutral-800">
          <p>
            <span className="font-semibold underline">
              studyTama
            </span>{" "}
            · i’m building a tamagotchi-inspired study web extension to stop
            myself from doom scrolling... project name is still in the works 😬
          </p>

          <p>
            <span className="font-semibold underline">
              uwaterloo scrabble club
            </span>{" "}
            · we run weekly game nights and sometimes local tournaments when we
            have money 🙏
          </p>

          <p>
            i’m making an artbook! check out{" "}
            <a
              href="/illustrations"
              className="text-[#356cff] underline underline-offset-2"
            >
              my work.
            </a>
          </p>

          {/* Placeholder */}
          <p className="text-sm italic text-[#356cff]">
            more things coming soon...
          </p>
        </div>
      </div>
    </section>
  );
}