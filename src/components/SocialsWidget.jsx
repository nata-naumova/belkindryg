import { Icon } from "@iconify/react/dist/iconify.js";
import { SOCIALS } from "../constants";

const SocialsWidget = () => {
  return (
    <section className="fixed bottom-4 right-4 z-20 py-4">
      <div className="flex flex-col gap-4">
        {SOCIALS &&
          SOCIALS.map((item, index) => (
            <a
              href={item.href}
              key={index}
              target="_blank"
              className="relative custom-box p-6 text-title w-12 h-12 "
            >
              <Icon icon={item.icon} className="text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </a>
          ))}
      </div>
    </section>
  );
};

export default SocialsWidget;
