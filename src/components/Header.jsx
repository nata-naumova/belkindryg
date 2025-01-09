import { useState } from "react";

import Logotype from "./ui/Logotype";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { LINKS, SOCIALS } from "../constants";
import ButtonCustom from "./ButtonCustom";

const variants = {
  open: {
    width: "400px",
    height: "fit-content",
    top: "-10px",
    right: "-10px",
    left: "auto",
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: "10px",
    height: "10px",
    top: "15px",
    right: "15px",
    left: "auto",
    transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
  },
};

const perspective = {
  initial: {
    opacity: 0,
  },
  enter: (i) => ({
    opacity: 1,
    transition: { delay: 0.5 + i * 0.1 },
  }),
  exit: {
    opacity: 0,
  },
};

const socials = {
  initial: {
    opacity: 0,
  },
  enter: (i) => ({
    opacity: 1,
    transition: { delay: 1 + i * 0.1 },
  }),
  exit: {
    opacity: 0,
  },
};

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <header className="py-4 fixed top-0 left-0 right-0 z-[999]">
      <div className="container relative">
        <div className="flex items-center justify-between md:gap-10 gap-2">
          <Logotype />
          <div className="bg-title/5 border border-title/10 p-2 rounded-3xl flex items-center gap-2 backdrop-blur-xl">
            <nav className="mx-6 lg:block hidden">
              <ul className="flex items-center gap-10">
                {LINKS.map((link, i) => {
                  return (
                    <li key={i}>
                      <a href={link.href} className="text-title text-lg">
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <ButtonCustom name="Свяжитесь с нами" link="#" />
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
              <motion.div
                className="w-10 h-10 bg-accent rounded-3xl absolute"
                variants={variants}
                animate={isActive ? "open" : "closed"}
                initial="closed"
              >
                <AnimatePresence>
                  {isActive && (
                    <>
                      <div className="h-full pt-14 pb-10 px-10">
                        <div className="flex flex-col gap-6 h-full">
                          {LINKS.map((link, i) => {
                            return (
                              <motion.div
                                key={i}
                                custom={i}
                                variants={perspective}
                                animate="enter"
                                exit="exit"
                                initial="initial"
                              >
                                <a
                                  href={link.href}
                                  className="text-title text-3xl"
                                >
                                  {link.label}
                                </a>
                              </motion.div>
                            );
                          })}
                          <div className="flex gap-4 mt-10">
                            {SOCIALS &&
                              SOCIALS.map((link, i) => (
                                <motion.div
                                  key={i}
                                  custom={i}
                                  variants={socials}
                                  animate="enter"
                                  exit="exit"
                                  initial="initial"
                                >
                                  <a
                                    key={i}
                                    href={link.href}
                                    target="_blank"
                                    className="w-14 h-14 rounded-full text-title bg-white/15 flex items-center justify-center col-span-3"
                                  >
                                    <Icon icon={link.icon} width={24} />
                                  </a>
                                </motion.div>
                              ))}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
