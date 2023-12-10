/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from "react";

const ProfessionalCard = ({ professional }) => {
  const { name, position, company, story, image } = professional;

  return (
    <div className=" flex">
      <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md m-4    mr-5 ml-5">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="   w-11  ml-2 mt-1 rounded-tl-none rounded-tr-[68.648px] rounded-br-[68.648px] rounded-bl-[68.648px]"
              src={image}
              alt={`${name}'s profile`}
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {position}
            </div>
            <div className="block mt-1 text-lg leading-tight font-medium text-black">
              {name}
            </div>
            <p className="mt-2 text-gray-500">{company}</p>
            <p className="mt-4 text-gray-600">{story}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalCard;
