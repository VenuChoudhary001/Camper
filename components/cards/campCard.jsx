import Image from "next/image";
import React from "react";
import AddBtn from "../addBtn";
import Tags from "../tags";

const CampCard = () => {
  const others = ["Carlsbad State Beach", "Leo Carrilo", "San Clemente"];
  return (
    <>
      <article className="w-full px-3 py-4 shadow-lg rounded-xl flex flex-col gap-4">
        <div className="flex justify-between">
          <div className="text-black text-base  items-center font-medium flex gap-2">
            Doolittle Campground <Tags id={"NY"} />{" "}
          </div>
          <Image
            src={"/icons/x-circle.svg"}
            className="cursor-pointer"
            onClick={() => console.log("J")}
            width={24}
            height={24}
          />
        </div>
        <div className="flex p-2 bg-white border-[2px] rounded-lg border-gray-200 flex-col gap-4">
          <div className="text-sm text-light_gray-100">
            Other campgrounds near Dohney State Beach
          </div>
          <div className="flex gap-3 flex-wrap ">
            {others.map((item, index) => (
              <AddBtn key={index} placeholder={item} />
            ))}
          </div>
        </div>
        <div className="w-full rounded-lg bg-gray-100 text-lightGreen text-base flex gap-2 items-center justify-center p-3">
          Show Advanced Options
          <Image src={"/icons/right_arrow-down.svg"} width={16} height={16} />
        </div>
      </article>
    </>
  );
};

export default CampCard;
