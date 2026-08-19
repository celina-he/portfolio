import experienceBackground from "../../assets/images/home/dada-mountains.png";
import { experienceItems } from "../../data/experience";

export function Experience() {
  return (
    <section
      className="
        min-h-[1000px] 
        bg-cover 
        bg-center
        px-6 
        py-24
      "
      style={{
        backgroundImage: `url(${experienceBackground})`,
      }}
    >
      <div className="mx-auto max-w-3xl rounded-[30px] border-[3px] border-[#356cff] bg-[#292a31]/95 p-8 text-white shadow-2xl md:p-14">
        <h2 className="text-center text-3xl font-bold">
          Previously worked as a(n)...
        </h2>

        <div className="relative mt-12">
          {/* Timeline line */}
          <div className="absolute bottom-5 left-[31px] top-5 w-px bg-neutral-600 md:left-[39px]" />

          <div className="space-y-8">
            {experienceItems.map((experience) => (
              <article
                key={`${experience.role}-${experience.company}`}
                className="relative flex gap-6"
              >
                {/* Avatar */}
                <div className="relative z-10 shrink-0">
                  <img
                    src={experience.image}
                    alt={`${experience.company} logo`}
                    className="h-16 w-16 rounded-full border-[3px] border-orange-400 bg-white object-cover md:h-20 md:w-20"
                  />
                </div>

                {/* Experience card */}
                <div className="flex-1 rounded-xl border-2 border-neutral-600 bg-[#24252a] p-5">
                  <p className="text-xs font-semibold text-[#527fff]">
                    {experience.date} · {experience.location}
                  </p>

                  <h3 className="mt-2 text-base font-bold">
                    {experience.role} @ {experience.company}
                  </h3>

                  {experience.description && (
                    <p className="mt-2 text-sm text-neutral-400">
                      {experience.description}
                    </p>
                  )}

                  {experience.tags && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {experience.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[#527fff] px-2.5 py-1 text-[10px] text-[#8aa7ff]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
