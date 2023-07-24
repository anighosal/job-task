import React, { useEffect, useState } from "react";
import CollegesCard from "./CollegesCard";

const Colleges = () => {
  const [allCollege, setAllCollege] = useState([]);

  useEffect(() => {
    fetch("https://job-task-server-seven.vercel.app/data")
      .then((res) => res.json())
      .then((data) => setAllCollege(data));
  }, []);

  return (
    <div className="pt-[100px] text-center">
      <h3 className="text-3xl font-bold mb-10 text-teal-400">
        Some College are Here!!!
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
        {allCollege.map((singleCollege) => (
          <CollegesCard
            key={singleCollege._id}
            singleCollege={singleCollege}
          ></CollegesCard>
        ))}
      </div>
    </div>
  );
};

export default Colleges;
