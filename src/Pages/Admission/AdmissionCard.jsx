import React from "react";
import { Link } from "react-router-dom";

const AdmissionCard = ({ nameCollege }) => {
  const { collegeName, _id } = nameCollege;
  return (
    <div className="gap-10">
      <Link to={`/admissionForm/${_id}`}>
        <button className="btn inline-block w-full text-4xl font-bold text-base-100 bg-teal-400">
          {collegeName}
        </button>
      </Link>
    </div>
  );
};

export default AdmissionCard;
