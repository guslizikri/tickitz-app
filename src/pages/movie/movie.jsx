import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Subscribe from "../../components/Subscribe";
import MovieCard from "../../components/MovieCard";
import Pagination from "../../components/Pagination";

function Movie() {
  const [search, setSearch] = useState("");
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
  useEffect(() => {
    getDataMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    getDataMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, page]);
  const changeInputQuery = (e) => {
    setQuery(e.target.value);
  };
  const onKeyDownSearch = (e) => {
    if (e.key === "Enter") {
      // console.log(query);
      setSearch(query);
    }
  };
  console.log(search);
  const getDataMovie = (e) => {
    axios
      .get(`movie?page=${page}&limit=${limit}&orderBy=&search=${search}`)
      .then((res) => {
        setMovie(res.data.data);
        setMeta(res.data.meta);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="space-y-5">
      <Header />
      <section className="bg-movie-bg w-screen shadow-shadow-blur h-[440px] text-white   flex flex-col justify-center">
        <div className="flex flex-col px-20 gap-6 w-1/2">
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
          <section className="grid grid-cols-3 gap-x-4 p-3">
            <div className="pt-2 flex-col flex gap-2 text-gray-600">
              <label htmlFor="search">Cari Event</label>
              <input
                onChange={changeInputQuery}
                onKeyDown={onKeyDownSearch}
                className="border-2  border-slate-400 bg-slate-100 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                id="search"
                type="search"
                name="search"
                placeholder="Search"
              />
            </div>
            <div className="pt-2 flex-col flex col-span-2 gap-2 text-gray-600">
              <label htmlFor="filter">Filter</label>
              <input
                className="border-2 border-slate-400 bg-slate-100 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                id="filter"
                type="text"
                name="filter"
                placeholder="filter"
              />
            </div>
          </section>
          <div className="flex sm:grid justify-items-center  gap-3 overflow-x-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
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
            <ul className="flex items-center  -space-x-px gap-2 h-10 text-base">
              <li>
                <a
                  onClick={handlePrevPage}
                  href="#"
                  className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Prev
                </a>
              </li>
              <li>
                <a
                  onClick={handleNextPage}
                  href="#"
                  className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </main>
      <Subscribe />
      <Footer />
    </div>
  );
}

export default Movie;
