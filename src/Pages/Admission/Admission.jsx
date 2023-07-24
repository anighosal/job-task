import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import AdmissionCard from "./AdmissionCard";

const Admission = () => {
  const [nameColleges, setNameColleges] = useState([]);

  useEffect(() => {
    fetch("https://job-task-server-seven.vercel.app/data")
      .then((res) => res.json())
      .then((data) => setNameColleges(data));
  }, []);
  return (
    <div className="py-[100px] text-center">
      <h3 className="text-3xl font-bold mb-10 text-teal-400">
        Some College are Here!!!
      </h3>
      <div className="mt-8 gap-10">
        {nameColleges.map((nameCollege) => (
          <AdmissionCard
            key={nameCollege._id}
            nameCollege={nameCollege}
          ></AdmissionCard>
        ))}
      </div>
    </div>
  );
};

export default Admission;
