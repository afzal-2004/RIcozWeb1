/* eslint-disable no-unused-vars */
//  HERE CARD N WILL MAKED AND ACCES IN HOLE WEB PAGE

import React from "react";
import ProfessionalCard from "./Exploreplateform";
const Card = () => {
  const professional = [
    {
      name: "Wide range of Service ",

      story:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra eu metus sed cursus. Vivamus urna nisi, porta a dapibus ac, condimentum sit amet tortor. Curabitur et ex sed quam dictum suscipit id egestas quam. Nam id finibus ligula. Sed iaculis nibh nunc, et malesuada metus molestie in. Sed dui.",
      image:
        "https://th.bing.com/th/id/R.5c54a3b29ce375247795359b5b0b7480?rik=RuAPt2d7dRTQ1w&riu=http%3a%2f%2froythemes.com%2fdemo%2fayon%2fneptune%2f229-large_default%2fsimple-laptop-2k.jpg&ehk=aDpmCn02CtmShwIaZMSmfDQy2vTzXYvSJXX2PBcckB0%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      name: "Instant Search ",

      story:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra eu metus sed cursus. Vivamus urna nisi, porta a dapibus ac, condimentum sit amet tortor. Curabitur et ex sed quam dictum suscipit id egestas quam. Nam id finibus ligula. Sed iaculis nibh nunc, et malesuada metus molestie in. Sed dui..",
      image:
        "https://openclipart.org/image/2400px/svg_to_png/213239/Search-icon.png",
    },
    {
      name: "Quailty Scpring ",

      story:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra eu metus sed cursus. Vivamus urna nisi, porta a dapibus ac, condimentum sit amet tortor. Curabitur et ex sed quam dictum suscipit id egestas quam. Nam id finibus ligula. Sed iaculis nibh nunc, et malesuada metus molestie in. Sed dui.",
      image:
        "https://cdn.shopify.com/s/files/1/2179/5443/products/101210_Pellaio_BC_009.JPG?v=1508011298",
    },
  ];

  return (
    <div className=" flex ml-11 mr-8 mt-5">
      {professional.map((professional, index) => (
        <ProfessionalCard key={index} professional={professional} />
      ))}
    </div>
  );
};

export default Card;
