import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Sync() {
  return (
    <div className="sync mb-10">
      <div className="flex flex-col gap-5 px-6 border border-red-500 rounded-3xl">
        <Image
          src="/images/sync.png"
          alt="Sync"
          width={150}
          height={150}
          className="mx-auto mt-5 object-contain"
        />
        <h3 className="text-sm text-center">Sync with your medical record</h3>
        <div className="text-center relative">
          Keep your doctor informed about the condition
        </div>
        <Link
          href="/"
          className="w-5/6 mx-auto text-center mt-auto relative p-2 bg-orange-600 text-white text-lg rounded-2xl -bottom-5 hover:bg-orange-700"
        >
          Sync
        </Link>
      </div>
    </div>
  );
}
