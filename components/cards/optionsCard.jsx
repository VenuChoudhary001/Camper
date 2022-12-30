import React, { useContext } from "react";
import SEARCH_CONTEXT from "../../context/store";

const OptionsCard = ({ camp }) => {
  const {}=useContext(SEARCH_CONTEXT);
  return (
    <>
      <main className="flex flex-col gap-4 p-4">
        <div className="text-xl font-semibold text-black">Advanced Options</div>
        <div className="grid grid-cols-2 gap-6">
          {camp.options.map((item) => (
            <div
              key={item.option_id}
              className="flex flex-col bg-white rounded-lg border-2 p-4 gap-4"
            >
              <div className="text-brown font-medium text-lg shadow pb-2">
                {item.option_name}
              </div>
              {item.options_list.map((item) => (
                <div className="bg-white flex flex-col gap-4">
                  <label className="flex gap-2 text-sm items-center">
                    <input
                      type="checkbox"
                      name="sites"
                      className="w-5 h-5 intermediate:bg-gray-200 intermediate:w-20"
                      value={Object.keys(item)}
                      onChange={(e)=>console.log(e.target.checked)}
                    />
                    {Object.keys(item)}
                  </label>
                </div>
              ))}
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default OptionsCard;
