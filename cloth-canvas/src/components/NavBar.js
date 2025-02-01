import React, { useState } from "react";
import {categorData} from '../utils/constants';
import { useDispatch, useSelector } from "react-redux";
import { addSelectedCategory } from "../utils/categorySlice";


const NavBar = () => {

  const currentCategory =  useSelector(store=>store.category.selectedcategory)

  const dispatch = useDispatch();

  return (
    <div className="absolute text-xl text-black flex top-0 left-0 w-full p-4 bg-gradient-to-b from-black/70 to-transparent z-10 ">
      <div className="mx-10 pt-8 cursor-pointer">
        <a href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 90 40"
            width="90"
            height="40"
            role="img"
            aria-label="ユニクロ｜UNIQLO"
          >
            <title>ユニクロ｜UNIQLO</title>
            <path fill="red" d="M50 0h40v40H50zM0 0h40v40H0z"></path>
            <g fill="#fff">
              <path d="M79.48 5.47h2.53v12.64h-2.53zM63.47 13.9a4.21 4.21 0 0 1-8.42 0V5.47h2.53v8.43a1.68 1.68 0 1 0 3.36 0V5.47h2.53zM75.26 34.53h-8.42V21.89h2.53V32h5.89v2.53zM75.26 18.11h-2.53l-3.36-7.22v7.22h-2.53V5.47h2.53l3.36 7.22V5.47h2.53v12.64zM59.26 21.89a4.21 4.21 0 0 0-4.21 4.22v4.21a4.21 4.21 0 0 0 4.21 4.21 4.34 4.34 0 0 0 .82-.07l.86 2.6h2.53l-1.25-3.75a4.2 4.2 0 0 0 1.25-3v-4.2a4.21 4.21 0 0 0-4.21-4.22m1.68 8.43a1.68 1.68 0 1 1-3.36 0v-4.21a1.68 1.68 0 1 1 3.36 0zM80.74 21.89a4.22 4.22 0 0 0-4.22 4.22v4.21a4.21 4.21 0 0 0 8.42 0v-4.21a4.21 4.21 0 0 0-4.21-4.22m1.68 8.43a1.68 1.68 0 0 1-3.37 0v-4.21a1.68 1.68 0 0 1 3.37 0z"></path>
              <g>
                <path d="M22.74 15.16H34.1v2.52H22.74zM24 5.47h8.84V8H24zM14.74 5.47H7.15V8h5.06v7.16H5.9v2.52h11.36v-2.52h-2.52V5.47zM22.74 22.31v12.22H34.1V22.31zM31.57 32h-6.31v-7.16h6.31zM7.15 22.31l-1.28 6.12h2.52l.76-3.59h5.07L12.73 32H5.14l-.51 2.53h10.11l2.52-12.22H7.15z"></path>
              </g>
            </g>
          </svg>
        </a>
      </div>
      <div className="pt-5 font-medium text-xl mx-[25%]">
        {categorData.map((category, i) => {
          return (
            <button
              key={i}
              className={`m-3 p-2 transition-colors text-white ${
                currentCategory.label === category.label
                  ? "border-b-2 border-gray-600"
                  : "border-b-0"
              }`}
              onClick={() => {
                dispatch(addSelectedCategory(category));
              }}
            >
              {category.label.toUpperCase()}
            </button>
          );
        })}
      </div>
      <div className="w-14 pt-5 m-2 cursor-pointer">
        <svg
          className="hover:fill-current hover:text-slate-400"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <circle cx="12" cy="12" r="8" stroke="#222222"></circle>{" "}
            <path
              d="M18.2075 6.78485C17.4747 7.46088 16.5544 8.00912 15.5106 8.39144C14.4668 8.77376 13.3244 8.981 12.163 8.99875C11.0016 9.01651 9.84894 8.84434 8.7852 8.49423C7.72146 8.14412 6.77215 7.62447 6.00325 6.97139"
              stroke="#222222"
            ></path>{" "}
            <path
              d="M18.3222 17.3235C17.5826 16.608 16.6367 16.0274 15.5553 15.6251C14.474 15.2227 13.2853 15.0091 12.0783 15.0003C10.8713 14.9914 9.67723 15.1875 8.58561 15.5739C7.494 15.9603 6.53311 16.5269 5.77495 17.2314"
              stroke="#222222"
            ></path>{" "}
            <path d="M12 4V20" stroke="#222222"></path>{" "}
            <path d="M20 12H4" stroke="#222222"></path>{" "}
          </g>
        </svg>{" "}
      </div>
      <div className="w-14 pt-5 m-2">
        <svg
          className="hover:fill-current hover:text-slate-400"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M15.7 4C18.87 4 21 6.98 21 9.76C21 15.39 12.16 20 12 20C11.84 20 3 15.39 3 9.76C3 6.98 5.13 4 8.3 4C10.12 4 11.31 4.91 12 5.71C12.69 4.91 13.88 4 15.7 4Z"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>{" "}
          </g>
        </svg>
      </div>
      <div className="w-14 pt-5 m-2 hover:fill-current hover:text-slate-400">
        <svg
          className="hover:fill-current hover:text-slate-400"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g
            id="SVGRepo_iconCarrier"
            className="hover:fill-current hover:text-slate-400"
          >
            {" "}
            <path
              d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z"
              stroke="#1C274C"
              strokeWidth="1.5"
            ></path>{" "}
            <path
              d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z"
              stroke="#1C274C"
              strokeWidth="1.5"
            ></path>{" "}
            <path
              d="M13 13V11M13 11V9M13 11H15M13 11H11"
              stroke="#1C274C"
              strokeWidth="1.5"
              strokeLinecap="round"
            ></path>{" "}
            <path
              d="M2 3L2.26121 3.09184C3.5628 3.54945 4.2136 3.77826 4.58584 4.32298C4.95808 4.86771 4.95808 5.59126 4.95808 7.03836V9.76C4.95808 12.7016 5.02132 13.6723 5.88772 14.5862C6.75412 15.5 8.14857 15.5 10.9375 15.5H12M16.2404 15.5C17.8014 15.5 18.5819 15.5 19.1336 15.0504C19.6853 14.6008 19.8429 13.8364 20.158 12.3075L20.6578 9.88275C21.0049 8.14369 21.1784 7.27417 20.7345 6.69708C20.2906 6.12 18.7738 6.12 17.0888 6.12H11.0235M4.95808 6.12H7"
              stroke="#1C274C"
              strokeWidth="1.5"
              strokeLinecap="round"
            ></path>{" "}
          </g>
        </svg>
      </div>
    </div>
  );
};

export default NavBar;
