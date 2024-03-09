import React from "react";
import movie from "../assets/img/movie1.png";
import menu from "../assets/img/side-nav.png";
function MovieCard() {
  return (
    <div className="group/content border-2 border-red-500 w-fit flex-shrink-0">
      <div className=" group/item relative flex justify-center items-center  w-fit rounded-md bg-gray-200 ">
        <img
          src={movie}
          alt="Movie"
          className="group-hover/item:brightness-50 h-[378px]  w-[264px] object-cover object-center "
        />
        <div className="absolute opacity-0 group-hover/item:opacity-100 flex flex-col gap-2 w-4/5  items-center ">
          <a href="./public/detail.html" className="w-full">
            <button className="w-full  hover:bg-primary border-[1px] border-white text-white hover:text-secondary px-4 py-2 rounded">
              Sign Up
            </button>
          </a>
          <a href="#" className="w-full">
            <button className="w-full bg-primary hover:bg-blue-600 text-secondary px-4 py-2 rounded">
              Sign In
            </button>
          </a>
        </div>
      </div>
      <div className="group/item ">
        <h1 className="font-bold text-2xl">Hello</h1>
        <div className="flex gap-3">
          <button className="rounded-full bg-[#A0A3BD1A] hover:bg-blue-600 text-secondary px-4 py-2 ">
            Action
          </button>
          <button className="rounded-full bg-[#A0A3BD1A] hover:bg-blue-600 text-secondary px-4 py-2 ">
            Action
          </button>
        </div>
      </div>
    </div>
    // <div className=" group/item w-fit relative bg-red-400">
    // <div className=" group/edit  aspect-h-1 group-hover/item:opacity-40 aspect-w-1 w-full  rounded-md bg-gray-200 lg:aspect-none  lg:h-80">
    //   <img
    //     src={movie}
    //     alt="Front of men&#039;s Basic Tee in black."
    //     className="h-full w-full group-hover/edit:invisible object-scale-down object-center  lg:w-full"
    //   />
    //   <h1 className="bg-black text-black">Yeay</h1>
    // </div>

    //   <div className="mt-4 flex justify-between">
    //     <div>
    //       <h3 className="text-sm text-gray-700">
    //         <a href="#">
    //           <span aria-hidden="true" className="absolute inset-0"></span>
    //           Basic Tee
    //         </a>
    //       </h3>
    //       <p className="mt-1 text-sm text-gray-500">Black</p>
    //     </div>
    //     <p className="text-sm font-medium text-gray-900">$35</p>
    //   </div>
    // </div>
    // <div className="absolute flex flex-col gap-2 w-4/5 items-center ">
    //     <a href="./public/detail.html" className="w-full">
    //       <button className="w-full  hover:bg-primary border-[1px] border-white text-white hover:text-secondary px-4 py-2 rounded">
    //         Sign Up
    //       </button>
    //     </a>
    //     <a href="#" className="w-full">
    //       <button className="w-full bg-primary hover:bg-blue-600 text-secondary px-4 py-2 rounded">
    //         Sign In
    //       </button>
    //     </a>
    //   </div>
    // <div className="container">
    //   <div className="">
    //     <img src={movie} className="card-img-top" alt="..." />
    //     <div className="overlay-button">
    //       <a href="./public/detail.html" className="detail">
    //         <button className="w-1/2 bg-white hover:bg-blue-600 border-[1px] border-primary text-primary hover:text-secondary px-4 py-2 rounded">
    //           Sign Up
    //         </button>
    //       </a>
    //       <a href="#">
    //         <button className="w-1/2 bg-primary hover:bg-blue-600 text-secondary px-4 py-2 rounded">
    //           Sign In
    //         </button>
    //       </a>
    //     </div>
    //   </div>
    //   <div className="card-body mt-3">
    //     <h4>Black Window</h4>
    //     <a href="home.html">
    //       <button type="button" className="btn">
    //         Action
    //       </button>
    //     </a>
    //     <a href="home.html" className="sign-up">
    //       <button type="button" className="btn">
    //         Adventure
    //       </button>
    //     </a>
    //   </div>
    // </div>
  );
}
export default MovieCard;
