export function CommissionCta() {
  return (
    <section className="bg-[#f7f8ff] px-6 py-6 md:px-6">
      <div className="grid min-h-[250px] border-2 border-[#4e7cff] md:grid-cols-2">
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
              href="https://yumicommissions.carrd.co/#"
              className="mt-5 inline-flex items-center gap-2 text-sm text-neutral-700 hover:text-[#356cff]"
            >
              <span>↗</span>
              Commission Info
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}