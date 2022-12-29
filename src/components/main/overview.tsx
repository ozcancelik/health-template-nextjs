import Link from "next/link";
import React from "react";
import { BiDotsVertical } from "react-icons/bi";
import { FiEye, FiDroplet } from "react-icons/fi";
import { BiDroplet, BiHeart } from "react-icons/bi";
import { RiLeafLine } from "react-icons/ri";
import { GiHealthPotion } from "react-icons/gi";
import Circle from "./circle";

export default function Overview() {
  return (
    <div className="overview bg-gray-100 rounded-2xl p-4 lg:p-10 flex flex-col">
      <div className="flex mb-4">
        <h2 className="text-xl">My health overview</h2>
        <span className="ml-auto">
          <BiDotsVertical className="w-6 h-6 cursor-pointer" />
        </span>
      </div>
      <div className="overview-wrapper h-96 mt-5 sm:mt-0 relative z-10 flex flex-col items-end lg:block">
        <div className="centered-info-status shadow-md rounded-full w-32 h-32 flex justify-center items-center flex-col bg-white text-black absolute right-0 left-0 mx-auto top-1/2 -translate-y-1/2">
          <h3 className="text-lg leading-4">77</h3>
          <p>Good</p>
        </div>
        <div className="vision absolute top-1/2 -translate-y-1/2 left-0 h-56 w-36 bg-[#111235] rounded-xl text-white text-center flex flex-col">
          <div className="mx-auto  relative -mt-8 mb-4 w-16 h-16 bg-[#c3e6f6] rounded-full border-2 border-white flex justify-center items-center">
            <FiEye className="w-10 h-10  fill-[#2f80a5]" />
          </div>
          <h3 className="w-full text-center">88</h3>
          <div className="mb-5 text-center">Vision</div>
          <div className="opacity-50 text-sm px-4">
            Exellent! One of the best results!
          </div>
          <Link
            href="/"
            className="bg-green-500 text-white rounded-md px-4 py-2 mt-auto w-2/3 mx-auto -mb-5"
            title="More"
          >
            More
          </Link>
        </div>

        <Circle
          size={5}
          value={65}
          name="Lungs"
          color="#ffd5a2"
          left={25}
          top={10}
          icon={<RiLeafLine />}
        />
        <Circle
          size={6}
          value={95}
          name="Heart"
          color="#c3e6f6"
          left={65}
          top={10}
          icon={<BiHeart />}
        />
        <Circle
          size={6}
          value={87}
          name="Blood"
          color="#fca987"
          left={25}
          top={50}
          icon={<BiDroplet />}
        />
        <Circle
          size={6}
          value={49}
          name="Pressure"
          color="#97ebe1"
          left={75}
          top={50}
          icon={<GiHealthPotion />}
        />
      </div>
      <div className="mt-auto border-t py-4 border-gray-300">
        <div className="flex flex-wrap w-full">
          <div className="w-full md:w-3/12 text-gray-400 mb-3 lg:mb-0">
            OTHER
          </div>
          <div className="w-full md:w-3/12 mb-4 lg:mb-0">
            <h4>Luisa Terner</h4>
            <p className="text-gray-400">97 Points</p>
          </div>
          <div className="w-full md:w-3/12 mb-4 lg:mb-0">
            <h4>David Terner</h4>
            <p className="text-gray-400">71 Points</p>
          </div>
          <div className="w-full md:w-3/12 mb-4 lg:mb-0">
            <h4>Kent Terner</h4>
            <p className="text-gray-400">86 Points</p>
          </div>
        </div>
      </div>
    </div>
  );
}
