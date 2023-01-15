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
      <main className="border-gray-200 border-2 flex flex-col gap-6 rounded-lg p-4 w-full relative">
        <div className="flex items-center justify-between">
          <div className="text-black flex gap-2 items-center text-2xl font-medium">
            Step {step} :&nbsp;
            {title}
           {initialState.currentStep>step && <Image 
            src={'/icons/correct.svg'}
            width={24}
            height={24}
            />}
          </div>

          <Image
            src={!show ? "/icons/up.svg" : "/icons/down.svg"}
            width={18}
            height={24}
            className="cursor-pointer"
            onClick={() => setShow(!show)}
          />
        </div>
        {show && children}
      </main>
    </>
  );
};

export default Accordian;
