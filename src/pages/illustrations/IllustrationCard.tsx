import type { Illustration } from "../../data/illustrations";

type IllustrationCardProps = {
  illustration: Illustration;
};

export function IllustrationCard({
  illustration,
}: IllustrationCardProps) {
  return (
    <article className="group mb-4 break-inside-avoid">
      <div className="relative overflow-hidden rounded-xl bg-neutral-200">
        {illustration.image ? (
          <img
            src={illustration.image}
            alt={illustration.alt}
            className="
              block
              h-auto
              w-full
              transition
              duration-300
              group-hover:scale-[1.02]
            "
          />
        ) : (
          <div
            className={`
              ${illustration.placeholderAspectRatio}
              flex
              w-full
              items-center
              justify-center
              bg-neutral-200
              text-sm
              text-neutral-400
            `}
          >
            image placeholder
          </div>
        )}

        {/* Hover overlay */}
        <div
          className="
            absolute
            inset-0
            flex
            items-end
            bg-black/0
            p-5
            transition
            duration-300
            group-hover:bg-black/30
          "
        >
          <p
            className="
              translate-y-2
              text-md
              font-medium
              text-white
              opacity-0
              transition
              duration-300
              group-hover:translate-y-0
              group-hover:opacity-100
              font-mono
            "
          >
            {illustration.title}
          </p>
        </div>
      </div>
    </article>
  );
}