import React from "react";
import banner from "../../../assets/albert-vincent-wu-L2nMR8YRCNI-unsplash.jpg";
import "./Banner.css";

import { Animation, Typer } from "react-easy-animations";

const Banner = () => {
  return (
    <>
      <div className="img">
        <img src={banner} alt="" />

        <div className="text">
          <Animation
            type="animation_type"
            duration="1000ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="infinite"
            fillMode="none"
          >
            <h3 className="text-4xl mb-2 text-zinc-50 font-bold">
              Building Minds, Reserving Futures
            </h3>
            <p className="text-teal-400">
              Unlocking a World of Educational Opportunities!
            </p>
          </Animation>

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
