// CollegeDetails.js
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const CollegeDetail = () => {
  const { collegeName } = useParams();
  // const loader = useLoaderData();
  const [college, setCollege] = useState([]);

  useEffect(() => {
    fetch("https://job-task-server-seven.vercel.app/data")
      .then((res) => res.json())
      .then((data) => {
        const selectedCollege = data.find(
          (college) => college.collegeName === collegeName
        );
        if (selectedCollege) {
          setCollege(selectedCollege);
        }
      })
      .catch((error) => {
        console.error("Error fetching college data", error);
      });
  }, [collegeName]);

  // if (!college) {
  //   return <div>College not found.</div>;
  // }

  return (
    <div className="mb-10 mt-10">
      <h1 className="text-center font-bold text-3xl text-teal-400">
        College Details
      </h1>
      <div className="card lg:card-side bg-base-500 shadow-xl">
        <figure>
          <img
            className="h-80 w-[700px] rounded-sm"
            src={college.collegeImage}
            alt={college.collegeName}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{college.collegeName}</h2>
          <p>Event Details: {college.eventsDetails}</p>
          <p>Admission process: {college.admissionProcess}</p>
          <p>Reasearch works: {college.researchWorks}</p>
          <p>{college.sportsCategories}</p>
        </div>
      </div>
    </div>
  );
};

export default CollegeDetail;
