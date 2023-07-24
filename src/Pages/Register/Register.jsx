import React, { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Register = () => {
  const [registerError, setRegisterError] = useState(" ");
  const { createUser } = useContext(AuthContext);
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);

        const auth = getAuth();
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {})
          .catch((error) => {});
        setRegisterError("");
        event.target.reset();
        setSuccess("User has been created succesfully");
      })
      .catch((error) => {
        console.log(error.massesge);
        setRegisterError(error.massesge);
      });
  };
  return (
    <div className="mt-10">
      <div className="hero">
        <div className="card w-full max-w-lg shadow-2xl bg-base-300">
          <h2 className="text-3xl text-teal-400 font-semibold text-center mt-3">
            Register now
          </h2>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
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
                required
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
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-2">
              <input
                type="submit"
                value="Sign up"
                className="btn bg-teal-400"
              />
            </div>
          </form>
          <p className="text-center mb-3">
            Alreay register?{" "}
            <Link to="/login">
              <span className="text-blue-700">Login</span>
            </Link>{" "}
          </p>
        </div>
      </div>

      <Link to="/">
        {" "}
        <FaArrowLeft className="text-blue-700 h-5 w-20 ml-30 items-center"></FaArrowLeft>{" "}
      </Link>
    </div>
  );
};

export default Register;
