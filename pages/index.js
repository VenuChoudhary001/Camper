import React, { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Dropdown from "../components/dropdown";
import { SEARCH_CAMPGROUNDS } from "../utils/services";
import Tags from "../components/tags";
import SEARCH_CONTEXT from "../context/store";
import { useRouter } from "next/router";
const Landing = () => {
  const searchRef = useRef(null);
  let router=useRouter();
  const [search, setSearch] = useState("");
  const [availOptions, setAvailOptions] = useState();
  const {addCampgrounds}=useContext(SEARCH_CONTEXT);
  const handleClick=(item)=>{addCampgrounds(item); router.replace('/search') }
  const handleSearch = async (e) => {
    setSearch(e.target.value);
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
  useEffect(() => {
    searchRef.current.focus();
  }, []);

  return (
    <>
      <section className="container flex flex-col justify-center items-center min-h-[500px] md:min-h-[700px] gap-8 mx-auto">
        <Image src={"/icons/logo.png"} className='hidden md:block' width={341} height={62} unoptimized />
        <main className="text-5xl md:text-7xl  text-black font-heading">
          Select Your Campground
        </main>
        <main className="text-sm md:text-base text-dark">
          Search for your campground below that you would like to set up a scan
          for. Feel free to select more than one campground!
        </main>
        <div className="flex relative gap-2 p-3 border-[1px] w-full max-w-[900px] shadow-lg border-gray-200 rounded-lg">
          <Image src={"/icons/search.svg"} width={24} height={16} />
          <input
            ref={searchRef}
            type={"text"}
            className="outline-none border-none p-2 focus:ring-white w-full bg-transparent text-base"
            placeholder="Search campgrounds"
            value={search}
            onChange={handleSearch}
          />
          {availOptions &&  <div className="w-full bg-white z-[9999] absolute top-[70px] md:top-[60px] left-0 rounded-lg text-dark_gray bg-white shadow-2xl  text-base py- overflow-auto max-h-[180px] flex flex-col ">
            {availOptions.map((item) => (
              <div
                key={item._id}
                onClick={() => handleClick(item)}
                className="cursor-pointer px-4 py-3 hover:bg-gray-100 flex gap-2 items-center"
              >
                {item.name} <Tags id={item.city_symbol} />{" "}
              </div>
            ))}
          </div>}
        </div>
        <div className="flex gap-3 font-thin  text-xs text-black">
          <span className="block">Popular Searches : </span>
          <span className="block">Campground 1 </span>
          <span className="hidden md:block">Campground 1 </span>
          <span className="hidden md:block">Campground 1 </span>
        </div>
      </section>
    </>
  );
};

export default Landing;
