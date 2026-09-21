import { useMemo, useState } from "react";
import { coolStuffProjects } from "../../data/coolStuff";
import { CoolStuffCard } from "./CoolStuffCard";

export function CoolStuff() {
  const [selectedTag, setSelectedTag] = useState("all");

  const tags = useMemo(() => {
    const allTags = coolStuffProjects.flatMap(
      (project) => project.tags
    );

    return ["all", ...Array.from(new Set(allTags))];
  }, []);

  const filteredProjects =
    selectedTag === "all"
      ? coolStuffProjects
      : coolStuffProjects.filter((project) =>
          project.tags.includes(selectedTag)
        );

  return (
    <>
      {/* Banner */}
      <section className="bg-[#315eff] px-8 py-16 text-white md:py-20">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-sm tracking-widest text-white/70">
            SIDE QUESTS
          </p>

          <h1 className="mt-3 text-5xl font-bold tracking-tight md:text-7xl">
            cool stuff
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-white/80 md:text-lg">
            some side quests i’ve done that i can’t seem to find a good label for.
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="bg-white px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-[1400px]">

          {/* Filter heading */}
          <h2 className="text-3xl font-bold md:text-4xl">
            what i’ve been making. for the bit.
          </h2>

          {/* Tags */}
          <div className="mt-6 flex flex-wrap gap-3">
            {tags.map((tag) => {
              const isActive = selectedTag === tag;

              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setSelectedTag(tag)}
                  className={[
                    "rounded-full px-5 py-2 text-sm transition",
                    isActive
                      ? "bg-[#315eff] text-white"
                      : "bg-neutral-100 text-neutral-800 hover:bg-[#DCE2F7] hover:text-[#315eff]",
                  ].join(" ")}
                >
                  {tag}
                </button>
              );
            })}
          </div>

          {/* Project grid */}
          <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <CoolStuffCard
                key={project.slug}
                project={project}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
