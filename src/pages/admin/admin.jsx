import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";

import { Link } from "react-router-dom";
import Header from "../../components/Header";

import { useNavigate } from "react-router-dom";
import TableAdmin from "../../components/TableAdmin";

function Admin() {
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
  }, [search, page, movie]);
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

  const handleDelete = async (movieId) => {
    console.log(movieId);
    const confirmed = window.confirm(
      "Apakah Anda yakin ingin menghapus film ini?"
    );

    if (confirmed) {
      axios
        .delete(`movie/${movieId}`)
        .then((res) => {
          console.log(res);
          alert(res.data.message);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="bg-slate-200">
      <Header />

      <main className="container rounded-lg p-3 bg-white mt-5">
        <div className="flex justify-between mb-5">
          <h1 className="font-bold text-4xl">List Movie</h1>
          <div>
            <Link to={"/admin/add"}>
              <button className="hidden md:block bg-primary hover:bg-blue-600 text-white px-4 py-2 rounded">
                Add Movie
              </button>
            </Link>
          </div>
        </div>
        <div className="container relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Thumnail
                </th>
                <th scope="col" className="px-6 py-3">
                  Movie Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Release Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Duration
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {movie &&
                movie.map((m) => {
                  return (
                    <tr
                      key={m.id}
                      className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                    >
                      <th scope="row" className="px-6 py-2 ">
                        <img
                          src={m.img}
                          alt=""
                          className=" h-[40px]  w-[46px] object-cover object-center"
                        />
                      </th>
                      <td className="px-6 py-4">{m.title}</td>
                      <td className="px-6 py-4">{m.genre}</td>
                      <td className="px-6 py-4">{m.release_date}</td>
                      <td className="px-6 py-4">{m.duration}</td>
                      <td className="px-6 py-4  space-x-3 items-center ">
                        <Link
                          to={`/movie/${m.id}`}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Detail
                        </Link>
                        <Link
                          to={`/admin/edit/${m.id}`}
                          href="#"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Edit
                        </Link>
                        <span
                          onClick={() => handleDelete(m.id)}
                          className="font-medium hover:cursor-pointer text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Delete
                        </span>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
            ;
          </table>
        </div>
      </main>
    </div>
  );
}

export default Admin;
