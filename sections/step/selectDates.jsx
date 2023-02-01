import React, { useContext, useEffect, useRef, useState } from "react";
import Accordian from "../../components/accordian";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Image from "next/image";
import SEARCH_CONTEXT from "../../context/store";
import add from "date-fns/add";
const SelectDates = () => {
  const {
    initialState,
    updateCheckIn,
    updateCheckOut,
    updateStep,
    updateDate,
    updateEquipment,
  } = useContext(SEARCH_CONTEXT);
  const [equip, setEquip] = useState([...initialState.campingEquip]);
  const [curr, setCurr] = useState(null);
  const [selectDate, setSelectDate] = useState(initialState.selectDate);
  const CheckIn = React.forwardRef(({ value, onClick }, ref) => (
    <div className="flex bg-gray-50 border-[1px]  items-center py-3 px-2 rounded-md gap-1">
      <Image src={"/icons/arrow-down.svg"} width={16} height={10} />
      <input
        ref={ref}
        value={value}
        placeholder="Check in"
        className="border-0  bg-transparent focus:ring-white max-w-[200px]  px-2   outline-none  rounded-lg"
      />
      <Image
        src={"/icons/calendar.svg"}
        width={20}
        height={16}
        className="bg-transparent"
        onClick={onClick}
      />
    </div>
  ));

  const CheckOut = React.forwardRef(({ value, onClick }, endRef) => (
    <div className="flex bg-gray-50 border-[1px] items-center py-3 px-2 rounded-md gap-2">
      <Image src={"/icons/arrow-up.svg"} width={16} height={10} />
      <input
        ref={endRef}
        value={value}
        placeholder="Check in"
        className="border-0 bg-transparent focus:ring-white max-w-[200px]  px-2   outline-none  rounded-lg"
      />
      <Image
        src={"/icons/calendar.svg"}
        width={20}
        height={16}
        className="bg-transparent"
        onClick={onClick}
      />
    </div>
  ));
  const handleClick = () => {
    if (selectDate != -1) {
      updateStep(3);
    }
  };
  const handleChange = (e) => {
    if (e.target.checked) {
      setEquip([...equip, e.target.value]);
      updateEquipment([...equip, e.target.value]);
    } else {
      updateEquipment(equip.filter((item) => item != e.target.value));
      setEquip(equip.filter((item) => item != e.target.value));
    }
  };
  return (
    <>
      <Accordian step={2} title={"Select Your dates and Camping equipment"}>
        <main className="grid grid-cols-2 gap-6 px-4">
          <div className="flex flex-col gap-4">
            <div className="text-black text-xl font-medium">Your Dates</div>
            <div
              onClick={(e) => {
                updateDate("Any Day within the Next 30 Days");
                setSelectDate("Any Day within the Next 30 Days");
                setCurr(0);
              }}
              className={`${
                curr == 0 && "bg-brown text-white"
              } flex items-center cursor-pointer gap-2 text-black p-2 border-brown border-[1px] rounded-lg`}
            >
              <input
                type={"radio"}
                name="select-date"
                value={"Any Day within the Next 30 Days"}
                checked={
                  initialState.selectedDate ==
                    "Any Day within the Next 30 Days" ||
                  selectDate == "Any Day within the Next 30 Days"
                }
                className="  transform scale-125 checked:text-red"
                onChange={(e) => {
                  updateDate(e.target.value);
                  setSelectDate(e.target.value);
                }}
              />
              Any Day within the Next 30 Days
            </div>
            <div
              onClick={(e) => {
                updateDate("Any Weekend over the Next 60 Days");
                setSelectDate("Any Weekend over the Next 60 Days");
                setCurr(1);
              }}
              className={`${
                curr == 1 && "bg-brown text-white"
              } flex items-center cursor-pointer gap-2 text-black p-2 border-brown border-[1px] rounded-lg`}
            >
              <input
                type={"radio"}
                name="select-date"
                checked={
                  initialState.selectedDate ==
                    "Any Weekend over the Next 60 Days" ||
                  selectDate == "Any Weekend over the Next 60 Days"
                }
                value={"Any Weekend over the Next 60 Days"}
              />
              Any Weekend over the Next 60 Days
            </div>
            <div onClick={()=>{setSelectDate(2);
                  updateDate("select date");
                  updateCheckIn(new Date());
                  updateCheckOut(add(new Date(), { days: 5 }));}} className="flex gap-2 cursor-pointer flex items-center text-black p-2 border-brown border-[1px] rounded-lg">
              <input
                type={"radio"}
                name="select-date"
                value={2}
                checked={
                  initialState.selectDate == "select date" || selectDate == 2
                }
                onChange={(e) => {
                  setSelectDate(2);
                  updateDate("select date");
                  updateCheckIn(new Date());
                  updateCheckOut(add(new Date(), { days: 5 }));
                }}
              />
              Use the Date Picker
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-black text-xl font-medium">
              Camping Equipment Type
            </div>
            <div className="flex flex-col gap-4">
              <div className="bg-white flex flex-col gap-4">
                <label className="flex gap-2 text-base items-center">
                  <input
                    type="checkbox"
                    name="tent"
                    className="w-5 h-5 intermediate:bg-gray-200 intermediate:w-20"
                    value={"tent"}
                    checked={equip.includes("tent")}
                    onChange={handleChange}
                  />
                  Tent
                </label>
              </div>
              <div className="bg-white flex flex-col gap-4">
                <label className="flex gap-2 text-base items-center">
                  <input
                    type="checkbox"
                    name="tent"
                    className="w-5 h-5 intermediate:bg-gray-200 intermediate:w-20"
                    value={"truck"}
                    checked={equip.includes("truck")}
                    onChange={handleChange}
                  />
                  RV/Trailer/Truck
                </label>
              </div>
              <div className="flex items-center w-full border-gray-300/50 border-2 p-1 bg-gray-100/50 rounded">
                <input type="text" className="bg-transparent p-2 text-base text-gray-400 outline-none " placeholder="Vehicle length" />
              </div>
            </div>
          </div>
        </main>
        {selectDate == 2 && (
          <div className="flex  max-w-[600px] gap-4">
            <DatePicker
              calendarClassName=""
              selected={initialState.checkIn || new Date()}
              onChange={(date) => updateCheckIn(date)}
              customInput={<CheckIn />}
            />
            <DatePicker
              calendarClassName=""
              selected={initialState.checkOut || add(new Date(), { days: 5 })}
              onChange={(date) => updateCheckOut(date)}
              customInput={<CheckOut />}
            />
          </div>
        )}
        <button
          disabled={!selectDate}
          onClick={handleClick}
          className="bg-lightGreen disabled:bg-gray-300 w-full rounded p-3 text-white flex justify-center items-center gap-2"
        >
          NEXT STEP{" "}
        </button>
      </Accordian>
    </>
  );
};

export default SelectDates;
