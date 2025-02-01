import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { showSubCategories } from "../utils/categorySlice";

const MenuList = () => {

  const dispatch = useDispatch();
  const showSubCategory = useSelector(store=>store.category.showSubCategoryContent)

  return (
    <div className="flex justify-center items-end absolute pb-4  bottom-4 left-0 w-full space-x-20 backdrop-blur-md z-10">
      <button className="p-3 m-2  rounded-full border-2 border-gray-300 hover:bg-gray-100 transition">
        <svg
          width="50"
          height="50"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M25.7995 25.138L18.4995 25.1302V18.6667H13.4995V25.1302H6.19922V13.4557L15.9993 5.28775L25.7995 13.4557V25.138Z"
            fill="black"
          ></path>
        </svg>
      </button>
      <button className="p-3 m-2 rounded-full border-2 border-gray-300 hover:bg-gray-100 transition"  onClick={() => {
                      dispatch(showSubCategories());
                    }}>
        {!showSubCategory? <svg
          width="52"
          height="52"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M27.8276 28.5752L21.7378 22.4863C19.979 23.9619 17.7129 24.8516 15.2427 24.8516C9.66309 24.8516 5.12402 20.3125 5.12402 14.7334C5.12402 9.1543 9.66309 4.61523 15.2427 4.61523C20.8223 4.61523 25.3613 9.1543 25.3613 14.7334C25.3613 17.124 24.5283 19.3232 23.1367 21.0566L29.2417 27.1611L27.8276 28.5752ZM15.2427 6.61523C10.7661 6.61523 7.12402 10.2568 7.12402 14.7334C7.12402 19.21 10.7661 22.8516 15.2427 22.8516C19.7192 22.8516 23.3613 19.21 23.3613 14.7334C23.3613 10.2568 19.7192 6.61523 15.2427 6.61523Z"
            fill="#000"
          ></path>
        </svg> : <svg className="bg-gray-500 rounded-full" width="52" height="52" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.6357 8.63672L23.3633 7.36328L15.9995 14.7271L8.63574 7.36328L7.36328 8.63672L14.7266 16L7.36328 23.3633L8.63574 24.6367L15.9995 17.2729L23.3633 24.6367L24.6357 23.3633L17.2725 16L24.6357 8.63672Z" fill="#ffff"></path></svg>}
      </button>
      <button className="p-3 m-2 rounded-full border-2 border-gray-300 hover:bg-gray-100 transition">
        <svg
          width="50"
          height="50"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path
            d="M20.8129 13.7902C21.4753 12.8404 21.8667 11.6884 21.8667 10.4453C21.8667 7.20996 19.2349 4.57812 16 4.57812C12.7651 4.57812 10.1338 7.20996 10.1338 10.4453C10.1338 11.6884 10.5251 12.8404 11.1874 13.7903L6.9668 16.7676V25.6211H25.0332V16.7676L20.8129 13.7902ZM16 6.17773C18.3525 6.17773 20.2671 8.0918 20.2671 10.4453C20.2671 12.7979 18.3525 14.7119 16 14.7119C13.6475 14.7119 11.7334 12.7979 11.7334 10.4453C11.7334 8.0918 13.6475 6.17773 16 6.17773ZM23.4336 24.0215H8.56641V17.5977L12.28 14.9772C13.2932 15.8104 14.589 16.3115 16 16.3115C17.4111 16.3115 18.7071 15.8103 19.7203 14.9772L23.4336 17.5977V24.0215Z"
            fill="black"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default MenuList;
