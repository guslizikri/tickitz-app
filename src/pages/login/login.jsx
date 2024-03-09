import React, { useState, useEffect } from "react";

import logo from "../../assets/img/tickitz.png";

function Login() {
  const [username, setUsername] = useState("");
  const [showPw, sethowPw] = useState(false);
  const showPwHandler = (e) => {
    console.log("yeay");
    sethowPw(!showPw);
  };

  useEffect(() => {
    console.log("Didmount");
  }, []);
  useEffect(() => {
    console.log("didUpate");
  }, [username]);
  return (
    <div className="flex bg-login-bg bg-cover shadow-shadow-blur min-h-screen flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-16 w-auto" src={logo} alt="Tickitz" />
      </div>

      <div className="mt-5 bg-white p-5 rounded-xl sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className="text-2xl font-bold leading-9 tracking-tight text-gray-900 space-y-3">
          Welcome Back👋
        </h1>
        <p className=" my-3">
          Sign in with your data that you entered during your registration
        </p>
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="block w-full focus:outline-none rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-300 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type={showPw ? "password" : "text"}
                autoComplete="current-password"
                required
                className="block w-full focus:outline-none rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-300 sm:text-sm sm:leading-6"
              />
            </div>
            <p onClick={showPwHandler}>Show Pw</p>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 p-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-5 text-center text-sm text-gray-500">
          Don’t have an account?
          <a
            href="#"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
