import React, { useState } from "react";
import { sliderItems } from "../utils/dummydata";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  console.log("dummy data", sliderItems);
  return (
    <div className="snap-x flex  snap-mandatory overflow-x-auto  no-scrollbar scroll-smooth">
      {sliderItems.map((slide) => {
        return (
          <div className="snap-center flex-shrink-0 relative min-w-screen h-[80vh] snap-always">
            <img className="w-full" src={slide.image} alt="slide-img" />
            <div className="absolute px-10 left-0 top-0 flex flex-col justify-center items-center text-center text-white bg-gradient-to-r from-gray-800/90 to-transparent">
              <h2 className="text-4xl sm:text-6xl font-bold mb-10">
                {slide.title}
              </h2>
              <p className="text-xl mb-10">{slide.desc}</p>
              <button className="w-1/2 items-center justify-center px-5 py-2.5 m-1 bg-gray-400 text-white text-2xl font-medium rounded-md shadow hover:(bg-gray-900 shadow-md)">
                Shop now
              </button>
            </div>
            <div>
                <div className="z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                  {sliderItems.map((slide) => {
                    return (
                      <button
                        className="w-3 h-3 rounded-full bg-white"
                        aria-current="true"
                        aria-label={slide.id}
                      ></button>
                    );
                  })}
                </div>
                <button
                  type="button"
                  className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                  data-carousel-prev
                >
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                      className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 1 1 5l4 4"
                      />
                    </svg>
                    <span className="sr-only">Previous</span>
                  </span>
                </button>
                <button
                  type="button"
                  className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                  data-carousel-next
                >
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                      className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                    <span className="sr-only">Next</span>
                  </span>
                </button>
              </div>
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
