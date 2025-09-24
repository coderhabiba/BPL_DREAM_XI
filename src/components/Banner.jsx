import { useLocation } from 'react-router-dom';

export default function Banner() {
  const location = useLocation(); // বর্তমান route

  // route অনুযায়ী button background set
  const isAvailable = location.pathname === '/';
  const buttonBgClass = isAvailable
    ? 'bg-[#e7fe29] hover:bg-[#727203] hover:text-white'
    : 'bg-gradient-to-r from-pink-300 via-yellow-300 to-yellow-400 hover:bg-gradient-to-r hover:from-pink-500 hover:via-yellow-500 hover:to-yellow-500';

  return (
    <div className="rounded-3xl mt-6 lg:container w-[95%] mx-auto py-16 lg:px-[175px] bg-[url('../assets/bg-shadow.png'),linear-gradient(#000)] bg-cover bg-center text-center text-white flex flex-col items-center">
      <div className="mb-6">
        <img
          className="w-full"
          src="https://i.ibb.co.com/JjS5GkXY/banner-main.png"
          alt="banner-logo"
        />
      </div>
      <h2 className="text-2xl md:text-4xl lg:text-[40px] font-bold mb-4">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h2>
      <p className="text-lg lg:text-2xl font-medium mb-6 text-[#ffffffb3] font-inter italic">
        Beyond Boundaries Beyond Limits
      </p>
      <div
        className={`border ${
          isAvailable ? 'border-[#e7fe29]' : 'border-white'
        } p-2 rounded-2xl`}
      >
        <button
          className={`py-3.5 px-5 rounded-[12px] ${buttonBgClass} text-[16px] font-bold text-[#131313] transition ease-in-out duration-[1s] cursor-pointer`}
        >
          Claim Free Credit
        </button>
      </div>
    </div>
  );
}
