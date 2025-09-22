import React from 'react';

function Navbar() {
  return (
    <div>
      {/* navbar */}
      <div className="font-sora mt-12">
        <div className="navbar container mx-auto">
          <div className="navbar-start">
            <a className="">
              <img src="../assets/logo.png" alt="logo" />
            </a>
          </div>

          <div className="navbar-end">
            <div className="dropdown relative">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {' '}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{' '}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content flex flex-col gap-3 bg-[#F14749] rounded-box z-1 mt-3 w-52 p-4 shadow absolute right-2"
              >
                <li>
                  <a className="text-[16px] text-[#131313b3]">Home</a>
                </li>
                <li>
                  <a className="text-[16px] text-[#131313b3]">Fixture</a>
                </li>
                <li>
                  <a className="text-[16px] text-[#131313b3]">Teams</a>
                </li>
                <li>
                  <a className="text-[16px] text-[#131313b3]">Schedules </a>
                </li>
                <li>
                  <a className="btn rounded-xl text-[16px] font-semibold text-[#131313] px-5 py-4">
                    <span id="coin-count">0</span>
                    <span>Coin</span>
                    <div className="w-5 h-5">
                      <img
                        className="w-full h-full"
                        src="../assets/coin.png"
                        alt="coin"
                      />
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            <ul className="hidden lg:flex gap-12 menu menu-horizontal items-center">
              <li>
                <a className="text-[16px] text-[#131313b3]">Home</a>
              </li>
              <li>
                <a className="text-[16px] text-[#131313b3]">Fixture</a>
              </li>
              <li>
                <a className="text-[16px] text-[#131313b3]">Teams</a>
              </li>
              <li>
                <a className="text-[16px] text-[#131313b3]">Schedules </a>
              </li>
              <li>
                <a className="btn rounded-xl text-[16px] font-semibold text-[#131313] px-5 py-4">
                  <span>0</span>
                  <span>Coin</span>
                  <div className="w-5 h-5">
                    <img
                      className="w-full h-full"
                      src="../assets/coin.png"
                      alt="coin"
                    />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* navbar */}
    </div>
  );
}

export default Navbar;
