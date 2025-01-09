import React from "react";
import { ArrowUpRight } from "lucide-react";
import ButtonCustom from "./ButtonCustom";

const RequestFrom = () => {
  return (
    <form action="#" className="w-full">
      <div className="flex items-center justify-center gap-6 md:flex-row flex-col">
        <input
          id="user-name"
          name="user-name"
          type="text"
          className="custom-input"
          placeholder="Введите имя *"
          required
        />
        <input
          id="user-phone"
          name="user-phone"
          type="number"
          className="custom-input"
          placeholder="Введите телефон *"
          required
        />
        <ButtonCustom name="Оставить заявку" type="button" />
       
      </div>
    </form>
  );
};

export default RequestFrom;
