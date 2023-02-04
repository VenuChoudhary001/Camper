import Image from "next/image";
import React, { useState,useContext, useEffect } from "react";
import SEARCH_CONTEXT from "../context/store";
const Accordian = ({ children ,title,step}) => {
  const [show, setShow] = useState(true);
  const {initialState}=useContext(SEARCH_CONTEXT);
  
  useEffect(()=>{
    if(initialState.currentStep>step) setShow(false)
  },[initialState.currentStep])

  return (
    <>
      <main className={`${initialState.currentStep>step ?"border-lightGreen": "border-gray-200"} border-2 flex flex-col gap-6 rounded-lg p-4 w-full relative`}>
        <div className="flex items-center gap-4 justify-between">
          <div className="text-black flex gap-2 items-center text-sm md:text-2xl font-medium">
            Step {step} :&nbsp;
            {title} {initialState.currentStep>step &&
            <img src={'/icons/correct.svg'} alt="" />
            }
          </div>

          <img src={!show ? "/icons/up.svg" : "/icons/down.svg"} alt=""className="cursor-pointer"
            onClick={() => setShow(!show)} />
        </div>
        {show && children}
      </main>
    </>
  );
};

export default Accordian;
