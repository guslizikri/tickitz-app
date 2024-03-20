/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useState, useEffect } from "react";
import useApi from "../../utils/axios";
import Chart from "chart.js/auto";

import { Link } from "react-router-dom";
import Header from "../../components/Header";

import { useNavigate } from "react-router-dom";
import TableAdmin from "../../components/TableAdmin";

function Dashboard() {
  const api = useApi();

  //   const [movie, setMovie] = useState(null);
  //   useEffect(() => {
  //     getDataMovie();
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);

  //   const getDataMovie = (e) => {
  //     api
  //       .get(`movie?page=${page}&limit=${limit}&orderBy=&search=${search}`)
  //       .then((res) => {
  //         setMovie(res.data.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };

  const chartRef = useRef(null);
  let chartInstance = null;

  useEffect(() => {
    if (chartRef && chartRef.current) {
      if (chartInstance) {
        chartInstance.destroy();
      }

      const ctx = chartRef.current.getContext("2d");

      chartInstance = new Chart(ctx, {
        type: "line",
        data: {
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
          ],
          datasets: [
            {
              label: "Sales Data",
              data: [10, 20, 30, 25, 35, 45, 70],
              backgroundColor: "rgba(54, 162, 235, 0.2)",
              borderColor: "rgba(54, 162, 235, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
              ticks: {
                stepSize: 10,
              },
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
        chartInstance = null;
      }
    };
  }, []);

  return (
    <div className="bg-slate-200">
      <Header />

      <main className="container mt-10">
        <div className="flex justify-left gap-2">
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

          <select
            id="location"
            name="location"
            autoComplete="location-name"
            className="p-2 block w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
          >
            <option>Weekly</option>
            <option>Canada</option>
            <option>Mexico</option>
          </select>
          <button className="  w-[218px] bg-primary hover:bg-blue-600 text-white px-4 py-2 rounded">
            Filter
          </button>
        </div>
        <section>
          <div>
            <canvas ref={chartRef}></canvas>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
