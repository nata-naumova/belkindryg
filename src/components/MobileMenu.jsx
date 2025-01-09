import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";

const variants = {
  open: {
    with: 480,
    height: 650,
  },
  closed: {
    with: 100,
    height: 40,
  },
};

const MobileMenu = ({ isActive, toggleNavbar }) => {
  return (
    <div className="absolute top-0 right-0">
      <motion.div
        className="w-[480px] h-[650px] bg-accent rounded-[35px] p-2"
        variants={variants}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      >
        <span className="text-darkBg text-xl">Меню</span>

        <ul>
          <li
            className="overflow-hidden cursor-pointer"
            // onClick={() => {
            //   scrollToSection(item.href);
            //   setMobileDrawerOpen(false);
            // }}
          >
            <div
            // className={`flex items-center gap-4 text-5xl ${
            //   activeSection === item.href ? "text-accent" : "text-darkBg"
            // }`}
            >
              {/* {item.label} */}
              test
            </div>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default MobileMenu;
