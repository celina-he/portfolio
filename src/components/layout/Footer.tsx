import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-[#171719] px-6 py-8 text-[#EFF0F4]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm md:flex-row font-mono">
        <p>© {new Date().getFullYear()} Celina He</p>

        <div className="flex gap-5 text-xl">
          <a
            href="https://www.instagram.com/yumiihe/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#5887FF]"
          >
            <FaInstagram />
          </a>

          <a
            href="mailto:celinahe@gmail.com"
            className="hover:text-[#5887FF]"
          >
            <FaEnvelope />
          </a>

          <a href="https://github.com/celina-he" className="hover:text-[#5887FF]">
            <FaGithub />
          </a>

          <a href="http://linkedin.com/in/celina-he-1340b6244/" className="hover:text-[#5887FF]">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}