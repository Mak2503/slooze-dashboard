import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-3 border-b border-[#E5E5E5]">
      <div className="flex gap-4">
        <div className="p-2 bg-white rounded-md">
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
          <button className="uppercase text-[11px] text-white font-bold px-4 py-2 bg-[#4F45E4] rounded-lg">
            Customer
          </button>
        </div>
      </div>
      <div>
        <select className="text-[11px] rounded-md border border-[#E5E5E5] p-2 font-bold">
          <option>Last 15 DAYS</option>
          <option selected>Last 30 DAYS</option>
          <option>Last 60 DAYS</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
