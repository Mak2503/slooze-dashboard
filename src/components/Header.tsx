import Image from "next/image";

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
        <button className="bg-primary h-max rounded-lg text-white text-xxs font-bold ml-2 px-4 py-2 uppercase">
          Customer
        </button>
      </div>
      <select className="border border-borderPrimary p-2 rounded-md text-xs font-bold">
        <option>Last 15 DAYS</option>
        <option>Last 30 DAYS</option>
        <option>Last 60 DAYS</option>
      </select>
    </div>
  );
};

export default Header;
