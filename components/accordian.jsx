import Image from "next/image";
import React, { useState } from "react";

const Accordian = ({ children ,title}) => {
  const [show, setShow] = useState(true);
  return (
    <>
      <main className="border-gray-200 border-2 flex flex-col gap-6 rounded-lg p-4 w-full relative">
        <div className="flex items-center justify-between">
          <div className="text-black text-2xl font-medium">
            {title}
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
