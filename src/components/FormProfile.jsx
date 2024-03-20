import React from "react";
import useApi from "../utils/axios";
import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";

function FormProfile() {
  const api = useApi();
  const [userData, setUserData] = useState({});
  const changeHanlder = (e) => {
    const data = { ...userData };
    data[e.target.name] = e.target.value;
    console.log(data);
    setUserData(data);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log("asd");
    api({
      method: "PATCH",
      url: "user",
      data: userData,
    })
      .then(({ data }) => {
        alert(data.message);
        window.location.reload();
      })
      .catch((error) => {
        console.log("NO");

        console.log(error);
      });
  };
  //   end edit profile
  return (
    <>
      <div className="py-6 px-8 mt-10 mb-4 bg-white rounded-lg">
        <h1 className="border-b-2 border[#DEDEDE] py-3 mb-7">
          Detail Information
        </h1>

        <div className="grid grid-cols-2 mb-4 gap-x-6 gap-y-2">
          <div className="">
            <label
              htmlFor="firstname"
              className="block text-sm font-medium leading-6 text-[#696F79]"
            >
              First Name
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                name="firstname"
                id="firstname"
                onChange={changeHanlder}
                className="block w-full focus:outline-none rounded-md border-0 py-2.5 pl-6 pr-20 text-[#696F79] ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-sm sm:leading-6"
                placeholder="Jonas"
              />
            </div>
          </div>
          <div className="">
            <label
              htmlFor="lastname"
              className="block text-sm font-medium leading-6 text-[#696F79]"
            >
              Last Name
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                name="lastname"
                id="lastname"
                onChange={changeHanlder}
                className="block w-full focus:outline-none rounded-md border-0 py-2.5 pl-6 pr-20 text-[#696F79] ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-sm sm:leading-6"
                placeholder="El Rodriguez"
              />
            </div>
          </div>
          <div className="">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-[#696F79]"
            >
              Email
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                name="email"
                id="email"
                onChange={changeHanlder}
                className="block w-full focus:outline-none rounded-md border-0 py-2.5 pl-6 pr-20 text-[#696F79] ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-sm sm:leading-6"
                placeholder="jonasrodrigu123@gmail.com"
              />
            </div>
          </div>

          <div className="">
            <label
              htmlFor="phone"
              className="block text-sm font-medium leading-6 text-[#696F79]"
            >
              Phone Number
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="pointer-events-none border-r-2 absolute inset-y-0 left-0 flex items-center px-3">
                <span className="text-gray-500 sm:text-sm">+62</span>
              </div>
              <input
                type="text"
                name="phone"
                id="phone"
                onChange={changeHanlder}
                className="block w-full focus:outline-none rounded-md border-0 py-2.5 pl-14 pr-20 text-[#696F79] ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-sm sm:leading-6"
                placeholder="81445687121"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 px-8 mt-10 mb-4 bg-white rounded-lg">
        <h1 className="border-b-2 border[#DEDEDE] py-3 mb-7">
          Account and Privacy
        </h1>

        <div className="grid grid-cols-2 mb-4 gap-x-6 gap-y-2">
          <div className="">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-[#696F79]"
            >
              New Password
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="password"
                name="password"
                id="password"
                onChange={changeHanlder}
                className="block w-full focus:outline-none rounded-md border-0 py-2.5 pl-6 pr-20 text-[#696F79] ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-sm sm:leading-6"
                placeholder="Write your password"
              />
            </div>
          </div>
          <div className="">
            <label
              htmlFor="confirm-pass"
              className="block text-sm font-medium leading-6 text-[#696F79]"
            >
              Confirm Password
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="password"
                name="confirm-pass"
                id="confirm-pass"
                onChange={changeHanlder}
                className="block w-full focus:outline-none rounded-md border-0 py-2.5 pl-6 pr-20 text-[#696F79] ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-sm sm:leading-6"
                placeholder="Confirm your password"
              />
            </div>
          </div>
        </div>
      </div>
      <button
        className="w-[360px] bg-primary hover:brightness-50 text-white px-4 py-2 rounded-lg"
        onClick={submitHandler}
      >
        Update Changes
      </button>
    </>
  );
}
export default FormProfile;
