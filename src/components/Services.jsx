import { useState } from "react";

import List from "./ui/ServiceItem";
import Title from "./ui/Title";

const Services = () => {
  return (
    <section id="services" className="pt-[100px] pb-[120px]">
      <div className="container flex flex-col gap-10">
        <Title title="Выгодные решения под любой бюджет" position="center" />
        <List />
      </div>
    </section>
  );
};

export default Services;
