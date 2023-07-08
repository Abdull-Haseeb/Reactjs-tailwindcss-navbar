import React from "react";

export default function SignBtn() {
  return (
    <div>
      {/* Logo End */}
      <div className="hidden sm:flex flex-row space-x-4">
        <button className="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-indigo-700 bg-white border border-indigo-700 focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center">
          Sign Up
        </button>
        <button className="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-white bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-600 hover:bg-indigo-600 duration-150 justify-center items-center">
          Sign In
        </button>
      </div>
    </div>
  );
}
