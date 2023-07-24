import React from "react";
import img from "../assets/404_animation.gif";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex items-center">
      <img src={img} alt="" />
      <Link to="/">
        <button className="btn bg-teal-400">Back to home</button>
      </Link>
    </div>
  );
};

export default Error;
