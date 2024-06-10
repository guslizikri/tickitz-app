import React from "react";
import point from "../assets/img/loyalpoint.png";
import useApi from "../utils/axios";
import { useNavigate } from "react-router-dom";

import { useState, useEffect } from "react";

import setting from "../assets/img/icon-setting.png";

function Profile({ fullname, img, phone_number }) {
  const api = useApi();
  const [showSetting, setShowSetting] = useState(false);
  const showSettingHandler = (e) => {
    e.preventDefault();
    setShowSetting(!showSetting);
  };
  //   show form modal
  const [showFormModal, setshowFormModal] = useState(false);
  const showFormModalHandler = (e) => {
    setshowFormModal(true);
  };
  const hideFormModalHandler = (e) => {
    setshowFormModal(false);
  };
  const handlerChild = (e) => {
    e.stopPropagation();
  };
  //   end form modal

  // edit image user
  const [userDataImage, setUserDataImage] = useState(null);

  const changeInputImgHandler = async (e) => {
    setUserDataImage(e.target.files[0]);
  };
  const submitImg = () => {
    const formData = new FormData();
    console.log("oj");
    console.log(userDataImage);
    formData.append("image", userDataImage);
    console.log(formData);
    api({
      method: "PATCH",
      url: "user/image",
      headers: { "Content-Type": "multipart/form-data" },
      data: formData,
    })
      .then((res) => {
        alert(res.data.message);

        window.location.reload();
      })
      .catch((err) => {
        alert(err.message);
        console.log(err);
      });
  };

  //   edit profile
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
      <div className="profile w-4/5 sm:w-3/5 md:w-1/4 bg-white h-fit min-h-screen rounded-lg divide-y-2">
        <div className="py-8">
          <div className="px-5 flex justify-between items-center">
            <span>INFO</span>
            <div className="relative">
              <img src={setting} alt="" onClick={showSettingHandler} />
              <div
                className={`${
                  showSetting ? " block" : " hidden"
                } absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabIndex="-1"
              >
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-0"
                >
                  Sign Out
                </a>
                <div className="flex justify-between">
                  <label
                    htmlFor="formFile"
                    className="block px-4 py-2 text-sm text-gray-700"
                  >
                    Upload Image
                  </label>
                  <input
                    className="sr-only "
                    type="file"
                    id="formFile"
                    onChange={changeInputImgHandler}
                  />
                  {userDataImage && (
                    <button
                      className="block px-4 py-2 text-sm text-gray-700"
                      onClick={submitImg}
                    >
                      Save
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[136px] h-[136px] rounded-full ">
              <img
                src={img}
                alt=""
                className="rounded-full w-[136px] h-[136px] object-cover object-center"
              />
            </div>
            <h1>{fullname}</h1>
            <span>Moviegoers</span>
          </div>
        </div>
        <div className="py-8 space-y-5">
          <h1 className="px-5">loyalty Points</h1>
          <div className="flex justify-center">
            <img src={point} alt="" />
          </div>
          <p className="px-5">180 points become a master</p>
          <div className="flex px-5 w-full justify-center items-center">
            <div className="w-full h-3.5 bg-slate-400 rounded-lg">
              <div className="w-1/2 h-full bg-primary rounded-lg"></div>
            </div>
          </div>
          <div className="flex md:hidden justify-center">
            <button
              className="w-4/5 bg-white border-[1px] border-primary hover:bg-primary hover:text-white text-primary px-4 py-2 rounded-lg"
              id="show-modal"
              onClick={showFormModalHandler}
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>
      <div
        id="modal"
        onClick={hideFormModalHandler}
        className={`${
          showFormModal ? "block" : "hidden "
        }md:hidden absolute py-10 top-0 w-screen min-h-screen bg-black bg-opacity-50`}
      >
        <div className="flex justify-center">
          <form
            onClick={handlerChild}
            className="bg-white w-4/5 p-8 rounded-lg"
          >
            <h1 className="font-bold text-2xl">Account Setting</h1>
            <div className="mt-8 mb-4 bg-white rounded-lg">
              <h1 className="border-b-2 border[#DEDEDE] py-3 mb-7">
                Detail Information
              </h1>

              <div className="space-y-3">
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
                      name="phone_number"
                      id="phone"
                      onChange={changeHanlder}
                      className="block w-full focus:outline-none rounded-md border-0 py-2.5 pl-14 pr-20 text-[#696F79] ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-sm sm:leading-6"
                      placeholder="81445687121"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 mb-4 bg-white rounded-lg">
              <h1 className="border-b-2 border[#DEDEDE] py-3 mb-7">
                Account and Privacy
              </h1>

              <div className="space-y-3">
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
                      className="block w-full focus:outline-none rounded-md border-0 py-2.5 pl-6 pr-20 text-[#696F79] ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-sm sm:leading-6"
                      placeholder="Confirm your password"
                    />
                  </div>
                </div>
              </div>
            </div>
            <button
              className="w-full bg-primary hover:brightness-50 text-white px-4 py-2 rounded"
              onClick={submitHandler}
            >
              Update Changes
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default Profile;
