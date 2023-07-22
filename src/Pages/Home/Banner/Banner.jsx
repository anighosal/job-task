import React from "react";
import banner from "../../../assets/albert-vincent-wu-L2nMR8YRCNI-unsplash.jpg";
import "./Banner.css";
import Textra from "react-textra";

const Banner = () => {
  return (
    <>
      <div className="img">
        <img src={banner} alt="" />
        <div className="text">
          <h3 className="text-4xl mb-2 text-zinc-50  text-bold">
            Building Minds, Reserving Futures
          </h3>
          <p>Unlocking a World of Educational Opportunities!</p>
          <div className="banner-input mt-2 text-black">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-success w-full max-w"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
