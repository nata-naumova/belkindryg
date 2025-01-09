import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const NavBar = ({ links, scrollToSection, activeSection }) => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <nav className="">
      <ul
        onMouseLeave={() => {
          setPosition((pv) => ({
            ...pv,
            opacity: 0,
          }));
        }}
        className="flex items-center gap-2"
      >
        {links &&
          links.map((item, index) => (
            <Tab
              key={index}
              setPosition={setPosition}
              scrollToSection={scrollToSection}
              item={item}
              activeSection={activeSection}
            />
          ))}
        <Cursor position={position} />
      </ul>
    </nav>
  );
};

export default NavBar;

const Tab = ({ setPosition, scrollToSection, item, activeSection }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      onClick={() => scrollToSection(item.href)}
      className={`relative z-10 block cursor-pointer px-2 py-1 text-sm text-white rounded-full transition-colors duration-100 ease-in-out ${
        activeSection === item.href ? " bg-white/15" : "bg-transparent"
      }`}
    >
      {item.label}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-white/15"
    />
  );
};
