import introArt from "../../assets/images/home/sunset.png";
import profileImage from "../../assets/images/headphones.png";

export function Intro() {
  return (
    <section className="grid min-h-[520px] md:grid-cols-2">
      {/* Artwork side */}
      <div className="min-h-[420px] md:min-h-full">
        <img
          src={introArt}
          alt="Celina's illustration"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Bio side */}
      <div className="flex items-center bg-[#f7f8ff] px-8 py-16 md:px-16">
        <div className="mx-auto w-full max-w-md">
          {/* Profile heading */}
          <div className="flex items-center gap-5">
            <img
              src={profileImage}
              alt="Illustrated portrait of Celina"
              className="h-35 w-35 rounded-full border-3 border-orange-400 object-cover"
            />

            <div>
              <h2 className="text-4xl font-bold text-[#356cff]">
                Celina He
              </h2>

              <p className="mt-1 text-lg italic text-neutral-600">
                developer, illustrator, and student
              </p>

              <p className="mt-1 text-lg italic text-neutral-600">
                artist alias:{" "}
                <a
                  href="https://www.instagram.com/yumiihe/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#356cff] hover:underline"
                >
                  yumiihe
                </a>
              </p>
            </div>
          </div>

          {/* Bio */}
          <div className="mt-10 space-y-4 text-lg leading-6 text-neutral-800">
            <p>
              hey! nice to meet ya,{" "}
              <span className="text-[#356cff]">i’m celina.</span>
            </p>

            <p>
              i’m studying{" "}
              <span className="text-[#356cff]">
                software engineering @uwaterloo
              </span>{" "}
              because i had too much screen time as a kid.
            </p>

            <p>
              i like to write code, draw, play roguelites, and go cafe hopping
              to find the perfect spot to loiter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}