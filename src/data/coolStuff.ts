import tctcCover from "../assets/images/cool-stuff/tctc-cover.jpeg";
import se28Cover from "../assets/images/cool-stuff/se28-cover.png";
import installationCover from "../assets/images/cool-stuff/installation-cover.png";
import mirrorBlindCover from "../assets/images/cool-stuff/mirror-blind-cover.png";
import animationCover from "../assets/images/cool-stuff/animation-cover.png";
import canvasCover from "../assets/images/cool-stuff/canvas-cover.jpeg";

import tctcLogo from "../assets/images/cool-stuff/tctc-logo.png";
import tctcFinal from "../assets/images/cool-stuff/tctc-final-design.png";
import tctcSketch from "../assets/images/cool-stuff/tctc-sketch.png";
import tctcMock1 from "../assets/images/cool-stuff/tctc-mock-1.jpeg";
import tctcMock2 from "../assets/images/cool-stuff/tctc-mock-2.jpeg";

import se28Front1 from "../assets/images/cool-stuff/se28-front-design-1.png";
import se28Front2 from "../assets/images/cool-stuff/se28-front-design-2.png";
import se28Front3 from "../assets/images/cool-stuff/se28-front-design-3.png";
import se28Front4 from "../assets/images/cool-stuff/se28-front-design-4.png";
import se28MockFront from "../assets/images/cool-stuff/se28-mock-front.png";
import se28Hoodie from "../assets/images/cool-stuff/se28-hoodie.jpeg";

import canvasFish1 from "../assets/images/cool-stuff/canvas-fish-1.jpeg";
import canvasFish2 from "../assets/images/cool-stuff/canvas-fish-2.jpeg"
import canvasSubway1 from "../assets/images/cool-stuff/canvas-subway-1.jpeg";
import canvasSubway2 from "../assets/images/cool-stuff/canvas-subway-2.jpeg";

export type CoolStuffProject = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  tags: string[];
  coverImage: string;

  images?: string[];

  links?: {
    label: string;
    href: string;
  }[];

  youtubeId?: string;
};

export const coolStuffProjects: CoolStuffProject[] = [
  {
    slug: "tctc-merch",
    title: "designed a NYC track club’s merch!",
    shortDescription:
      "with more merch designs to come out in the future...",
    description:
      "I designed merchandise for TCTC, with more merch concepts planned for the future.",
    tags: ["design", "merch"],
    coverImage: tctcCover,
    images: [

    ],
    links: [
      {
        label: "check out TCTC",
        href: "#",
      },
    ],
  },

  {
    slug: "se28-hoodies",
    title: "designed my program cohort’s hoodies",
    shortDescription:
      "hoodie designs for Waterloo Software Engineering '28.",
    description:
      "I created several hoodie concepts for my cohort, refined the final design, and helped bring it from mockup to the real thing.",
    tags: ["design", "merch"],
    coverImage: se28Cover,
    images: [
      // add real images later
    ],
  },

  {
    slug: "uwaterloo-art-installation",
    title: "made an art installation for UWaterloo",
    shortDescription:
      "an installation project created for the University of Waterloo.",
    description:
      "I created an art installation for UWaterloo and documented the finished piece and process.",
    tags: ["art", "installation"],
    coverImage: installationCover,
    links: [
      {
        label: "official link",
        href: "#",
      },
      {
        label: "instagram post",
        href: "#",
      },
    ],
  },

  {
    slug: "mirror-blind",
    title: "created + published a WEBTOON",
    shortDescription:
      "a one-shot comic called Mirror Blind.",
    description:
      "I made a one-shot comic called Mirror Blind and published it on WEBTOON Canvas.",
    tags: ["comic", "art"],
    coverImage: mirrorBlindCover,
    links: [
      {
        label: "read it",
        href: "#",
      },
    ],
  },

  {
    slug: "animation-music-video",
    title: "created an animation music video",
    shortDescription:
      "my first attempt at making an animated music video.",
    description:
      "This was my first real attempt at animation. It was difficult, but I learned a lot from the process.",
    tags: ["animation", "art"],
    coverImage: animationCover,
    youtubeId: "dQw4w9WgXcQ",
  },

  {
    slug: "canvas-build-art",
    title: "created an animation music video",
    shortDescription:
      "my first attempt at making an animated music video.",
    description:
      "This was my first real attempt at animation. It was difficult, but I learned a lot from the process.",
    tags: ["woodworking", "art"],
    coverImage: canvasCover,
  },
];