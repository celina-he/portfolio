import { FrameAnimation } from "../../components/media/FrameAnimation";

import artist1 from "../../assets/images/home/animation-frames/artist-frame-1.png";
import artist2 from "../../assets/images/home/animation-frames/artist-frame-2.png";
import artist3 from "../../assets/images/home/animation-frames/artist-frame-3.png";

import bunny1 from "../../assets/images/home/animation-frames/bunny-frame-1.png";
import bunny2 from "../../assets/images/home/animation-frames/bunny-frame-2.png";
import bunny3 from "../../assets/images/home/animation-frames/bunny-frame-3.png";

import star1 from "../../assets/images/home/animation-frames/star-frame-1.png";
import star2 from "../../assets/images/home/animation-frames/star-frame-2.png";
import star3 from "../../assets/images/home/animation-frames/star-frame-3.png";
import star4 from "../../assets/images/home/animation-frames/star-frame-4.png";
import star5 from "../../assets/images/home/animation-frames/star-frame-5.png";

const artistFrames = [artist1, artist2, artist3];
const bunnyFrames = [bunny1, bunny2, bunny3];
const starFrames = [star1, star2, star3, star4, star5];

export function CommissionCta() {
  return (
    <section className="bg-[#f7f8ff] px-4 py-4 md:px-6">
      <div className="grid min-h-[250px] border-3 border-[#4e7cff] md:grid-cols-[1fr_auto_1fr]">
        <div className="hidden items-center justify-end px-6 py-4 md:flex">
          <FrameAnimation
            frames={starFrames}
            interval={250}
          />
          <FrameAnimation
            frames={artistFrames}
            interval={350}
          />
        </div>

        <div className="flex items-center justify-center px-8 py-10">
          <div>
            <h2 className="text-3xl font-bold leading-tight text-[#4e7cff]">
              Like my art?
              <br />
              I do commissions.
            </h2>

            <a
              href="https://yumicommissions.carrd.co/#"
              className="mt-5 inline-flex items-center gap-2 text-lg text-neutral-700 hover:text-[#356cff]"
            >
              <span>↗</span>
              Commission Info
            </a>
          </div>
        </div>

        <div className="hidden items-center justify-start px-6 py-4 md:flex">
          <FrameAnimation
            frames={bunnyFrames}
            interval={350}
          />
          <FrameAnimation
            frames={starFrames}
            interval={250}
          />
        </div>
      </div>
    </section>
  );
}