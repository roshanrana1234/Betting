import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { authenticate, isAuthenticated, signin } from "./helper/auth";
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
      if (isAuthenticated() && isAuthenticated().user.PersonalDetails.role === 1) {
        return <Navigate to="/dashboard" />;
      } 
      if (isAuthenticated() && isAuthenticated().user.PersonalDetails.role === 2) {
        return <Navigate to="/dashboard" />;
      } 
      if (isAuthenticated() && isAuthenticated().user.PersonalDetails.role === 3) {
        return <Navigate to="/dashboard" />;
      }       
      else {
        return <Navigate to="/" />;
      }
    }
    if (isAuthenticated()) {
      return <Navigate to="/" />;
    }
  };

  return (
    <>
      <div className="h-screen w-full bg-gradient-to-b from-cyan-500 to-blue-500">
        <div className="flex justify-center items-center flex-col h-screen">
          {errorMessage()}
          <div className="lg:w-4/12 w-6/12 m-auto flex justify-center items-center flex-col gap-6 bg-white p-4 rounded shadow-2xl ">
            <div className="text-3xl font-bold ">Sign In</div>
            <label class="block">
              <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                User Name
              </span>
              <input
                type="loginId"
                name="loginId"
                value={loginId}
                onChange={onhandleChange("loginId")}
                class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="you@example.com"
              />
            </label>

            <label class="block">
              <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                Password
              </span>
              <input
                type="password"
                name="password"
                value={password}
                onChange={onhandleChange("password")}
                class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 "
                placeholder="you@example.com"
              />
            </label>

            <button
              onClick={onSubmit}
              className="text-white bg-blue-500 w-full p-3 rounded-md hover:bg-blue-700"
            >
              Login
            </button>
            {performRedirect()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
