import React from "react";
import Image from "next/image";

export default function Profile() {
  return (
    <div className="profile pt-10 lg:pt-0">
      <div className="profile-image text-center ">
        <div className="relative w-32 mx-auto">
          <Image
            className="rounded-full border-4 mx-auto border-white"
            src="/images/01.jpg"
            alt="Picture of the author"
            width={100}
            height={100}
          />
          <div className="absolute bottom-3 left-3 text-xs rounded-full w-6 h-6 flex items-center justify-center bg-slate-500 text-white">
            3
          </div>
        </div>
        <h2 className="text-sm">Bill Terner</h2>
        <div className="family mt-4">
          <p className="text-gray-500 text-sm">Family</p>
          <div className="flex justify-center gap-2">
            <Image
              className="rounded-full border-2 border-white"
              src="/images/02.jpg"
              alt="Family member"
              width={30}
              height={30}
            />
            <Image
              className="rounded-full border-2 border-white"
              src="/images/03.jpg"
              alt="Family member"
              width={30}
              height={30}
            />
            <Image
              className="rounded-full border-2 border-white"
              src="/images/04.jpg"
              alt="Family member"
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
