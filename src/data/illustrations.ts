import dada from "../assets/images/illustrations/dada-mountains.png";
import wedding from "../assets/images/illustrations/wedding.png";
import sunset from "../assets/images/illustrations/sunset.png";
import rize from "../assets/images/illustrations/rize-csm.png";
import nails from "../assets/images/illustrations/nails-alchemy.png";
import cloud from "../assets/images/illustrations/cloud.png";
import subway from "../assets/images/illustrations/subway.png";
import bouquet from "../assets/images/illustrations/bouquet.png";
import surtr from "../assets/images/illustrations/surtr-arknights.png";
import specter from "../assets/images/illustrations/specter-arknights.png";
import thorns from "../assets/images/illustrations/thorns-arknights.png";
import mostima from "../assets/images/illustrations/mostima-arknights.png";
import iLove from "../assets/images/illustrations/ILOVE.png";
import kiss from "../assets/images/illustrations/kiss.png";
import outOfService from "../assets/images/illustrations/out-of-service.png";
import vi from "../assets/images/illustrations/vi-arcane.png";
import jinx from "../assets/images/illustrations/jinx-arcane.png";
import jamie from "../assets/images/illustrations/jamie.png";
import intoTheWildWIP from "../assets/images/illustrations/botw-wip.png";
import headphones from "../assets/images/illustrations/headphones-bg.png";
import blueBoy from "../assets/images/illustrations/blueboy.png";
import angelina from "../assets/images/illustrations/angelina-arknights.png";
import bloodyQueen from "../assets/images/illustrations/bloodyqueen.png";
import dO from "../assets/images/illustrations/do-exo.png";
import duo from "../assets/images/illustrations/irene-jamie.png";
import jaye from "../assets/images/illustrations/jaye-arknights.png";
import squidGame from "../assets/images/illustrations/squid-game.png";
import suzuya from "../assets/images/illustrations/suzuya-tg.png";
import xiangling from "../assets/images/illustrations/xiangling-genshin.png";
import tradegy from "../assets/images/illustrations/tradegy.png";
import fish from "../assets/images/home/fish.png";
import apple from "../assets/images/illustrations/apple-of-my-eye.png";
import ceobe from "../assets/images/illustrations/ceobe-arknights.png";
import earrings from "../assets/images/illustrations/earrings.png";
import lappland from "../assets/images/illustrations/lappland-arknights.png";
import mouseDoodle from "../assets/images/illustrations/mouse-doodle.png";
import w from "../assets/images/illustrations/w-arknights.png";
import w2 from "../assets/images/illustrations/w2-arknights.png";
import witchSummer from "../assets/images/illustrations/witch-summer.png";

export type Illustration = {
  id: number;
  title: string;
  image?: string;
  alt: string;
  placeholderAspectRatio?: string;
};

export const illustrations: Illustration[] = [
  {
    id: 1,
    title: "DaDa Mountains",
    image: dada,
    alt: "DaDa Mountains, Witch Hat Atelier",
  },
  {
    id: 4,
    title: "Ka Boom",
    image: rize,
    alt: "Rize, Chainsaw Man",  },
  {
    id: 5,
    title: "Baptism by Punishment",
    image: nails,
    alt: "Nails, Alchemy Stars",
  },
  {
    id: 6,
    title: "Cloud",
    image: cloud,
    alt: "Cloud, Original",
  },
  {
    id: 7,
    title: "Subway",
    image: subway,
    alt: "Subway, Original",
  },
  {
    id: 8,
    title: "Bouquet",
    image: bouquet,
    alt: "Bouquet, Original",
  },
  {
    id: 9,
    title: "Surtr",
    image: surtr,
    alt: "Surtr, Arknights",
  },
  {
    id: 10,
    title: "Specter",
    image: specter,
    alt: "Specter, Arknights",
  },
  {
    id: 35,
    title: "Lappland",
    image: lappland,
    alt: "Lappland, Arknights",
  },
  {
    id: 24,
    title: "D.O.",
    image: dO,
    alt: "D.O., EXO",
  },
  {
    id: 31,
    title: "Tradegy",
    image: tradegy,
    alt: "Tradegy, Original",
  },
  {
    id: 37,
    title: "W",
    image: w,
    alt: "W, Arknights",
  },
  {
    id: 2,
    title: "Wedding",
    image: wedding,
    alt: "Wedding, Original",
  },
  {
    id: 3,
    title: "Sunset",
    image: sunset,
    alt: "Sunset, Original",
  },
  {
    id: 13,
    title: "I LOVE",
    image: iLove,
    alt: "I LOVE, Original",
  },
  {
    id: 14,
    title: "Kiss",
    image: kiss,
    alt: "Kiss, Original",
  },
  {
    id: 15,
    title: "Out of Service",
    image: outOfService,
    alt: "Out of Service, Original",
  },
  {
    id: 20,
    title: "Headphones",
    image: headphones,
    alt: "Headphones, Original",
  },
  {
    id: 12,
    title: "Mostima",
    image: mostima,
    alt: "Mostima, Arknights",
  },
  {
    id: 26,
    title: "Fish",
    image: fish,
    alt: "Fish, Original",
  },
  {
    id: 16,
    title: "Vi",
    image: vi,
    alt: "Vi, Arcane",
  },
  {
    id: 17,
    title: "Jinx",
    image: jinx,
    alt: "Jinx, Arcane",
  },
  {
    id: 18,
    title: "Jamie",
    image: jamie,
    alt: "Jamie, Original",
  },
  {
    id: 19,
    title: "Into the Wil WIP",
    image: intoTheWildWIP,
    alt: "Link, Breath of the Wild, Legend of Zelda",
  },
  {
    id: 23,
    title: "Bloody Queen",
    image: bloodyQueen,
    alt: "Bloody Queen, Elsword",
  },
  {
    id: 25,
    title: "Duo",
    image: duo,
    alt: "Irene & Jamie, Original",
  },
  {
    id: 28,
    title: "Thanks for Playing With Me",
    image: squidGame,
    alt: "067 & 240, Squid Game",
  },
  {
    id: 11,
    title: "Thorns",
    image: thorns,
    alt: "Thorns, Arknights",
  },
  {
    id: 32,
    title: "Apple of my Eye",
    image: apple,
    alt: "Apple of my Eye, Original",
  },
  {
    id: 33,
    title: "Ceobe",
    image: ceobe,
    alt: "Ceobe, Arknights",
  },
  {
    id: 22,
    title: "Angelina",
    image: angelina,
    alt: "Angelina, Arknights",
  },
  {
    id: 29,
    title: "Suzuya",
    image: suzuya,
    alt: "Suzuya, Toykyo Ghoul",
  },
  {
    id: 30,
    title: "Xiangling",
    image: xiangling,
    alt: "Xiangling, Genshin Impact",
  },
  {
    id: 34,
    title: "Earrings",
    image: earrings,
    alt: "Earrings, Original",
  },
  {
    id: 36,
    title: "Eye",
    image: mouseDoodle,
    alt: "Eye, Original",
  },
  {
    id: 38,
    title: "W v.2",
    image: w2,
    alt: "W v.2, Arknights",
  },
  {
    id: 39,
    title: "Witch in Summer",
    image: witchSummer,
    alt: "Witch in Summer, Original",
  },
  {
    id: 21,
    title: "Blue Boy",
    image: blueBoy,
    alt: "Blue Boy, Original",
  },
  {
    id: 27,
    title: "Jaye",
    image: jaye,
    alt: "Jaye, Arknights",
  },
];
