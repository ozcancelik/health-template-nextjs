import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function GetConsultant() {
  return (
    <div className="get-consultant my-4">
      <Link
        href="/"
        title="Get consultant"
        className="flex items-center bg-gray-100 rounded-3xl px-6 py-2 hover:shadow-lg duration-300"
      >
        <div className="font-bold">Get consultant</div>
        <Image
          className="rounded-full border-2 border-white ml-auto"
          src="/images/04.jpg"
          alt="Get consultant"
          width={40}
          height={40}
        />
      </Link>
    </div>
  );
}
