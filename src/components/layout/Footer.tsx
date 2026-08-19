export function Footer() {
  return (
    <footer className="bg-[#171719] px-6 py-8 text-neutral-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-xs md:flex-row font-mono">
        <p>© {new Date().getFullYear()} Celina He</p>

        <div className="flex gap-5">
          <a
            href="https://www.instagram.com/yumiihe/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            insta
          </a>

          <a
            href="mailto:celinahe@gmail.com"
            className="hover:text-white"
          >
            email
          </a>

          <a href="https://github.com/celina-he" className="hover:text-white">
            github
          </a>

          <a href="http://linkedin.com/in/celina-he-1340b6244/" className="hover:text-white">
            linkedin
          </a>
        </div>
      </div>
    </footer>
  );
}