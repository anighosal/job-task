import React from "react";
import { Link } from "react-router-dom";

const CollegesCard = ({ singleCollege }) => {
  const {
    _id,
    collegeName,
    collegeImage,
    admissionDates,
    collegeRating,
    researchCount,
  } = singleCollege;
  return (
    <div>
      <div className="card card-compact w-96 h-[500px] bg-base-100 shadow-xl">
        <figure className="card-image">
          <img className="border-solid h-80" src={collegeImage} />
        </figure>
        <div className="card-body">
          <h2 className="text-center font-bold text-xl">{collegeName}</h2>

          <h4 className="font-semibold text-slate-700">
            Research Number: {researchCount}
          </h4>
          <p className="text-yellow-400 font-bold text-lg">
            Ratings: {collegeRating}
          </p>
          <p className="font-bold text-red-400">
            Admission Date: {admissionDates}
          </p>

          <Link to={`/oneCollege/${_id}`}>
            <button className="bg-teal-400 btn inline-block min-w-full">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CollegesCard;
