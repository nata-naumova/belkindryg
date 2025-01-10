import Title from "./ui/Title";

const Testimonials = () => {
  return (
    <section id="testimonials" className="pt-[20px] pb-[120px]">
      <div className="container flex flex-col gap-6">
        <Title title="Отзывы тех, кто выбрал нас" position="center" />
        <div
          className="sw-app frameTes"
          data-app="5861425a3343d075090ddfe02cd7987c"
        ></div>
      </div>
    </section>
  );
};

export default Testimonials;
