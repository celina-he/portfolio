import type { Project } from "../../data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const href = project.liveUrl ?? project.githubUrl;

  if (!href) return null;

  return (
    <article className="overflow-hidden rounded-2xl bg-white">
    <div className="overflow-hidden rounded-2xl bg-neutral-200">
        <img
        src={project.image}
        alt={`${project.title} preview`}
        className="
            aspect-[4/3]
            w-full
            object-cover
            transition
            duration-300
            group-hover:scale-[1.03]
        "
        loading="lazy"
        decoding="async"
        />
    </div>

    <div className="py-5">
        <h2 className="text-2xl font-semibold text-neutral-900">
        {project.title}
        </h2>

        <div className="mt-3 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
            <span
            key={technology}
            className="
                rounded-full
                bg-neutral-100
                px-3
                py-1
                text-xs
                text-neutral-600
            "
            >
            {technology}
            </span>
        ))}
        </div>

        <p className="mt-5 text-sm leading-6 text-neutral-600">
        {project.description}
        </p>

        <div className="mt-5 flex gap-3">
        {project.liveUrl && (
            <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="text-md text-blue-500 hover:underline"
            >
            live site ↗
            </a>
        )}

        {project.githubUrl && (
            <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="text-md text-blue-500 hover:underline"
            >
            github ↗
            </a>
        )}
        </div>
    </div>
    </article>
  );
}
