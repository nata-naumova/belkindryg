import { useState } from "react";

import List from "./ui/ServiceItem";
import Title from "./ui/Title";
import ModalPc from "./ModalPc";

const Services = () => {
  const [currentCart, setCurrentCart] = useState({});
  const [open, setOpen] = useState(false);

  const handleClickCart = (cartId) => {
    setOpen(true);
    setCurrentCart(cartId);
    document.body.style.overflow = "hidden";
  };

  const onClose = () => {
    setOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="services" className="">
      <div className="container">
        <Title title="Выгодные решения под любой бюджет" />
        <List handleClickCart={handleClickCart} />
        <ModalPc open={open} onClose={onClose} product={currentCart} />
      </div>
    </section>
  );
};

export default Services;
