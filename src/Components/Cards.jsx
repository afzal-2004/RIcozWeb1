/* eslint-disable react-refresh/only-export-components */
import Card from "./Card";
//   THIS IS OUR  PARENT CARD SECTION IT IS PASS IN MAIN FUNCTION AND ALL CHILD COMPONENTS ARE
const CARDS = () => {
  return (
    <>
      {" "}
      <div className="  mt-5 p-6">
        <h1 className=" text-center text-3xl">
          Explore Our PLateform for Unique featurs
        </h1>
      </div>
      <div className=" flex  ">
        <Card></Card>
      </div>
    </>
  );
};
export default CARDS;
