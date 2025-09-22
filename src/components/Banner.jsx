export default function Banner() {
  return (
    <>
      {/* banner */}
      <div className="rounded-3xl mt-6 lg:container w-[95%] mx-auto py-16 lg:px-[175px] bg-[url('../assets/bg-shadow.png'),linear-gradient(#000)] bg-cover bg-center text-center text-white flex flex-col items-center">
        <div className="mb-6">
          <img
            className="w-full"
            src="../assets/banner-main.png"
            alt="banner-logo"
          />
        </div>
        <h2 className="text-2xl md:text-4xl lg:text-[40px] font-bold mb-4">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h2>
        <p className="text-lg lg:text-2xl font-medium mb-6 text-[#ffffffb3] font-inter italic">
          Beyond Boundaries Beyond Limits
        </p>
        <div className="border border-[#e7fe29] p-2 rounded-2xl">
          <button className="py-3.5 px-5 rounded-[12px] bg-[#e7fe29] hover:bg-[#727203] text-[16px] font-bold text-[#131313] hover:text-white transition ease-in-out duration-[1s] cursor-pointer">
            Claim Free Credit
          </button>
        </div>
      </div>
      {/*end banner */}
    </>
  );
}