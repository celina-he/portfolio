import { Link, useParams } from "react-router-dom";
import { coolStuffProjects } from "../../data/coolStuff";

export function CoolStuffDetail() {
  const { slug } = useParams();

  const project = coolStuffProjects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return (
      <main className="min-h-screen px-8 py-20">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-4xl font-bold">
            project not found
          </h1>

          <Link
            to="/cool-stuff"
            className="mt-6 inline-block text-blue-500 underline"
          >
            ← back to cool stuff
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-white px-6 py-16 md:px-10">
      <article className="mx-auto max-w-5xl">
        <Link
          to="/cool-stuff"
          className="text-sm text-neutral-500 transition hover:text-blue-500"
        >
          ← cool stuff
        </Link>

        {/* Header */}
        <header className="mt-8">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            {project.title}
          </h1>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-700">
            {project.description}
          </p>
        </header>

        {/* Links */}
        {project.links && project.links.length > 0 && (
          <section className="mt-14">

            <div className="mt-5 flex flex-wrap gap-4">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    rounded-full
                    border
                    border-neutral-300
                    px-5
                    py-2
                    text-sm
                    transition
                    hover:border-blue-500
                    hover:text-blue-500
                  "
                >
                  ↗ {link.label}
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Extra photos */}
        {project.images && project.images.length > 0 && (
          <section className="mt-14">
            <h2 className="text-3xl font-bold">
              gallery
            </h2>

            <div className="mt-6 columns-1 gap-4 sm:columns-2">
              {project.images.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt={`${project.title} image ${index + 1}`}
                  className="mb-4 h-auto w-full break-inside-avoid rounded-xl"
                />
              ))}
            </div>
          </section>
        )}

        {/* YouTube */}
        {project.youtubeId && (
          <section className="mt-14">

            <div className="mt-6 aspect-video overflow-hidden rounded-2xl">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${project.youtubeId}`}
                title={`${project.title} video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </section>
        )}
      </article>
    </main>
  );
}
