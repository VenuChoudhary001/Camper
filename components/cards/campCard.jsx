import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import SEARCH_CONTEXT from "../../context/store";
import { GET_NEARBY_CAMPS } from "../../utils/services";
import AddBtn from "../addBtn";
import Tags from "../tags";
import OptionsCard from "./optionsCard";

const CampCard = ({ camp }) => {
  const others = ["Carlsbad State Beach", "Leo Carrilo", "San Clemente"];
  const [nearByCamps, setNearByCamps] = useState();
  const { removeCampground } = useContext(SEARCH_CONTEXT);
  const [showOptions,setShowOptions]=useState(false);
  useEffect(() => {
    (async () => {
      let res = await GET_NEARBY_CAMPS({camp_id:camp._id,city:camp.city});
      setNearByCamps(res);
    })();
  }, []);

  return (
    <>
      <article className="w-full px-3 py-4 shadow-lg rounded-xl flex flex-col gap-4">
        <div className="flex justify-between">
          <div className="text-black text-base  items-center font-medium flex gap-2">
            {camp.name} <Tags id={camp.city_symbol} />{" "}
          </div>
          <Image
            src={"/icons/x-circle.svg"}
            className="cursor-pointer"
            onClick={() => removeCampground(camp._id)}
            width={24}
            height={24}
          />
        </div>
        {nearByCamps && nearByCamps.length > 0 && (
          <div className="flex p-2 bg-white border-[2px] rounded-lg border-gray-200 flex-col gap-4">
            <div className="text-sm text-light_gray-100">
              Other campgrounds near {camp.name}
            </div>
            <div className="flex gap-3 flex-wrap ">
              {nearByCamps.map((item) => (
                <AddBtn key={item._id} camp={item} />
              ))}
            </div>
          </div>
        )}
        {showOptions && <OptionsCard camp={camp} />}
        <div onClick={()=>setShowOptions(!showOptions)} className="w-full cursor-pointer rounded-lg bg-gray-100 text-lightGreen text-base flex gap-2 items-center justify-center p-3">
          {showOptions && <Image src={"/icons/left_arrow-down.svg"} width={16} height={16} />}
          {!showOptions?"Show Advanced Options":"Hide Options"}
          {!showOptions && <Image src={"/icons/right_arrow-down.svg"} width={16} height={16} />}
        </div>
      </article>
    </>
  );
};

export default CampCard;
