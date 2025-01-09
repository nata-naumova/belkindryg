import React from "react";
import { AudioWaveform } from "lucide-react";

const Logotype = () => {
  return (
    <>
      <a href="/" className="text-accent">
        <AudioWaveform className="md:w-8 w-6 md:h-8 h-6" />
      </a>
    </>
  );
};

export default Logotype;
