import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import Tags from "../components/tags";
import SEARCH_CONTEXT from "../context/store";
import Section2 from "../sections/reviewScan/section2";

const ReviewScan = () => {
  let router=useRouter();
  const { initialState,updateStep } = useContext(SEARCH_CONTEXT);
  
  const handleClick=()=>{
    updateStep(1);
    router.replace('/')
  }
  return (
    <>
      <main className="container mx-auto my-8 flex flex-col gap-8">
        <div className="flex items-center justify-between ">
          <div className="text-4xl font-medium  ">Review your scan</div>
          <div onClick={handleClick} className="text-lightGreen cursor-pointer hover:underline  font-medium flex gap-1 text-xl">
            Edit your scan
            <Image src={"/icons/edit-3.svg"} width={24} height={24} />
          </div>
        </div>
        <div className="text-lg font-medium">
          Lorem ipsum dolor sit amet consectetur. Senectus amet quam vel
          fringilla. Aenean sed in tortor commodo et pharetra. Turpis fermentum
          at.
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-6">
            <div className="text-2xl font-medium text-gray">
              Selected campgrounds
            </div>
            <div className="flex flex-col gap-4">
              {initialState.campgrounds.map((item) => (
                <div className="shado text-lg max-w-[450px] text-dark_gray flex items-center justify-between p-4">
                  <div className="flex gap-2 items-center">
                    {item.name} <Tags id={item.city_symbol} />
                  </div>
                  <Image
                    src={"/icons/x-circle.svg"}
                    className="cursor-pointer"
                    width={24}
                    height={24}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <div className="text-2xl font-medium text-gray">
                Date Selection Info
              </div>
              <div className="flex flex-col gap-4 py-4">
                {initialState.selectedDate == "select date" ? (
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-6">
                      <div className="text-light_gray-100 font-normal">
                        Check-in date
                      </div>
                      <div className="text-dark_gray font-normal">
                        {new Date(initialState.checkIn).toLocaleDateString(
                          "en"
                        )}
                      </div>
                    </div>
                    <div className="flex gap-6">
                      <div className="text-light_gray-100 font-normal">
                        Check-out date
                      </div>
                      <div className="text-dark_gray font-normal">
                        {new Date(initialState.checkOut).toLocaleDateString(
                          "en"
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="flex text-dark_gray  ">
                      {initialState.selectedDate}
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="text-2xl font-medium text-gray">
                Camping Equipment
              </div>
              <div className="flex flex-col gap-4 py-4">
                {initialState.campingEquip.map(item=><div className="flex gap-2">
                  <Image 
                  src={'/icons/15-Checked.svg'}
                  width={24}
                  height={24}
                  />
                  {item}
                </div>)}
</div>
            </div>
          </div>
        </div>
      <button
            onClick={()=>router.push('/success')}
            className="bg-lightGreen disabled:bg-gray-300 w-full rounded p-3 text-white flex justify-center items-center gap-2"
          >
            ACTIVATE THE SCAN
          </button>
      </main>
      <Section2/>
    </>
  );
};

export default ReviewScan;
