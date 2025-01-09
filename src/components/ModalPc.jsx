import React, { useEffect, useRef } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

const ModalPc = ({ open, onClose, product }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (open) modalRef.current.scrollTop = 0;
  }, [open]);

  if (!open) return null;

  return (
    <div
      onClick={onClose}
      className={`fixed z-30 inset-0 flex justify-center items-center transition-colors px-4 ${
        open ? "visible bg-black/80" : "invisible"
      }`}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className={`max-w-[600px] w-full max-h-[80vh] overflow-hidden relative border-2 border-white/15 rounded-xl backdrop-blur-sm bg-darkBg/70 shadow transition-all ${
          open ? "scale-100 opacity-100" : "scale-125 opacity-0"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute z-10 top-2 right-2 opacity-70 hover:opacity-100 transition-opacity duration-300"
        >
          <Icon icon="majesticons:close" width={30} height={30} />
        </button>
        <div className="p-4 lg:p-6">
          <div className="grid grid-cols-12 gap-4 lg:gap-6">
            <div className="col-span-12 lg:col-span-6 h-[100px] lg:h-[180px]">
              <img
                className="w-full h-full object-contain"
                src={product.img}
                alt={product.title}
              />
            </div>
            <div className="flex flex-col gap-4 col-span-12 lg:col-span-6">
              <h3 className="font-bold text-white text-base lg:text-xl uppercase">
                {product.title}
              </h3>
              <p className="text-sm lg:text-base">{product.desc}</p>
              <a
                href="#"
                className="mb-4 text-white px-4 py-1 rounded-full font-medium text-sm lg:text-base bg-custom-grad text-center w-fit lg:w-full"
              >
                <span className="leading-6 text-sm lg:text-base">
                  {product.price}
                </span>
              </a>
            </div>
          </div>
          <h4 className="text-sm lg:text-base mb-2">Комплектующие</h4>
          <div className="max-h-[calc(80vh-345px)] overflow-y-auto">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="text-left"></th>
                  <th className="text-left"></th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-white/15">
                {product.config &&
                  product.config.map((item, index) => (
                    <tr key={index} className="">
                      <td className="text-sm px-2 py-1">{item.name}</td>
                      <td className="text-sm px-2 py-1">{item.value}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPc;
