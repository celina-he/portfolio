import { useState } from "react";

import introArt from "../../assets/images/home/sunset.png";
import profileImage from "../../assets/images/headphones.png";
import alternateImage from "../../assets/images/home/irl-pic.jpg";

export function Intro() {
  const [isFlipped, setIsFlipped] = useState(false);

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
            <div 
              className="relative h-35 w-35 shrink-0 cursor-pointer [perspective:1000px]"
              onMouseEnter={() => setIsFlipped((previous) => !previous)}
            >
              <div
                className={`
                  relative
                  h-full
                  w-full
                  rounded-full
                  transition-transform
                  duration-500
                  [transform-style:preserve-3d]

                  ${
                    isFlipped
                      ? "[transform:rotateX(180deg)]"
                      : "[transform:rotateX(0deg)]"
                  }
                `}
              >
                {/* Front */}
                <img
                  src={profileImage}
                  alt="Illustrated portrait of Celina"
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    rounded-full
                    border-3
                    border-orange-400
                    object-cover
                    [backface-visibility:hidden]
                  "
                />

                {/* Back */}
                <img
                  src={alternateImage}
                  alt="Alternate IRL picture of Celina"
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    rounded-full
                    border-3
                    border-[#356cff]
                    object-cover
                    [backface-visibility:hidden]
                    [transform:rotateX(180deg)]
                  "
                />
              </div>
            </div>

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
              i’m a 3rd year student studying{" "}
              <span className="text-[#356cff]">
                software engineering @ uwaterloo
              </span>{" "}
              because i had too much screen time as a kid.
            </p>

            <p>
              i like to code, draw, and play roguelites.
            </p>

            <p>
              You can usually find me loitering at a cafe in the area. 😎
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}