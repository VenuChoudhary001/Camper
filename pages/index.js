import Image from "next/image";
import React, { useEffect, useRef, useState,useContext } from "react";
import Dropdown from "../components/dropdown";
import SEARCH_CONTEXT from "../context/store";
import SelectCampground from "../sections/step/selectCampground";
import SelectDates from "../sections/step/selectDates";
import { SEARCH_CAMPGROUNDS } from "../utils/services";

const Landing = () => {
  const searchRef = useRef(null);
  const [search, setSearch] = useState("");
  const [availOptions, setAvailOptions] = useState();
  const {initialState}=useContext(SEARCH_CONTEXT);
  useEffect(() => {
    searchRef.current.focus();
  }, []);

  const handleSearch = async (e) => {
    setSearch(e.target.value.trim());
    if (e.target.value.length >= 1 && e.target.value != " ") {
      let res = await SEARCH_CAMPGROUNDS(e.target.value);
      if (res.length > 0) {
        setAvailOptions(res);
      } else {
        setAvailOptions(res);
      }
    } else {
      setAvailOptions();
    }
  };

  return (
    <>
      <section className="container mx-auto mt-12 grid grid-cols-1 place-items-center gap-8">
        <main className="flex flex-col gap-6 w-full justify-center">
          <div className="text-4xl font-medium  ">Select Your Campground</div>
          <div className="flex gap-4 flex-col">
            <div className="text-lg font-medium text-dark">
              Search for your campground below that you would like to set up a
              scan for.
              <br /> Feel free to select more than one campground!{" "}
            </div>
            <div className="flex relative gap-2 p-2 border-[1px] border-light_gray rounded-lg">
              <Image src={"/icons/search.svg"} width={24} height={16} />
              <input
                ref={searchRef}
                type={"text"}
                className="outline-none border-none focus:ring-white w-full bg-transparent text-base"
                placeholder=""
                value={search}
                onChange={handleSearch}
              />
              {availOptions && <Dropdown list={availOptions} />}
            </div>
            <div className="flex gap-3 font-thin text-xs text-black">
              <span className="block">Popular Searches : </span>
              <span className="block">Campground 1 </span>
              <span className="block">Campground 1 </span>
              <span className="block">Campground 1 </span>
            </div>
          </div>
        </main>
      {initialState.currentStep>=1 && <SelectCampground/>}
      {initialState.currentStep>=2 && <SelectDates/> }
      </section>
    </>
  );
};

export default Landing;
