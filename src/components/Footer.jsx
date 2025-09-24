

const Footer = () => {
  return (
    <div className="pt-[240px] bg-[#06091a] mt-72 relative">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between mb-16">
          <img src="https://i.ibb.co.com/GvnTqWhb/logo-footer.png" alt="logo" />
        </div>
        <div className="flex lg:flex-row flex-col lg:gap-0 gap-10 justify-between">
          <div className="about">
            <h4 className="text-[18px] font-semibold text-white mb-4">
              About Us
            </h4>
            <p className="text-[#ffffff99]">
              We are a passionate team <br /> dedicated to providing the best{' '}
              <br /> services to our customers.
            </p>
          </div>

          <div className="links">
            <h4 className="text-[18px] font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="ml-5 flex flex-col gap-2">
              <li className="list-disc text-[#ffffff99]">
                <a className="text-[#ffffff99]" href="">
                  Home
                </a>
              </li>
              <li className="list-disc text-[#ffffff99]">
                <a className="text-[#ffffff99]" href="">
                  Services
                </a>
              </li>
              <li className="list-disc text-[#ffffff99]">
                <a className="text-[#ffffff99]" href="">
                  About
                </a>
              </li>
              <li className="list-disc text-[#ffffff99]">
                <a className="text-[#ffffff99]" href="">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="subscribe">
            <h4 className="text-[18px] font-semibold text-white mb-4">
              Subscribe
            </h4>
            <p className="text-[#ffffff99]">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="join mt-5">
              <input
                className="input join-item active:ring-0 active:border-0 active:outline-0 focus:ring-0 focus:border-0 focus:outline-0 rounded-l-xl placeholder:text-[#13131366] placeholder:text-[16px] py-3.5 pl-[30px]"
                placeholder="Enter your email"
              />
              <button className="join-item py-2 px-[30px] bg-gradient-to-r from-yellow-300 via-yellow-400 to-pink-300 rounded-r-xl font-bold text-[#040d11] cursor-pointer hover:from-yellow-500 hover:via-yellow-600 hover:to-pink-700 transition ease-in-out duration-[1s]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer border-t border-t-[#ffffff26] py-8 flex justify-center items-center text-white mt-[72px]">
        <p>@2024 Your Company All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;