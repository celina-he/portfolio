import { illustrations } from "../../data/illustrations";
import { IllustrationCard } from "./IllustrationCard";

export function IllustrationGallery() {
  return (
    <section className="bg-[#f7f8ff] px-4 py-12 md:px-8 lg:px-12">
      <div
        className="
          mx-auto
          max-w-[1400px]
          columns-2
          gap-4
          md:columns-3
          2xl:columns-4
        "
      >
        {illustrations.map((illustration) => (
          <IllustrationCard
            key={illustration.id}
            illustration={illustration}
          />
        ))}
      </div>
    </section>
  );
}