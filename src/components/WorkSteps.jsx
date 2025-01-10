import Title from "./ui/Title";

const WorkSteps = () => {
  return (
    <section id="workSteps" className="pb-[120px]">
      <div className="container">
        <Title
          title="Всего 3 шага отделяют вас от компьютера мечты"
          position="center"
        />
        <ul className="custom-counter grid md:grid-cols-3 grid-cols-1 gap-6 mt-20">
          <li className="text-2xl text-title text-center">
            Заявка
            <p className="text-lg mt-4 font-normal">
              Вы оставляете
              <a
                href="#footer"
                className="text-accent"
              >
                {" "}
                заявку на сайте.{" "}
              </a>
              После чего наш
              <a
                href="https://wa.link/tsee1v"
                className="text-accent"
                target="_blank"
              >
                {" "}
                менеджер{" "}
              </a>
              свяжется с вами для уточнения деталей и пожеланий
            </p>
          </li>

          <li className="text-2xl text-title text-center">
            Обсуждение деталей
            <p className="text-lg mt-4 font-normal">
              Подробно обсудим ход выполнения сборки и подберем необходимые
              комплектующие под ваш запрос
            </p>
          </li>
          <li className="text-2xl text-title text-center">
            Сборка и доставка
            <p className="text-lg mt-4 font-normal">
              Соберем ПК вашей мечты, сделаем все необходимые тесты , бережно
              упакуем и доставим
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WorkSteps;
