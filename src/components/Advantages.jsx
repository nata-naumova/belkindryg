import { Icon } from "@iconify/react/dist/iconify.js";
import Title from "./ui/Title";

const Advantages = () => {
  return (
    <section className="pt-[100px] pb-[120px]" id="advantages">
      <div className="container grid lg:grid-cols-2 grid-cols-1 gap-4 items-start">
        <Title title="Мы предлагаем больше, чем просто компьютеры " />
        <ul className="grid md:grid-cols-2 grid-cols-1 gap-4">
          <li className="custom-box bg-accent text-darkBg">
            <Icon icon="la:cubes" width="32" height="32" className="mb-4" />
            <h2 className="text-2xl mb-2">Сборка</h2>
            <p className="text-base">
              Подбор и сборка оптимальной конфигурации для ваших задач
            </p>
          </li>
          <li className="custom-box text-title">
            <Icon icon="la:cogs" width="32" height="32" className="mb-4" />
            <h2 className="text-2xl mb-2">Настройка</h2>
            <p className="text-base">
              Полная настройка и установка всего необходимового, чтобы вы начали
              комфортно пользоваться вашим новым компьютером
            </p>
          </li>
          <li className="custom-box text-title">
            <Icon
              icon="la:certificate"
              width="32"
              height="32"
              className="mb-4"
            />
            <h2 className="text-2xl mb-2">Гарантия</h2>
            <p className="text-base">
              Мы предоставляем гарантию на наши компьютеры в 1 год. По истечении
              действует гарантия от производителя
            </p>
          </li>
          <li className="custom-box text-title">
            <Icon icon="la:car-side" width="32" height="32" className="mb-4" />
            <h2 className="text-2xl  mb-2">Доставка</h2>
            <p className="text-base ">
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
