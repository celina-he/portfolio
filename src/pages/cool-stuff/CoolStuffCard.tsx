import { Link } from "react-router-dom";
import type { CoolStuffProject } from "../../data/coolStuff";

type CoolStuffCardProps = {
  project: CoolStuffProject;
};

export function CoolStuffCard({ project }: CoolStuffCardProps) {
  return (
    <Link
      to={`/cool-stuff/${project.slug}`}
      className="group block"
    >
      <article className="overflow-hidden rounded-2xl bg-white">
        <div className="overflow-hidden rounded-2xl bg-neutral-200">
          <img
            src={project.coverImage}
            alt={project.title}
            className="
              aspect-[4/3]
              w-full
              object-cover
              transition
              duration-300
              group-hover:scale-[1.03]
            "
          />
        </div>

        <div className="py-4">
          <h2 className="text-xl font-semibold text-neutral-900">
            {project.title}
          </h2>

          <p className="mt-2 text-sm leading-6 text-neutral-500">
            {project.shortDescription}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
