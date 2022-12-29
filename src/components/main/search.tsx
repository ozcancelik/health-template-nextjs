import React from "react";
import { BiCog, BiPieChartAlt, BiSearchAlt2 } from "react-icons/bi";

export default function Search() {
  return (
    <div className="search pb-6">
      <div className="flex items-center gap-4">
        <BiSearchAlt2 className="w-8 h-8" />
        <input
          className="w-full h-12 px-4 outline-none rounded-md  focus:outline-gray-300 duration-100 transition-all mx-2"
          type="search"
          placeholder="Enter your search request"
        />
        <div className="ml-auto h-12 flex items-center">
          <label className="text-xs rounded-full w-[25px] h-[25px] flex items-center justify-center bg-[#8480ff] text-white font-medium">
            1
          </label>
        </div>
        <BiPieChartAlt className="w-8 h-8 fill-gray-400 cursor-pointer" />
        <BiCog className="w-8 h-8  fill-gray-400 cursor-pointer" />
      </div>
    </div>
  );
}
