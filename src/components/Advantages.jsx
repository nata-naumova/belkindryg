import { Box, Package, Settings, ShieldCheck } from "lucide-react";
import Title from "./ui/Title";

const Advantages = () => {
  return (
    <section className="" id="advantages">
      <div className="container">
        <Title title="Мы предлагаем больше, чем просто компьютеры " />
        <ul className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
          <li className="custom-box">
            <h2 className="text-xl text-title mb-4 font-bold">Сборка</h2>
            <p className="text-lg text-title">
              Подбор и сборка оптимальной конфигурации для ваших задач
            </p>
          </li>
          <li className="custom-box">
            <h2 className="text-xl text-title mb-4 font-bold">Настройка</h2>
            <p className="text-lg text-title">
              Полная настройка и установка всего необходимового, чтобы вы начали
              комфортно пользоваться вашим новым компьютером
            </p>
          </li>
          <li className="custom-box">
            <h2 className="text-xl text-title mb-4 font-bold">Гарантия</h2>
            <p className="text-lg text-title">
              Мы предоставляем гарантию на наши компьютеры в 1 год. По истечении
              действует гарантия от производителя
            </p>
          </li>
          <li className="custom-box">
            <h2 className="text-xl text-title mb-4 font-bold">Доставка</h2>
            <p className="text-lg text-title">
              Бережно доставим ПК по всей территории РФ
            </p>
          </li>
        </ul>
      </div>
      {/* <Tape /> */}
    </section>
  );
};

export default Advantages;
