import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../../utils/axios";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Pagination from "../../components/Pagination";

import sponsor1 from "../../assets/img/sponsor1.png";
import sponsor2 from "../../assets/img/sponsor2.png";
import sponsor3 from "../../assets/img/sponsor3.png";

import detail from "../../assets/img/movie4.png";
function Home() {
  const { id } = useParams();
  console.log(id);
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(`movie/${id}`)
      .then((res) => {
        console.log(res);
        setData(res.data.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(data);
  console.log(data);
  return (
    <>
      {data ? (
        <div className="space-y-6">
          <Header />
          <main className="flex container gap-7 flex-col md:flex-row">
            <div className=" flex justify-center items-center">
              <div className="border-2 p-5 w-fit h-fit flex items-center justify-center">
                <img
                  src={data.img}
                  alt=""
                  className=" h-[400px]  w-[275px] object-cover object-center"
                />
              </div>
            </div>
            <div className="md:w-[75%] space-y-5 px-3 flex flex-col items-center justify-center md:items-start">
              <h1 className="font-bold text-4xl text-center">{data.title}</h1>
              <div className="flex gap-3">
                {data.genre.split(", ").map((e, i) => {
                  return (
                    <button
                      key={i}
                      className="rounded-full bg-[#A0A3BD1A] hover:bg-blue-600 text-secondary px-5 py-1 "
                    >
                      {e}
                    </button>
                  );
                })}
              </div>
              <div className=" flex gap-3 w-full ">
                <div className="md:w-[25%] w-2/5 flex-shrink-0">
                  <h6 className="text-slate-500">Release Date</h6>
                  <span className="">{data.release_date.split("T")[0]}</span>
                </div>
                <div className="w-auto">
                  <h6 className="text-slate-500">Director</h6>
                  <span className="">{data.director}</span>
                </div>
              </div>
              <div className="flex gap-3 w-full ">
                <div className="md:w-[25%] w-2/5 flex-shrink-0">
                  <h6 className="text-slate-500">Duration</h6>
                  <span className="">{data.duration} </span>
                </div>
                <div className="w-auto ] ">
                  <h6 className="text-slate-500">Casts</h6>
                  <span className="">{data.casts}</span>
                </div>
              </div>

              <div className="synopsis main-content">
                <h6 className="text-slate-500">Synopsis</h6>
                <p className="main-content">{data.synopsis}</p>
              </div>
            </div>
          </main>
          <section className="container">
            <h1>Book Tickets</h1>
            <section className="grid grid-cols-4 gap-3 justify-between">
              <div className="">
                <label
                  htmlFor="date"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Choose Date
                </label>
                <div className="mt-2">
                  <select
                    id="date"
                    name="date"
                    autoComplete="date-name"
                    className="p-2 block w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div>
              <div className="">
                <label
                  htmlFor="time"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Choose Time
                </label>
                <div className="mt-2">
                  <select
                    id="time"
                    name="time"
                    autoComplete="time-name"
                    className="p-2 block w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div>
              <div className="">
                <label
                  htmlFor="location"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Choose Location
                </label>
                <div className="mt-2">
                  <select
                    id="location"
                    name="location"
                    autoComplete="location-name"
                    className="p-2 block w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div>
              <div className="self-end ">
                <button className="w-4/5 bg-primary hover:bg-blue-600 text-white px-4 py-2 rounded">
                  Filter
                </button>
              </div>
            </section>
            <section>
              <div className="flex gap-20 items-center">
                <h3 className=" text-lg font-medium ">Choose Cinema</h3>
                <span>4 Result</span>
              </div>
              <ul className="grid w-full gap-6 md:grid-cols-4">
                <li>
                  <input
                    type="radio"
                    id="ebu"
                    name="hosting"
                    value="ebu"
                    className="hidden peer"
                    required
                  />
                  <label
                    htmlFor="ebu"
                    className="inline-flex items-center justify-center  w-full h-[144px] text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="flex justify-center items-center ">
                      <img src={sponsor1} alt="" />
                    </div>
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="cineone"
                    name="hosting"
                    value="cineone"
                    className="hidden peer"
                  />
                  <label
                    htmlFor="cineone"
                    className="inline-flex items-center justify-center w-full h-[144px] text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="flex justify-center items-center ">
                      <img src={sponsor2} alt="" />
                    </div>
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="hiflix"
                    name="hosting"
                    value="hiflix"
                    className="hidden peer"
                  />
                  <label
                    htmlFor="hiflix"
                    className="inline-flex items-center justify-center w-full h-[144px] text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="flex justify-center items-center ">
                      <img src={sponsor3} alt="" />
                    </div>
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="hosting-big"
                    name="hosting"
                    value="hosting-big"
                    className="hidden peer"
                  />
                  <label
                    htmlFor="hosting-big"
                    className="inline-flex items-center justify-center w-full h-[144px] text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="">
                      <img src={sponsor1} alt="" />
                    </div>
                  </label>
                </li>
              </ul>
            </section>
          </section>
          <Pagination />
          <Footer />
        </div>
      ) : (
        <h1> Not Found</h1>
      )}
    </>
  );
}

export default Home;
