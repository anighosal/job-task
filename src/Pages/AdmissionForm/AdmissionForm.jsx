import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { useLoaderData, useLocation } from "react-router-dom";

const AdmissionForm = () => {
  const { _id, collegeName, collegeImage } = useLoaderData();

  const { user } = useContext(AuthContext);

  const handleAdmission = (event) => {
    event.preventdefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const subject = form.subject.value;
    const number = form.number.value;

    const address = form.address.value;
    const date = form.date.value;
    const confirm = {
      candidate: name,
      email,
      photo,
      subject,
      number,
      address,
      date,
    };
    console.log(confirm);
  };
  const handleConfirm = () => {};
  return (
    <div className="py-[150px] bg-slate-400 px-[100px]">
      <h2 className="text-teal-600 text-center font-bold text-3xl">
        {collegeName}
      </h2>
      <form onSubmit={handleAdmission}>
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
            defaultValue={user?.email}
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
          <div className="form-control mt-6">
            <button
              className="btn btn-block bg-teal-400 text-blue-500 font-bold text-2xl"
              onClick={handleConfirm}
            >
              Admission Confirm
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdmissionForm;
