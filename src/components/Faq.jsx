import React, { useState } from "react";
import Title from "./ui/Title";

import { FAQ } from "../constants";

const Faq = () => {
  const [selected, setSelected] = useState(1);

  const toggleExpand = (id) => {
    setSelected(selected === id ? null : id);
  };

  return (
    <section id="faq" className="pt-[20px] pb-[120px]">
      <div className="container flex flex-col gap-6">
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
      </div>
    </section>
  );
};

export default Faq;
