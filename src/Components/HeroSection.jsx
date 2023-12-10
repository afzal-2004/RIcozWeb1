/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

import React from "react";
import BUTTON from "./Button";
import Card from "./Card";
import HeroImage from "./Heroimage";

const HEROSECTION = () => {
  return (
    <div className="w-full h-screen  text-white footercolor relative">
      <div className="absolute top-1/2    left-[20vw] transform -translate-y-1/2 w-1/2 text-4xl font-bold  -ml-52">
        <p>
          Discover Top Tech <br /> Professionals in Minutes.
        </p>
        <p className="text-xl mt-6  w-2/3">
          Streamline Your Business Needs With Ricoz's All-in-One Tech Service
          Hub.
        </p>
        <BUTTON></BUTTON>
      </div>
      <HeroImage></HeroImage>
    </div>
  );
};

export default HEROSECTION;
