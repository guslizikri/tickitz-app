import React, { useState, useEffect } from "react";
import useApi from "../../utils/axios";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Subscribe from "../../components/Subscribe";
import MovieCard from "../../components/MovieCard";
import Pagination from "../../components/Pagination";
import { useLocation } from "react-router-dom";

function Movie() {
  const api = useApi();

  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");
  const [meta, setMeta] = useState("");

  const [page, setPage] = useState(1);
  const [limit] = useState("8");

  const handleNextPage = (e) => {
    e.preventDefault();
    setPage(page + 1);
  };
  const handlePrevPage = (e) => {
    e.preventDefault();
    setPage(page - 1);
  };
  // untuk menamoung data search dulu, lalu digunakan untuk ngubah state search dengan onkeydownsearch
  const [query, setQuery] = useState("");

  const [movie, setMovie] = useState(null);
  const location = useLocation();

  const changeInputQuery = (e) => {
    setQuery(e.target.value);
  };
  const changeInputGenre = (e) => {
    setGenre(e.target.value);
  };
  const onKeyDownSearch = (e) => {
    if (e.key === "Enter") {
      // console.log(query);
      setSearch(query);
    }
  };
  const getDataMovie = () => {
    api
      .get(
        `movie?page=${page}&limit=${limit}&orderBy=&search=${search}&genre=${genre}`
      )
      .then((res) => {
        setMovie(res.data.data);
        setMeta(res.data.meta);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDataMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    getDataMovie();
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, page, genre, location]);
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);
  return (
    <div className="space-y-5">
      <Header />
      <section className="bg-movie-bg w-screen shadow-shadow-blur h-[440px] text-white   flex flex-col justify-center">
        <div className="flex flex-col px-8 md:px-20 gap-6 w-full md:w-3/4 lg:w-1/2">
          <span className="hero__content">LIST MOVIE OF THE WEEK</span>
          <h1 className="font-bold text-4xl">
            Experience the Magic of Cinema : Book Your Tickets Today
          </h1>
          <span>Sign up and get the ticket with a lot of discount</span>
          {/* <div className="hero__slide">
            <div className="hero__slide__1"></div>
            <div className="hero__slide__non-active"></div>
            <div className="hero__slide__non-active"></div>
          </div> */}
        </div>
      </section>
      <main className="container">
        <div className="space-y-5">
          <section
            id="search-movie"
            className="grid md:grid-cols-3 gap-x-4 p-3"
          >
            <div className="pt-2 flex-col flex gap-2 text-gray-600">
              <label htmlFor="search">Search Movie</label>
              <input
                onChange={changeInputQuery}
                onKeyDown={onKeyDownSearch}
                className="border-2  border-slate-100 bg-stone-50 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                id="search"
                type="search"
                name="search"
                placeholder="Search"
              />
            </div>
            <div className="overflow-x-auto pt-2 flex-col flex col-span-2 gap-2 text-gray-600">
              <label htmlFor="filter">Filter</label>
              <ul className="flex gap-3" onChange={changeInputGenre}>
                <li>
                  <input
                    type="radio"
                    id="all"
                    name="hosting"
                    value=""
                    className="hidden peer"
                    required
                  />
                  <label
                    htmlFor="all"
                    className="inline-flex items-center justify-center  w-[146px] py-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="flex justify-center items-center ">All</div>
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="ebu"
                    name="hosting"
                    value="Action"
                    className="hidden peer"
                    required
                  />
                  <label
                    htmlFor="ebu"
                    className="inline-flex items-center justify-center  w-[146px] py-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="flex justify-center items-center ">
                      Action
                    </div>
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="cineone"
                    name="hosting"
                    value="Drama"
                    className="hidden peer"
                  />
                  <label
                    htmlFor="cineone"
                    className="inline-flex items-center justify-center w-[146px] py-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="flex justify-center items-center ">
                      Drama
                    </div>
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="hiflix"
                    name="hosting"
                    value="War"
                    className="hidden peer"
                  />
                  <label
                    htmlFor="hiflix"
                    className="inline-flex items-center justify-center w-[146px] py-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <div className="flex justify-center items-center ">War</div>
                  </label>
                </li>
              </ul>
            </div>
          </section>
          <div
            id="movie"
            className="px-2 flex sm:grid justify-items-center  gap-3 overflow-x-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 "
          >
            {movie &&
              movie.map((m) => {
                return (
                  <MovieCard
                    key={m.id}
                    id={m.id}
                    title={m.title}
                    img={m.img}
                    genre={m.genre}
                  />
                );
              })}
          </div>
          <div className="flex justify-center items-center">
            {!movie && (
              <h1 className=" text-5xl font-bold border-2 p-10 ">
                Movie not found
              </h1>
            )}
          </div>
          <div className="flex justify-center">{/* <Pagination /> */}</div>
          <nav className="flex justify-center">
            {movie && (
              <div className="flex items-center  -space-x-px gap-2 h-10 text-base">
                <button
                  onClick={handlePrevPage}
                  disabled={meta.prev ? false : true}
                  className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Prev
                </button>

                <button
                  onClick={handleNextPage}
                  disabled={meta.next ? false : true}
                  className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Next
                </button>
              </div>
            )}
          </nav>
        </div>
      </main>
      <Subscribe />
      <Footer />
    </div>
  );
}

export default Movie;
