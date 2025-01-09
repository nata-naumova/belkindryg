import React from "react";
import ButtonCustom from "./ButtonCustom";
import heroBg from "../images/fon-top1.png";

const First = () => {
  return (
    <section className="h-screen">
      <div className="container flex items-center justify-between h-full lg:gap-20 gap-6 md:flex-row flex-col">
        <div className="w-full md:mt-0 mt-[120px]">
          <h1 className="text-title uppercase leading-normal mb-4 xl:text-6xl lg:text-5xl text-3xl">
            Сборка компьютеров для игр и работы
          </h1>
          <p className="lg:text-2xl text-lg text-title md:mb-10 mb-6 leading-normal">
            поможем найти идеальный компьютер <br /> для ваших задач
          </p>
          <div className="flex items-center gap-4">
            <ButtonCustom
              name="Подобрать пк"
              type="button"
              handleClick="null"
            />
          </div>
        </div>
        <img
          src={heroBg}
          alt="Подберем и соберем оптимальную конфигурацию для ваших задач"
          className="md:w-1/2 w-3/4 max-h-[500px] h-full object-contain"
        />
      </div>
    </section>
  );
};

export default First;
