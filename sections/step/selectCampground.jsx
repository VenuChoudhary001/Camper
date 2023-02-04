import React, { useContext } from "react";
import Accordian from "../../components/accordian";
import CampCard from "../../components/cards/campCard";
import SEARCH_CONTEXT from "../../context/store";
const SelectCampground = () => {
  const { initialState,updateStep } = useContext(SEARCH_CONTEXT);
  const handleClick=()=>{
    if(initialState.campgrounds.length!=0) updateStep(2);
  }
  return (
    <>
      <Accordian title={"Selected Campgrounds"} step={1}>
        <main className="flex flex-col pb-4 selCamp gap-6 max-h-[650px] overflow-auto rounded-lg  w-full">
          <div className="flex flex-col gap-6">
            {initialState.campgrounds.map((item) => (
              <CampCard camp={item} key={item._id} />
            ))}
          </div>
          <button
            disabled={initialState.campgrounds.length == 0}
            onClick={handleClick}
            className="bg-lightGreen disabled:bg-gray-300 w-full rounded p-3 text-white flex justify-center items-center gap-2"
          >
            NEXT STEP{" "}
          </button>
        </main>
      </Accordian>
    </>
  );
};

export default SelectCampground;
