import React, { useContext } from "react";
import { FaArrowLeft, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../../firebase/firebase.config";

const Login = () => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  console.log("login page", location);
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from);
      })
      .catch((error) => console.log(error));
  };

  const handleGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };
  return (
    <div className="mt-20">
      <div className="hero">
        <div className="card w-full max-w-lg shadow-2xl bg-base-300">
          <h2 className="text-3xl text-teal-400 font-semibold text-center mt-3">
            Please Login!!!
          </h2>
          <form onSubmit={handleLogin} className="card-body">
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
              <input type="submit" value="Login" className="btn bg-teal-400" />
            </div>
          </form>
          <p className="text-center mb-3">
            New Here?{" "}
            <Link to="/register">
              <span className="text-blue-700">Register Now</span>
            </Link>{" "}
          </p>
          <div className="text-center">
            <button
              className="text-center btn outline rounded-lg"
              onClick={handleGoogle}
            >
              <FaGoogle></FaGoogle>
            </button>
          </div>
        </div>
      </div>

      <Link to="/">
        {" "}
        <FaArrowLeft className="bg-teal-400 h-5 w-20 ml-30 items-center"></FaArrowLeft>{" "}
      </Link>
    </div>
  );
};

export default Login;
