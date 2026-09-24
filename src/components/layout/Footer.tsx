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
            className="group hover:text-[#5887FF]"
          >
            <FaInstagram className="group-hover:scale-120 transition-transform duration-200" />
          </a>

          <a
            href="mailto:celinahe@gmail.com"
            className="group hover:text-[#5887FF]"
          >
            <FaEnvelope className="group-hover:scale-120 transition-transform duration-200" />
          </a>

          <a href="https://github.com/celina-he"
            target="_blank"
            rel="noreferrer"
            className="group hover:text-[#5887FF]"
          >
            <FaGithub className="group-hover:scale-120 transition-transform duration-200" />
          </a>

          <a href="http://linkedin.com/in/celina-he-1340b6244/" 
            target="_blank"
            rel="noreferrer"
            className="group hover:text-[#5887FF]"
          >
            <FaLinkedin className="group-hover:scale-120 transition-transform duration-200" />
          </a>
        </div>

        <p>© {new Date().getFullYear()} Celina He</p>
      </div>
    </footer>
  );
}