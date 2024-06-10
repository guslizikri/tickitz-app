import React, { useState, useEffect } from "react";
import useApi from "../../utils/axios";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/img/tickitz.png";
import { Icon } from "@iconify/react";
function Login() {
  let navigate = useNavigate();
  const api = useApi();

  const [email, setEmail] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [showPw, sethowPw] = useState(false);
  const showPwHandler = (e) => {
    console.log("yeay");
    sethowPw(!showPw);
  };
  const changeInputEmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const changeInputUsernameHandler = (e) => {
    setUsername(e.target.value);
  };
  const changeInputPasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const loginHandler = (e) => {
    const data = { email, username, password };
    api
      .post("user", data)
      .then((res) => {
        alert(res.data.message);
        navigate("/login");
      })
      .catch((err) => {
        alert(err.response.data.message);
        console.log(err.response.data);
      });
  };

  return (
    <div className="flex bg-login-bg bg-cover shadow-shadow-blur min-h-screen flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-16 w-auto" src={logo} alt="Tickitz" />
      </div>

      <div className="mt-5 bg-white p-5 rounded-xl sm:mx-auto sm:w-full sm:max-w-sm">
        <h1 className="text-2xl text-center my-2 font-bold leading-9 tracking-tight text-gray-900 space-y-3">
          Welcome to Tickitz
        </h1>
        <div className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                onChange={changeInputEmailHandler}
                className="block w-full focus:outline-none rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-300 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
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
                onChange={changeInputUsernameHandler}
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
            <div className="relative mt-2">
              <input
                id="password"
                name="password"
                type={showPw ? "text" : "password"}
                autoComplete="current-password"
                required
                onChange={changeInputPasswordHandler}
                className="block w-full focus:outline-none rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-300 sm:text-sm sm:leading-6"
              />
              <p
                onClick={showPwHandler}
                className="absolute right-2 top-[32%] "
              >
                <Icon
                  icon={showPw ? "mdi:eye-outline" : "mdi:eye-off-outline"}
                />
              </p>
            </div>
          </div>

          <div>
            <button
              onClick={loginHandler}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 p-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Join for free now
            </button>
          </div>
        </div>

        <p className="mt-5 text-center text-sm text-gray-500">
          Already have an account?
          <Link
            to={`/login`}
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
