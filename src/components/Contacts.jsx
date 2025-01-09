import React from "react";
import { CONTACT_CONTENT } from "../constants";

const Contacts = () => {
  return (
    <div className="flex flex-col items-start gap-6" id="contacts">
      <a href={`tel:${CONTACT_CONTENT.phone}`} className="text-xl text-title">
        {CONTACT_CONTENT.phoneTitle}
      </a>
      <a
        href={`mailto:${CONTACT_CONTENT.email}`}
        className="text-xl text-title"
      >
        {CONTACT_CONTENT.email}
      </a>
      <span className="text-xl text-title">{CONTACT_CONTENT.address}</span>
    </div>
  );
};

export default Contacts;
