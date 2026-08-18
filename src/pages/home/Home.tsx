import { Hero } from "./Hero";
import { Intro } from "./Intro";
import { CurrentStuff } from "./CurrentStuff";
import { CommissionCta } from "./CommissionCta";
import { Experience } from "./Experience";

export function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <CurrentStuff />
      <CommissionCta />
      <Experience />
    </>
  );
}