/* eslint-disable no-unused-vars */
import React from "react";

const WebDevCard = () => {
  return (
    <div className=" float ml-7 mr-7">
      <img
        src="https://s3-alpha-sig.figma.com/img/4d07/ffee/d34ab8db76a70f5ad0d8b7a7b54a738c?Expires=1702857600&Signature=Pyk~lqKrhJTJ9LOq-RBuwR2XkA-yqbKPesyFaf-NkIl8O-4IZLitIK-y-Gnm1DGKJhTJJvGTK2xBeRpfpnRsgIXGvQEqUHUeG9vl~js0EUNbJ41TNZxD0HcecvPOl7Uv1AXwlnwCcaJ21G8cJAtY33m2ge0m2XpnCcsrzDHLUyxNR94F9sJg6vz4WneMnxv5HaZPLdyvXZ1KMD5KmtubUH1-JWagQCzUHy3R2BoBk3dQvErgPfo~gYiSMEJCTKaEA3r-Pbx5pH6shEwENbbjLaheDnVnovrDFhWjnxIMfxsAGv600lEsVm-EXfp4muDxLgZqhzVJuPW~JBOB5pr3Nw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        alt=""
        width="385"
        height="186"
        className="rounded-t-lg overflow-hidden"
      />
      <div className="max-w-sm mx-auto float   -mt-1 pt-12 bg-card-color shadow-lg  overflow-hidden  mr-4  rounded-b-lg ">
        {/* <FaLaptop /> */}
        <div className="px-6 py-4">
          <div className="font-bold text-xl   text-white mb-2">
            Web devlopement Mastry
          </div>
          <p className="text-white text-base">
            Rs 60,000 <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
            facere quia explicabo atque odit fuga, minima similique odio
            assumenda dolore et dicta rem, quos totam, sequi iusto nesciunt sed
            necessitatibus?
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebDevCard;
