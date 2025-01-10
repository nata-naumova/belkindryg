import React from "react";
import heroBg from "../images/fon-top1.png";

const First = () => {
  return (
    <section className="md:mt-24 mt-6">
      <div className="container flex md:flex-row flex-col gap-4 justify-between">
        <div className="max-w-[600px]">
          <h1 className="text-title uppercase leading-normal mb-4 xl:text-6xl lg:text-5xl text-3xl">
            Сборка компьютеров для игр и работы
          </h1>
          <p className="lg:text-2xl text-lg text-title md:mb-10 mb-6 leading-normal">
            поможем найти идеальный компьютер для ваших задач
          </p>
        </div>
        <img
          src={heroBg}
          alt="Подберем и соберем оптимальную конфигурацию для ваших задач"
          className="md:w-1/2 w-full max-h-[500px] h-full object-contain"
        />
      </div>
    </section>
  );
};

export default First;
