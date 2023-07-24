import React, { useEffect, useState } from "react";
import CollegeCard from "../CollegeCard/CollegeCard";

const TopCollege = () => {
  const [colleges, setColleges] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/data")
      .then((res) => res.json())
      .then((data) => {
        setColleges(data);
      });
  }, []);

  return (
    <div className="mt-8 text-center">
      <h3 className="text-3xl font-bold text-teal-400">
        Discover Your Path to Success
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
        {colleges.slice(0, 3).map((college) => (
          <CollegeCard
            key={college.collegeName}
            college={college}
          ></CollegeCard>
        ))}
      </div>
    </div>
  );
};

export default TopCollege;
