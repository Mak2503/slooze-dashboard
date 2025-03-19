import { Search } from "lucide-react";
import React from "react";

const Input: React.FC<{ placeholder: string }> = ({ placeholder }) => {
  return (
    <div className="py-1.5 px-2 bg-[#3830B7] flex items-center gap-2 text-white rounded-lg">
      <Search />
      <input
        type="text"
        className="text-[17px] border-none outline-none focus:ring-0 placeholder:text-white"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
