import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex border-b border-borderPrimary justify-between p-5 items-center">
      <div className="flex gap-4">
        <div className="flex bg-white justify-center p-2 rounded-md items-center">
          <Image
            src="/business-logo.svg"
            alt="business logo"
            width={30}
            height={30}
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Hello, Rahul</h2>
          <p className="text-gray-500 text-sm">ORUE PVT. LTD.</p>
        </div>
        <div className="ml-2">
          <button className="bg-primary rounded-lg text-white text-xxs font-bold px-4 py-2 uppercase">
            Customer
          </button>
        </div>
      </div>
      <div>
        <select className="border border-borderPrimary p-2 rounded-md text-xs font-bold">
          <option>Last 15 DAYS</option>
          <option>Last 30 DAYS</option>
          <option>Last 60 DAYS</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
