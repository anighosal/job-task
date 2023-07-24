import React from "react";
import "./CollegeCard.css";
import { Link } from "react-router-dom";

const CollegeCard = ({ college }) => {
  const {
    collegeName,
    collegeImage,
    admissionDates,
    events,
    researchHistory,
    sports,
  } = college;

  return (
    <div>
      <div className="card card-compact w-96 h-[500px] bg-base-100 shadow-xl">
        <figure className="card-image">
          <img className="border-solid h-80" src={collegeImage} />
        </figure>
        <div className="card-body">
          <h2 className="text-center font-bold text-xl">{collegeName}</h2>
          <h4 className="font-semibold text-slate-700">{researchHistory}</h4>
          <p className="font-bold text-red-400">
            Admission Date: {admissionDates}
          </p>
          <p>
            <span className="font-bold">Events</span>:{" "}
            <span className="font-semibold text-cyan-500">{events}</span>
          </p>
          <p>
            <span className="font-bold">Sports</span>:{" "}
            <span className="font-semibold text-cyan-500">{sports}</span>
          </p>

          <Link to={`/college/${collegeName}`}>
            <button className="bg-teal-400 btn inline-block min-w-full">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;
