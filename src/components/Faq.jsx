import React, { useState } from "react";
import Title from "./ui/Title";
import { Icon } from "@iconify/react/dist/iconify.js";
import { FAQ } from "../constants";

const Faq = () => {
  const [selected, setSelected] = useState(1);

  const toggleExpand = (id) => {
    setSelected(selected === id ? null : id);
  };

  return (
    <section id="faq">
      <div className="container">
        <Title title="Часто задаваемые вопросы" />
        <ul className="grid lg:grid-cols-3 grid-cols-1 gap-4 mb-4">
          {FAQ &&
            FAQ.map((item, index) => (
              <li key={index} className="custom-box">
                <h3 className="text-xl font-bold text-title mb-4">
                  {item.title}
                </h3>
                <span className="text-title text-lg">{item.desc}</span>
              </li>
            ))}
        </ul>
        <div className="flex flex-col gap-4">
          {FAQ &&
            FAQ.map((item, index) => (
              <button
                type="button"
                key={index}
                className="custom-box"
                onClick={() => toggleExpand(item.id)}
              >
                <div className="flex items-center gap-4 justify-between">
                  <h2 className="text-xl font-bold text-title">{item.title}</h2>
                  <span className="text-title">
                    {selected === item.id ? (
                      <Icon icon="gravity-ui:arrow-up" />
                    ) : (
                      <Icon icon="gravity-ui:arrow-down" />
                    )}
                  </span>
                </div>
                {selected === item.id ? (
                  <p className="text-title text-lg text-left mt-4">{item.desc}</p>
                ) : (
                  ""
                )}
              </button>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
