import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { authenticate, isAuthenticated, signin } from "./helper/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignIn, faSignInAlt } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [values, setValues] = useState({
    loginId: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: false,
  });

  const { loginId, password, error, loading, didRedirect } = values;

  const onhandleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    signin({ loginId, password }).then((data) => {
      if (data.errors) {
        return setValues({ ...values, error: data.errors });
      }
      if (data.error) {
        return setValues({ ...values, error: data.error });
      } else {
        authenticate(data, () => {
          setValues({
            ...values,
            loginId: "",
            password: "",
            error: "",
            loading: true,
            didRedirect: true,
          });
        });
      }
    });
  };

  const errorMessage = () => {
    return (
      <div
        className="alert alert-warning"
        style={{ display: error ? "" : "none" }}
      >
        {error}
      </div>
    );
  };

  const performRedirect = () => {
    if (didRedirect) {
      if (
        isAuthenticated() &&
        isAuthenticated().user.PersonalDetails.role === 1
      ) {
        return <Navigate to="/dashboard" />;
      }
      if (
        isAuthenticated() &&
        isAuthenticated().user.PersonalDetails.role === 2
      ) {
        return <Navigate to="/dashboard" />;
      }
      if (
        isAuthenticated() &&
        isAuthenticated().user.PersonalDetails.role === 3
      ) {
        return <Navigate to="/dashboard" />;
      } else {
        return <Navigate to="/" />;
      }
    }
    if (isAuthenticated()) {
      return <Navigate to="/" />;
    }
  };

  return (
    <>
      <div className="bgScreen h-screen w-full">
        <div className="flex justify-center items-center h-screen">
          {errorMessage()}
          <div className="lg:m-auto items-center bg-white p-4 rounded shadow-2xl loginBox">
            <div className="flex justify-center">
              <div className="linebox-1"></div>
              <span className="text-xl items-center m-auto">
                <b className="font-bold">Sign In</b>
              </span>
              <div className="linebox-2"></div>
            </div>
            <label class="block">
              <input
                type="loginId"
                name="loginId"
                value={loginId}
                onChange={onhandleChange("loginId")}
                class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="User Name"
              />
            </label>

            <label class="block">
              <input
                type="password"
                name="password"
                value={password}
                onChange={onhandleChange("password")}
                class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 "
                placeholder="Password"
              />
            </label>

            <button
              onClick={onSubmit}
              className="text-white bg-blue-500 w-full p-3 rounded-md hover:bg-blue-700 border-black"
            >
              Login
              <FontAwesomeIcon icon={faSignInAlt} style={{marginLeft:'5px'}}/>
            </button>
            {performRedirect()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
