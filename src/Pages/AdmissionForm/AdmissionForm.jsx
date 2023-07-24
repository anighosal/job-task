import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { useLoaderData } from "react-router-dom";

const AdmissionForm = () => {
  const service = useLoaderData();
  const { _id, collegeName, collegeImage } = service;

  const { user } = useContext(AuthContext);

  const handleAdmission = (event) => {
    event.preventdefault();
  };
  return (
    <div>
      <h2>{collegeName}</h2>
      <form>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="photoURL"
            name="photo"
            placeholder="photoURL"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Subject</span>
          </label>
          <input type="text" name="subject" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input
            type="number"
            name="number"
            placeholder="number"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Address</span>
          </label>
          <input
            type="address"
            name="address"
            placeholder="address"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date of Birth</span>
          </label>
          <input
            type="date"
            name="date"
            placeholder="date"
            className="input input-bordered"
          />
        </div>
        <div className="form-control mt-6">
          <input
            className="btn bg-teal-400 inline-block text-white"
            type="submit"
            value="Admission Confirm"
          />
        </div>
      </form>
    </div>
  );
};

export default AdmissionForm;
