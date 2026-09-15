import cafeHopperImage from '../assets/images/projects/cafehopper.png';
import foodSavourImage from '../assets/images/projects/foodsavour.png';
import yumiiheImage from '../assets/images/projects/yumiihe.png';
import portfolioImage from '../assets/images/projects/portfolio.png';

export type Project = {
  id: number;
  title: string;
  description: string;

  // only used for filtering
  filterTags: string[];

  // displayed on card
  technologies: string[];

  image: string;

  githubUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "CaféHopper",
    description:
      "A social networking web app for avid cafe lovers. Make a profile, add your friends, and rate your favourite coffee spots. View your Blend to see top-rated spots among your circle.",

    filterTags: ["webdev"],

    technologies: [
      "React",
      "PostgreSQL",
      "Firebase",
      "Google Maps Places API",
    ],

    image: cafeHopperImage,

    githubUrl: "https://github.com/trinity-y/cafe-hopper",
  },

  {
    id: 2,
    title: "FoodSavour",
    description:
      "A web app to track nutrition information and expiry dates for food your kitchen. Get recipe suggestions based on what's left in your pantry. Used a Raspberry Pi Zero W as a barcode scanner.",

    filterTags: ["webdev", "ai", "hardware"],

    technologies: [
      "JavaScript",
      "Firebase",
      "Python",
      "Raspberry Pi",
      "Edamam API",
      "OpenFoodFacts API",
      "OpenAI API",
    ],

    image: foodSavourImage,

    liveUrl: "https://sehgal-arjun.github.io/foodsavour/index.html",
  },

  {
    id: 3,
    title: "Personal Website",
    description:
      "This website! Built to show my projects, illustrations, and side quests. ",

    filterTags: ["webdev"],

    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
    ],

    image: portfolioImage,

    githubUrl: "https://github.com/celina-he/portfolio",
    liveUrl: "https://www.celinahe.com/",
  },

  {
    id: 4,
    title: "Artist Portfolio (old)",
    description:
      "My old janky artist portfolio website, built on basically pure HTML/CSS and held together soley with my hopes and dreams.",

    filterTags: ["webdev"],

    technologies: [
      "JavaScript",
      "HTML/CSS",
    ],

    image: yumiiheImage,

    githubUrl: "https://github.com/celina-he/Yumiihe",
    liveUrl: "https://celina-he.github.io/Yumiihe/",
  },
];
