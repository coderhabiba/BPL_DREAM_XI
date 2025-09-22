const Subscribe = () => {
  return (
    <>
      <div className="relative container mx-auto top-48 z-1 border-2 border-white rounded-3xl p-6">
        <div className="font-sora relative w-full rounded-2xl px-5 text-center overflow-hidden bg-white container border border-[#1313131a] mx-auto flex flex-col items-center mt-56 lg:py-20 py-12">
          {/* Soft blur effects */}
          <div className="absolute left-10 bottom-[-15%] w-56 h-32 bg-cyan-400 rounded-full mix-blend-hard-light filter blur-2xl opacity-30"></div>
          <div className="absolute -right-32 top-0 w-60 h-40 bg-orange-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30"></div>

          <h3 className="lg:text-[32px] text-xl font-bold text-[#131313] mb-4">
            Subscribe to our Newsletter
          </h3>
          <p className="font-inter lg:text-[20px] text-[14px] font-medium text-[#131313b3] mb-6">
            Get the latest updates and news right in your inbox!
          </p>
          {/* Form */}
          <div className="flex lg:flex-row flex-col justify-center items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-72 px-4 lg:py-[18px] py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <button className="shadow-[inset_4px_4px_20px_0px_rgba(19,19,19,0.3)] lg:px-[30px] px-5 lg:py-[18px] py-2.5 rounded-xl font-bold text-[#131313] text-[16px] bg-gradient-to-r from-pink-300 via-yellow-300 to-yellow-400 hover:bg-gradient-to-r hover:from-pink-500 hover:via-yellow-500 hover:to-yellow-500 transition ease-in-out duration-[1s]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
