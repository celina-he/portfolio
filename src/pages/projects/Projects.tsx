import { useMemo, useState } from "react";

import { projects } from "../../data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const [selectedTag, setSelectedTag] = useState("all");

  const filterTags = useMemo(() => {
    const tags = projects.flatMap((project) => project.filterTags);

    return ["all", ...Array.from(new Set(tags))];
  }, []);

  const filteredProjects =
    selectedTag === "all"
      ? projects
      : projects.filter((project) =>
          project.filterTags.includes(selectedTag)
        );

  return (
    <>
      {/* Banner */}
      <section className="bg-[#315eff] px-8 py-16 text-white md:py-20">
        <div className="mx-auto max-w-[1400px]">
          <p className="font-mono text-sm tracking-widest text-white/70">
            DEVELOPMENT / PROJECTS
          </p>

          <h1 className="mt-3 text-5xl font-bold tracking-tight md:text-7xl">
            projects
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-white/80 md:text-lg">
            things i’ve built, broken, rebuilt, and somehow gotten working.
          </p>
        </div>
      </section>

      {/* Main project section */}
      <main className="bg-white px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="text-3xl font-bold md:text-4xl">
            what i’ve built
          </h2>

          {/* Filter buttons */}
          <div className="mt-6 flex flex-wrap gap-3">
            {filterTags.map((tag) => {
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
                      : "bg-neutral-100 text-neutral-800 hover:bg-neutral-200",
                  ].join(" ")}
                >
                  {tag}
                </button>
              );
            })}
          </div>

          {/* Project cards */}
          <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>

          {/* Other dev projects */}
          <section className="mt-24 border-t border-neutral-200 pt-12">
            <h2 className="text-3xl font-semibold">
              Other Dev Projects
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600">
              That’s it for now, but there are some other projects I’m
              working on in the background that I hope to release soon 👀.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}