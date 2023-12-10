/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from "react";

const ProfessionalCard = ({ professional }) => {
  const { name, position, company, story, image } = professional;

  return (
    <div className=" flex">
      <div className="max-w-md mx-auto bg-regal-blue text-white rounded-xl overflow-hidden shadow-md m-4    mr-5 ml-5">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="   w-11  mt-5   ml-6 text-2xl rounded-full"
              src={image}
              alt={`${name}'s profile`}
            />
          </div>
          <div className="p-8">
            <div className="block mt-1 text-lg leading-tight font-medium ">
              {name}
            </div>

            <p className="mt-4">{story}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalCard;
