import React from "react";
import CategoryButton from "./CategoryButton";

const Header = () => {
  return (
    <div className="bg-gray-400 flex ">
      <img
        alt="logo"
        src="https://www.logo.wine/a/logo/Zara_(retailer)/Zara_(retailer)-Logo.wine.svg"
        className="w-20 h-55 m-4 p-2"
      />
      <CategoryButton />
      <input
        type="text"
        placeholder="Search Product"
        className="rounded-lg bg-white m-4 p-2 w-[20%]"
      ></input>
      <div>
        <button className="m-6">
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="none"
            viewBox="4 0 24 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"
            />
          </svg>
          <span className="mb-2 p-4">Login</span>
        </button>
      </div>
      <button className="w-[12%] bg-gray-500 h-18 mt-4">
        <svg
          className="w-16 h-14 mt-4 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z"
            clipRule="evenodd"
          />
        </svg>
        <label className="font-bold text-black m-4">Register</label>
        </button>

        <button className="mx-20">
        <svg className="w-12 h-12 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fillRule="evenodd" d="M4 4a1 1 0 0 1 1-1h1.5a1 1 0 0 1 .979.796L7.939 6H19a1 1 0 0 1 .979 1.204l-1.25 6a1 1 0 0 1-.979.796H9.605l.208 1H17a3 3 0 1 1-2.83 2h-2.34a3 3 0 1 1-4.009-1.76L5.686 5H5a1 1 0 0 1-1-1Z" clipRule="evenodd"/>
</svg>

        </button>
    </div>
  );
};

export default Header;
