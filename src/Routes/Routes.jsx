import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Colleges from "../Pages/Colleges/Colleges";
import Admission from "../Pages/Admission/Admission";
import MyCollege from "../Pages/MyCollege/MyCollege";

import CollegeDetail from "../Pages/CollegeDetail/CollegeDetail";
import Error from "../Error/Error";
import Login from "../Pages/Login/Login";

import Register from "../Pages/Register/Register";
import Secret from "../Pages/Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import OneCollege from "../Pages/OneCollege/OneCollege";
import AdmissionForm from "../Pages/AdmissionForm/AdmissionForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/colleges",
        element: <Colleges></Colleges>,
      },

      {
        path: "oneCollege/:id",
        element: <OneCollege></OneCollege>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/data/${params.id}`),
      },
      {
        path: "/admission",
        element: <Admission></Admission>,
      },
      {
        path: "/admissionForm",
        element: <AdmissionForm></AdmissionForm>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/data/${params.id}`),
      },
      {
        path: "/mycollege",
        element: <MyCollege></MyCollege>,
      },
      {
        path: "/college/:collegeName",
        element: <CollegeDetail></CollegeDetail>,
      },

      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/secret",
        element: (
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);
