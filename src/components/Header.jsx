import { useEffect, useState } from "react";
import { LINKS, SOCIALS } from "../constants";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Icon } from "@iconify/react/dist/iconify.js";

import Logotype from "./ui/Logotype";
import GetButton from "./GetButton";

const perspective = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [animateHeader, setAnimateHeader] = useState(false);

  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 140) {
        setAnimateHeader(true);
      } else setAnimateHeader(false);
    };
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <header
      className={`sticky inset-0 ${
        animateHeader ? "bg-darkBg shadow-xl" : "bg-transparent shadow-none"
      } py-4 z-[999] transition-all duration-500 `}
    >
      <div className="container relative">
        <div className="flex items-center justify-between gap-2">
          <Logotype />

          <nav className="ml-auto lg:flex hidden items-center gap-10 justify-between">
            <ul className="flex items-center gap-10">
              {LINKS.map((link, i) => {
                return (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-title text-lg hover:text-accent hover:transition-colors ease-in duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <GetButton variant="primary">Свяжитесь с нами</GetButton>
          </nav>
          <div className="relative lg:hidden block">
            <button
              className={`md:w-12 w-10 md:h-12 h-10 flex items-center justify-center p-2 rounded-full relative z-10 border-2  ${
                isActive
                  ? "bg-darkBg text-title border-darkBg"
                  : "bg-title text-darkBg border-title"
              }`}
              onClick={() => setIsActive(!isActive)}
            >
              {isActive ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </div>
      {isActive && (
        <motion.div
          variants={perspective}
          animate="enter"
          exit="exit"
          initial="initial"
          className="w-full h-screen bg-accent absolute inset-0 pt-14 pb-10 px-10"
        >
          <div className="flex flex-col gap-6 h-full justify-between">
            <a
              href="#"
              className="text-darkBg text-3xl"
              onClick={() => setIsActive(!isActive)}
            >
              Главная
            </a>
            {LINKS.map((link, i) => {
              return (
                <a
                  key={i}
                  href={link.href}
                  className="text-darkBg text-3xl"
                  onClick={() => setIsActive(!isActive)}
                >
                  {link.label}
                </a>
              );
            })}
            <div className="flex gap-x-20 gap-y-6 flex-wrap items-center justify-start mt-auto">
              {SOCIALS &&
                SOCIALS.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    className="text-darkBg flex items-center text-xl gap-4"
                  >
                    <Icon icon={link.icon} width={24} />
                    {link.name}
                  </a>
                ))}
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
