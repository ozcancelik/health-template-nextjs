import React from "react";

export default function Prescribed() {
  return (
    <div className="prescibed mt-10 lg:mt-0 ">
      <div className="flex items-center flex-col sm:flex-row w-full gap-4 mt-6 lg:mt-0">
        <div className="w-full lg:w-1/4 sm:w-1/2 ">
          <h2 className="text-xl">Prescibed Examination and Medications</h2>
        </div>

        <div className="w-full lg:w-1/4 sm:w-1/2 duration-300 hover:shadow-md rounded-xl px-4 py-2 lg:p-5">
          <div className="inline-block text-xs bg-orange-600 text-white px-4 py-2 rounded-3xl mb-2">
            TODAY
          </div>
          <h3 className="text-sm">Back MRI</h3>
          <p className="font-light">Park Lane 25, Royal Clinic</p>
        </div>
        <div className="w-full lg:w-1/4 sm:w-1/2 duration-300 hover:shadow-md rounded-xl0 px-4 py-2  lg:p-5">
          <div className="inline-block text-xs bg-orange-100 text-orange-600 px-4 py-2 rounded-3xl mb-2">
            21 AUG
          </div>
          <h3 className="text-sm">General exam</h3>
          <p className="font-light">Park Lane 25, Dr. Watson</p>
        </div>
        <div className="w-full lg:w-1/4 sm:w-1/2 duration-300 hover:shadow-md rounded-xl px-4 py-2 lg:p-5">
          <div className="inline-block text-xs bg-orange-100 text-orange-600 px-4 py-2  rounded-3xl mb-2">
            25 OCT
          </div>
          <h3 className="text-sm">Nerveous system</h3>
          <p className="font-light">Park Lane 25, Royal Clinic</p>
        </div>
      </div>
    </div>
  );
}
