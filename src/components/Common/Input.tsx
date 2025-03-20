import { Search } from "lucide-react";

const Input: React.FC<{ placeholder: string }> = ({ placeholder }) => {
  return (
    <div className="flex bg-[#3830B7] rounded-lg text-white gap-2 items-center px-2 py-1.5">
      <Search size={20} />
      <input
        type="text"
        className="border-none text-[17px] focus:ring-0 min-w-[350px] outline-none placeholder:text-white"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
