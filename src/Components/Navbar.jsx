import React, { useState } from "react";
import Logo from "./Logo";
import Links from "./Links";
import Pages from "./Pages";

export default function Navbar() {
  const [show, setshow] = useState(false);
  return (
    <div className=" bg-white ">
      <nav className=" 2xl:container  bg-rose-400 xl:mx-auto  ">
        {/* For large and Medium-sized Screen */}

        <div className="flex justify-between ">
          <Logo />
          <Pages />
          {/* <div className="md:hidden"> */}
          <Links />
          {/* </div> */}
          <div
            id="bgIcon"
            onClick={() => setshow(!show)}
            className={`focus:outline-yellow-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700  justify-center items-center  py-4 sm:hidden cursor-pointer`}
          >
            <svg
              className={` ${show ? "hidden" : ""} `}
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="#4F46E5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke="#4F46E5"
                strokeLinecap="round"
                strokeWidth="2"
                d="M4 18h16M4 12h16M4 6h16"
              ></path>
            </svg>
            <svg
              className={`${show ? "block" : "hidden"}`}
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="#4F46E5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="#1F2937"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div
          id="MobileNavigation"
          className={`${show ? "block" : "hidden"} sm:hidden mt-4 mx-auto`}
        >
          <div className="flex flex-column items-center justify-center space-x-6">
            <Links />
          </div>
        </div>
      </nav>
    </div>
  );
}
