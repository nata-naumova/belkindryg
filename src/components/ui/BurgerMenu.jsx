import React from "react";

import { Icon } from "@iconify-icon/react/dist/iconify.mjs";

const BurgerMenu = ({ toggleNavbar }) => {
  return (
    <div className="gap-4 items-center">
      <div className="flex flex-col justify-end">
        <button
          className="flex items-center gap-2 text-sm bg-white/80 text-darkBg p-2.5 rounded-full"
          onClick={toggleNavbar}
        >
          <Icon icon="tabler:menu" width={30} height={30} />
        </button>
      </div>
    </div>
  );
};

export default BurgerMenu;
