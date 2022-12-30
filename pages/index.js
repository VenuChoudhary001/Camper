import Image from "next/image";
import React, { useContext, useEffect, useRef, useState } from "react";
import Accordian from "../components/accordian";
import CampCard from "../components/cards/campCard";
import Dropdown from "../components/dropdown";
import SEARCH_CONTEXT from "../context/store";
import { SEARCH_CAMPGROUNDS } from "../utils/services";

const Landing = () => {
  const searchRef = useRef(null);
  const [search,setSearch]=useState("");
  const [availOptions,setAvailOptions]=useState();


  useEffect(() => {
    searchRef.current.focus();
  }, []);
   
  const {initialState}=useContext(SEARCH_CONTEXT);


  const handleSearch=async (e)=>{
    setSearch(e.target.value.trim());
    if(e.target.value.length>=1 && e.target.value!=" "){
      let res=await SEARCH_CAMPGROUNDS(e.target.value);
      if(res.length>0){
        setAvailOptions(res);
      }else{
        setAvailOptions(res);
      }
    }else{
      setAvailOptions();
    }
  }





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
            <div className="flex relative gap-2 p-4 border-[1px] border-light_gray rounded-lg">
              <Image src={"/icons/search.svg"} width={24} height={16} />
              <input
                ref={searchRef}
                type={"text"}
                className="outline-none focus:ring-white w-full bg-transparent text-base"
                placeholder=""
                value={search}
                onChange={handleSearch}
              />
             {availOptions && <Dropdown  list={availOptions}/>}
            </div>
            <div className="flex gap-3 font-thin text-xs text-black">
              <span className="block">Popular Searches : </span>
              <span className="block">Campground 1 </span>
              <span className="block">Campground 1 </span>
              <span className="block">Campground 1 </span>
            </div>
          </div>
        </main>
        <Accordian title={"Step 1. Selected Campgrounds"}>
          <main className="flex flex-col pb-4 gap-6 max-h-[650px] overflow-auto rounded-lg  w-full">
            <div className="flex flex-col gap-6">
              {initialState.campgrounds.map((item)=><CampCard camp={item} key={item._id}/>)}
            </div>
            <button disabled={initialState.campgrounds.length==0} className="bg-lightGreen disabled:bg-gray-300 w-full rounded p-3 text-white flex justify-center items-center gap-2">
              NEXT STEP{" "}
            </button>
          </main>
        </Accordian>
        <Accordian title={"Step 2. Select Your dates and Camping equipment"}>
          <main className="grid grid-cols-2 gap-6 px-6">
            <div className="flex flex-col gap-4">
              <div className="text-black text-xl font-medium">Your Dates</div>
              <div className="flex gap-2 text-black">
                <input
                  type={"radio"}
                  name="select-date"
                  value={"Any Day within the Next 30 Days"}
                  className='checked:bg-red-600'
                  onChange={(e)=>console.log(e.target.value)}
                />
                Any Day within the Next 30 Days
              </div>
              <div className="flex gap-2 text-black">
                <input
                  type={"radio"}
                  name="select-date"
                  value={"Any Weekend over the Next 60 Days"}
                />
                Any Weekend over the Next 60 Days
              </div>
              <div className="flex gap-2 text-black">
                <input
                  type={"radio"}
                  name="select-date"
                  value={"Use the Date Picker"}
                />
               Use the Date Picker
              </div>
              <div className="flex gap-3">
                 
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-black text-xl font-medium">
                Camping Equipment Type
              </div>
            </div>
          </main>
        </Accordian>
      </section>
    </>
  );
};

export default Landing;
