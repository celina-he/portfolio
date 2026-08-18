export function CommissionCta() {
  return (
    <section className="bg-[#f7f8ff] px-6 py-8 md:px-8">
      <div className="grid min-h-[210px] border-2 border-[#4e7cff] md:grid-cols-2">
        {/* Placeholder visual area */}
        <div className="hidden md:block" />

        <div className="flex items-center justify-center px-8 py-10">
          <div>
            <h2 className="text-3xl font-bold leading-tight text-[#4e7cff]">
              Like my art?
              <br />
              I do commissions.
            </h2>

            <a
              href="#"
              className="mt-5 inline-flex items-center gap-2 text-sm text-neutral-700 hover:text-[#356cff]"
            >
              <span>↗</span>
              Commission Info
            </a>

            <p className="mt-3 text-xs italic text-neutral-400">
              commission page coming soon
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}