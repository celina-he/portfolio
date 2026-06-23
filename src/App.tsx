function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-emerald-400">
          Software Engineering Student
        </p>

        <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
          Hi, I’m Celina.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          What's up!
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-emerald-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-emerald-300"
          >
            View my projects
          </a>

          <a
            href="#contact"
            className="rounded-lg border border-slate-700 px-5 py-3 font-semibold transition hover:border-slate-400"
          >
            Contact me
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;