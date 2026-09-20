import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-[#171719] px-6 py-6 text-[#EFF0F4] border-t-3 border-[#FF9532]">
      <div className="mx-auto flex max-w-6xl flex-col items-center text-center gap-3 text-xs font-light font-mono">

        <div className="flex gap-5 text-2xl items-center justify-center">
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

        <p>© {new Date().getFullYear()} Celina He</p>
      </div>
    </footer>
  );
}