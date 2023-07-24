import React from "react";
import { useLoaderData } from "react-router-dom";

const OneCollege = () => {
  const colleges = useLoaderData();
  console.log(colleges);
  const {
    _id,
    collegeName,
    collegeImage,
    admissionDates,
    collegeRating,
    researchCount,
    events,
    sports,
  } = colleges;

  fetch("http://localhost:5000/data/${params.id}")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
  return (
    <div className="pt-[100px] pl-[400px]">
      <div className="card card-compact w-96 bg-base-100 shadow-xl mb-10">
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
          <p className="font-bold text-red-400">Events: {events}</p>
          <p className="font-bold text-red-400">Sports: {sports}</p>
        </div>
      </div>
    </div>
  );
};

export default OneCollege;
