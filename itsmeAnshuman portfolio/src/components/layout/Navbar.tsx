import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../../constants/styles";
import { navLinks } from "../../constants";
import { logo, github } from "../../assets";
import { config } from "../../constants/config";

const Navbar = () => {
  const [active, setActive] = useState<string | null>();
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setActive("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    const navbarHighlighter = () => {
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((current) => {
        const sectionId = current.getAttribute("id");
        // @ts-ignore
        const sectionHeight = current.offsetHeight;
        const sectionTop =
          current.getBoundingClientRect().top - sectionHeight * 0.2;

        if (sectionTop < 0 && sectionTop + sectionHeight > 0) {
          setActive(sectionId);
        }
      });
    };

    window.addEventListener("scroll", navbarHighlighter);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", navbarHighlighter);
    };
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } fixed top-0 z-20 flex w-full items-center py-5 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="flex w-full items-center justify-between px-4 sm:px-6 lg:px-10">

        {/* Logo + Name */}
        <Link
          to="/"
          className="flex items-center gap-2 flex-shrink-0 mr-4"
          onClick={() => { window.scrollTo(0, 0); }}
        >
          <img src={logo} alt="logo" className="h-9 w-9 object-contain flex-shrink-0" />
          <p className="cursor-pointer text-[18px] font-bold text-white whitespace-nowrap">
            <span className="sm:hidden">Anshuman Verma</span>
            <span className="hidden sm:inline">{config.html.title}</span>
          </p>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden list-none flex-row gap-10 sm:flex flex-1 justify-center flex-shrink-0">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.id ? "text-white" : "text-secondary"
              } cursor-pointer text-[18px] font-medium hover:text-white`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Desktop right: github icon | linkedin | phone */}
        <div className="hidden sm:flex items-center gap-3 flex-shrink-0">
          <a
            href={`mailto:${config.html.email}`}
            className="text-secondary hover:text-white text-[14px] font-medium"
            title={config.html.email}
          >
            {config.html.email}
          </a>
          <a
            href={config.contactInfo.github}
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-75 transition-opacity"
          >
            <img src={github} alt="github" className="h-5 w-5 object-contain" />
          </a>
          <a
            href={config.contactInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-secondary hover:text-white text-[14px] font-medium whitespace-nowrap"
          >
            LinkedIn
          </a>
          <a
            href={`tel:${config.contactInfo.phone.replace(/\D/g, "")}`}
            className="text-secondary hover:text-white text-[14px] font-medium whitespace-nowrap"
          >
            {config.contactInfo.phone}
          </a>
        </div>

        {/* Mobile hamburger */}
        <div className="flex flex-1 items-center justify-end sm:hidden">
          <div
            className="h-[28px] w-[28px] cursor-pointer flex items-center justify-center"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </div>

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } black-gradient absolute right-0 top-20 z-10 mx-4 my-2 min-w-[200px] w-52 rounded-xl p-4`}
          >
            <ul className="flex flex-1 list-none flex-col items-start justify-end gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins cursor-pointer text-[16px] font-medium ${
                    active === nav.id ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => { setToggle(!toggle); }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              <li className="font-poppins text-[16px] font-medium text-secondary">
                <a href="/Anshuman_Resume_pdf.pdf" download="Anshuman_Resume.pdf">Resume</a>
              </li>
              <li className="mt-2 border-t border-white/10 pt-2 w-full text-[14px] flex flex-col gap-2">
                <a href={`mailto:${config.html.email}`} className="block text-secondary break-words">{config.html.email}</a>
                <a href={config.contactInfo.github} target="_blank" rel="noreferrer" className="block text-secondary">GitHub</a>
                <a href={config.contactInfo.linkedin} target="_blank" rel="noreferrer" className="block text-secondary">LinkedIn</a>
                <a href={`tel:${config.contactInfo.phone.replace(/\D/g, "")}`} className="block text-secondary">{config.contactInfo.phone}</a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
