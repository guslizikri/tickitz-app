import React, { useState, useEffect } from "react";
import useApi from "../../utils/axios";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TableAdmin from "../../components/TableAdmin";
import Header from "../../components/Header";

import logo from "../../assets/img/tickitz.png";

function Add() {
  let navigate = useNavigate();
  const api = useApi();
  const [title, setTitle] = useState(null);
  const [img, setImg] = useState(null);
  const [genre, setGenre] = useState([]);
  const [hour, setHour] = useState(null);
  const [minute, setMinute] = useState(null);
  const [director, setDirector] = useState(null);
  const [casts, setCasts] = useState(null);
  const [releaseDate, setReleaseDate] = useState(null);
  const [synopsis, setSynopsis] = useState(null);
  const [location, setLocation] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [time, setTime] = useState(null);
  // const [showPw, sethowPw] = useState(false);
  // const showPwHandler = (e) => {
  //   console.log("yeay");
  //   sethowPw(!showPw);
  // };
  const changeInputImgHandler = (e) => {
    setImg(e.target.files[0]);
  };
  const changeInputTitleHandler = (e) => {
    setTitle(e.target.value);
  };
  const changeInputGenreHandler = (e) => {
    setGenre(Number(e.target.value));
    console.log(genre);
  };
  const changeInputLocationHandler = (e) => {
    const inputLocation = e.target.value;
    const tmpLocation = [...location];
    tmpLocation.push(inputLocation);
    setLocation(tmpLocation);
  };
  const changeInputStartDateHandler = (e) => {
    setStartDate(e.target.value);
  };
  const changeInputTimeHandler = (e) => {
    setTime(e.target.value);
  };
  const changeInputHourHandler = (e) => {
    setHour(e.target.value);
  };
  const changeInputMinuteHandler = (e) => {
    setMinute(e.target.value);
  };
  const changeInputDirectorHandler = (e) => {
    setDirector(e.target.value);
  };
  const changeInputCastsHandler = (e) => {
    setCasts(e.target.value);
  };
  const changeInputSynopsisHandler = (e) => {
    setSynopsis(e.target.value);
  };
  const changeInputReleaseDateHandler = (e) => {
    setReleaseDate(e.target.value);
  };
  // const data = {
  //   img,
  //   title,
  //   genre: [genre],
  //   duration: `${hour}:${minute}`,
  //   director,
  //   casts,
  //   synopsis,
  //   releaseDate,
  // };
  console.log(location);
  const saveData = (e) => {
    const formData = new FormData();
    formData.append("image", img);
    formData.append("title", title);
    formData.append("genre", [genre]);
    formData.append("duration", `${hour}:${minute}`);
    formData.append("director", director);
    formData.append("casts", casts);
    formData.append("synopsis", synopsis);
    formData.append("release_date", releaseDate);
    formData.append("location", location);
    formData.append("start_date", startDate);
    formData.append("time", time);

    console.log(formData);
    api({
      method: "post",
      url: `movie`,
      headers: { "Content-Type": "multipart/form-data" },
      data: formData,
    })
      .then((res) => {
        alert(res.data.message);
        navigate("/admin");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Header />
      <main className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Add new movie
          </h2>
        </div>
        <div className="mx-auto mt-16 max-w-xl sm:mt-20 space-y-5">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                htmlFor="formFile"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Upload Image
              </label>
              <input
                onChange={changeInputImgHandler}
                className="relative my-2 block w-full min-w-0 flex-auto cursor-pointer rounded  bg-transparent bg-clip-padding px-3 py-2 text-base font-normal text-surface transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:me-3 file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-e file:border-solid file:border-inherit file:bg-transparent file:px-3  file:py-[0.32rem] file:text-surface focus:border-primary focus:text-gray-700 focus:shadow-inset focus:outline-none dark:border-white/70 dark:text-white  file:dark:text-white shadow-sm ring-1 ring-inset ring-gray-300"
                type="file"
                id="formFile"
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="title"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Movie Name
              </label>
              <div className="mt-2.5">
                <input
                  onChange={changeInputTitleHandler}
                  type="text"
                  name="title"
                  id="title"
                  autoComplete="organization"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-sm sm:leading-6 focus:outline-none"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="category"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Category
              </label>

              <div className="mt-2.5">
                <select
                  onChange={changeInputGenreHandler}
                  id="category"
                  className="appearance-none block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-sm sm:leading-6 focus:outline-none"
                >
                  <option value="" disabled>
                    Choose a genre
                  </option>
                  <option value="1">Drama</option>
                  <option value="3">Action</option>
                  <option value="6">War</option>
                </select>
              </div>
            </div>
            <div>
              <label
                htmlFor="release-date"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Release Date
              </label>
              <div className="mt-2.5">
                <input
                  onChange={changeInputReleaseDateHandler}
                  id="release-date"
                  type="date"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-sm sm:leading-6 focus:outline-none"
                  placeholder="Select date"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="duration"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Duration
              </label>
              <div className="mt-2.5 flex gap-1">
                <input
                  required
                  onChange={changeInputHourHandler}
                  type="number"
                  className=" block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-sm sm:leading-6 focus:outline-none"
                  placeholder="Hour"
                />
                <input
                  onChange={changeInputMinuteHandler}
                  required
                  type="number"
                  className=" block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-sm sm:leading-6 focus:outline-none"
                  placeholder="Minute"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="director"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Director
              </label>
              <div className="mt-2.5">
                <input
                  onChange={changeInputDirectorHandler}
                  type="text"
                  name="director"
                  id="director"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-sm sm:leading-6 focus:outline-none"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="casts"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Casts
              </label>
              <div className="mt-2.5">
                <input
                  onChange={changeInputCastsHandler}
                  type="text"
                  name="casts"
                  id="casts"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-sm sm:leading-6 focus:outline-none"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="synopsis"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Synopsis
              </label>
              <div className="mt-2.5">
                <textarea
                  onChange={changeInputSynopsisHandler}
                  name="synopsis"
                  id="synopsis"
                  rows="4"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-sm sm:leading-6 focus:outline-none"
                ></textarea>
              </div>
            </div>
            <div className="mt-2.5 sm:col-span-2">
              <select
                onChange={changeInputLocationHandler}
                id="location"
                className="appearance-none block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-sm sm:leading-6 focus:outline-none"
              >
                <option value="" disabled>
                  Location
                </option>
                <option value="Jakarta">Jakarta</option>
                <option value="Surabaya">Surabaya</option>
                <option value="Yogyakarta">Yogyakarta</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="release-date"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Set Date
              </label>
              <div className="mt-2.5">
                <input
                  onChange={changeInputStartDateHandler}
                  id="start-date"
                  type="date"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-sm sm:leading-6 focus:outline-none"
                  placeholder="Select date"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="release-date"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Time
              </label>
              <div className="mt-2.5">
                <input
                  onChange={changeInputTimeHandler}
                  id="time"
                  type="time"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-400 sm:text-sm sm:leading-6 focus:outline-none"
                  placeholder="Select date"
                />
              </div>
            </div>
            <div className="mt-10 sm:col-span-2">
              <button
                onClick={saveData}
                type="submit"
                className="block w-full rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save Movie
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Add;
