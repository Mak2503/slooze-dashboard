import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-5 border-b border-borderPrimary">
      <div className="flex gap-4">
        <div className="p-2 flex justify-center items-center bg-white rounded-md">
          <Image
            src="/business-logo.svg"
            alt="business logo"
            width={30}
            height={30}
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Hello, Rahul</h2>
          <p className="text-sm text-gray-500">ORUE PVT. LTD.</p>
        </div>
        <div className="ml-2">
          <button className="uppercase text-xxs text-white font-bold px-4 py-2 bg-primary rounded-lg">
            Customer
          </button>
        </div>
      </div>
      <div>
        <select className="text-xxs rounded-md border border-borderPrimary p-2 font-bold">
          <option>Last 15 DAYS</option>
          <option>Last 30 DAYS</option>
          <option>Last 60 DAYS</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
