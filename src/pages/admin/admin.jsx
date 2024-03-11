import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TableAdmin from "../../components/TableAdmin";

import logo from "../../assets/img/tickitz.png";

function Login() {
  const [movie, setMovie] = useState("");
  const [showPw, sethowPw] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:3001/movie")
      .then((res) => {
        setMovie(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(movie);
  return (
    <main className="container mt-5">
      <div className="container relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Thumnail
              </th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
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
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </a>
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                );
              })}
          </tbody>
          ;
        </table>
      </div>
    </main>
  );
}

export default Login;
