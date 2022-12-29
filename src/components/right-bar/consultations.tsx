import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BiPlay } from "react-icons/bi";
export default function Consultations() {
  return (
    <div className="consultations p-4">
      <div className="flex items-center mb-5">
        <h2 className="text-sm">Consultations</h2>
        <Link href="/" className="ml-auto text-orange-600">
          All
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        <Link className="flex items-center gap-2" href="/">
          <Image
            className="rounded-full border-2 border-white"
            src="/images/04.jpg"
            alt="Consultation"
            width={50}
            height={50}
          />
          <div>
            <h3 className="font-bold -mb-2 text-xs">Dr. Hornby</h3>
            <small className="text-gray-400 text-thin text-xs">21:15</small>
          </div>
          <div className="ml-auto">
            <div className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
              <BiPlay className="w-4 h-4" />
            </div>
          </div>
        </Link>
        <Link className="flex items-center gap-2" href="/">
          <Image
            className="rounded-full border-2 border-white"
            src="/images/02.jpg"
            alt="Consultation"
            width={50}
            height={50}
          />
          <div>
            <h3 className="font-bold -mb-2 text-xs">Dr. Djones</h3>
            <small className="text-gray-400 text-thin text-xs">43:15</small>
          </div>
          <div className="ml-auto">
            <div className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">
              <BiPlay className="w-4 h-4" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
