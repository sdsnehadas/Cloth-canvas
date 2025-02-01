import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { swipeLeftcategory, swipeRightcategory } from "../utils/categorySlice";
import { useDispatch } from "react-redux";

const VideoSlides = ({ videoData }) => {

  const [currentSrc, setCurrentSrc] = useState(videoData.src);
  const [fade, setFade] = useState(false);
  const dispatch = useDispatch();

  useEffect(()=>{
    setFade(true);
    setTimeout(()=>{
      setCurrentSrc(videoData.src)
      setFade(false);
    },500)
  },[videoData])


  //TO-DO SWIPING NOT WORKING
  const handlers = useSwipeable({
    onSwipedLeft: () => console.log("Swiped Left!"),
    onSwipedRight: () =>  dispatch(swipeRightcategory()),
    trackMouse: true, // Enables mouse swiping
    preventScrollOnSwipe: true
  });


  return (
    <div className="relative w-screen h-screen no-scroll" {...handlers}>
      <video
        className="absolute top-0 left-0 w-screen h-screen object-cover"
        key={currentSrc}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={currentSrc} type="video/mp4" />
      </video>
      <div className={`absolute inset-0 bg-black bg-opacity-30 flex flex-col items-start justify-center text-center p-4 text-white transition-opacity duration-500 ${fade? "opacity-0" : "opacity-100"}`} >
        <h1 className=" text-4xl font-bold drop-shadow-lg">
          {videoData.title}{" "}
        </h1>
        <br />
        <p className=" text-xl font-bold drop-shadow-md">
          {videoData.description}{" "}
        </p>
      </div>
    </div>
  );
};

export default VideoSlides;
