import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Subscribe from "../../components/Subscribe";
import MovieCard from "../../components/MovieCard";

import whychoose1 from "../../assets/img/whychoose1.png";
import whychoose2 from "../../assets/img/whychoose2.png";
import whychoose3 from "../../assets/img/whychoose3.png";
function Home() {
  return (
    <div className="space-y-5 h-fit">
      <Header />
      <section className="container flex flex-col items-center justify-center space-y-3 sm:block">
        <span className="text-primary">WHY CHOOSE US</span>
        <h2 className="font-bold text-3xl w-4/5 lg:w-1/2 text-center sm:text-left">
          Unleashing the Ultimate Movie Experience
        </h2>
        <div className="grid grid-cols-1 w-4/5 sm:w-full justify-items-center sm:grid-cols-3 gap-5">
          <article className="card">
            <div className="space-y-3 flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="w-fit bg-primary bg-opacity-20 p-3 rounded-full">
                <img src={whychoose1} alt="" />
              </div>
              <h5 className="font-bold">Guaranteed</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
              </p>
            </div>
          </article>
          <article className="card">
            <div className="space-y-3 flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="w-fit bg-primary bg-opacity-20 p-3 rounded-full">
                <img src={whychoose2} alt="" />
              </div>
              <h5 className="font-bold">Affordable</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
              </p>
            </div>
          </article>
          <article className="card ps-0">
            <div className="space-y-3 flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="w-fit bg-primary bg-opacity-20 p-3 rounded-full">
                <img src={whychoose3} alt="" />
              </div>
              <h5 className="font-bold">24/7 Customer Support</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim
                nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.
              </p>
            </div>
          </article>
        </div>
      </section>
      <main className="container">
        <div className="space-y-5">
          <div className="text-center space-y-3">
            <span className="text-lg text-primary">MOVIES</span>
            <h2 className="text-3xl ">
              Exciting Movies That Should Be Watched Today
            </h2>
          </div>
          <div className="flex sm:grid justify-items-center  gap-3 overflow-x-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
          </div>
          <div className="flex justify-center">
            <a href="">
              <span>View Al</span>
            </a>
          </div>
        </div>
      </main>
      <Subscribe />
      <Footer />
    </div>
  );
}

export default Home;
