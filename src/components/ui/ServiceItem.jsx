import { SERVICES } from "../../constants";
import GetButton from "../GetButton";
import ButtonCustom from "../GetButton";

const List = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
      {SERVICES &&
        SERVICES.map((product) => (
          <div key={product.title} className="">
            <div className="custom-box h-full flex flex-col gap-4 justify-between">
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-full object-contain max-h-[250px]"
              />
              <h3 className="md:text-3xl text-2xl text-accent">
                {product.title}
              </h3>
              <p className="text-title text-lg">{product.desc}</p>
              <ul className="grid lg:grid-cols-3 grid-cols-2 gap-4 mb-4">
                {product.config &&
                  product.config.map((item, index) => (
                    <li key={index}>
                      <span className="text-sm block text-accent">
                        {item.name}
                      </span>
                      <span className="text-sm block text-title">
                        {item.value}
                      </span>
                    </li>
                  ))}
              </ul>
              <a href="#footer" className="text-center">
                <GetButton variant="secondary">
                  {`Сборка ${product.price}`}
                </GetButton>
              </a>
            </div>
          </div>
        ))}
    </div>
  );
};

export default List;
