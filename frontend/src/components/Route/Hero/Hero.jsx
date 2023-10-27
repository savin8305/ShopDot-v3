import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] bg-black bg-center bg-no-repeat ${styles.noramlFlex}`}
    >
      <div
        className={`${styles.section} w-[90%] 800px:w-[60%] flex justify-between items-center`}
      >
        <div className="w-[70%] p-6 text-white">
          <h1 className="text-4xl 800px:text-6xl font-semibold capitalize mb-4">
            Best Collection for <br /> Home Decoration
          </h1>

          <Link to="/products" className="inline-block mt-6">
            <button className="py-2 px-6 bg-[#2b2bff] text-white text-lg font-semibold rounded-full hover:bg-[#1e1eb7] transition duration-300">
              Shop Now
            </button>
          </Link>
        </div>

        <div className="w-[30%]"> </div>
      </div>
      <div className="w-[50%] mr-10">
      <video
            preload="none"
            playsinline=""
            loop="loop"
            muted="muted"
            className="font-space-grotesk text-base font-normal text-white outline-none box-border relative  flex-grow-0 flex-shrink-0 border-2 rounded-[8px] rounded-tl-[50px] rounded-br-[50px]  mr-4"
            autoplay=""
          >
            
            <source
              src="https://res.cloudinary.com/drk8b0kev/video/upload/v1698248359/yuoibqklgn5aoqs57orj.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
      </div>
    </div>
  );
};

export default Hero;
