/* eslint-disable react-refresh/only-export-components */
import WebDevCard from "./WebCard";
import GRAPHIS from "./Graphics";
import DIGTIALMARKET from "./DigitialMArket";
// import BUTTON from "./Button";
import { Explore } from "./Button";
const CONTENTCARDS = () => {
  return (
    <div className="text-center">
      <div className="flex flex-col items-center mt-12">
        <h1 className="text-2xl font-bold">
          Unlock new Skills With our Courses
        </h1>
        <Explore />
      </div>
      <p className="-mt-10 text-xl">Learn and grow at your own pace</p>

      <div className="flex justify-center mt-7">
        <WebDevCard />
        <DIGTIALMARKET />
        <GRAPHIS />
      </div>
    </div>
  );
};

export default CONTENTCARDS;
