import React from "react";
import lineRounded from "../assets/img/line-rounded.png";

function Subscribe() {
  return (
    <section className="container relative p-5 flex flex-col items-center justify-center gap-y-8 bg-primary h-[500px] md:h-[300px] rounded-lg">
      <h1 className="font-bold text-white text-4xl text-center">
        Subscribe to our newsletter
      </h1>
      <form className=" w-4/5 lg:w-3/5 grid grid-cols-1 md:grid-cols-3 gap-3 items-center justify-between">
        <div className="">
          <input
            type="text"
            name="first-name"
            id="first-name"
            placeholder="First Name"
            className="block w-full bg-primary focus:outline-none rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
          />
        </div>
        <div className="">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email address"
            className="block w-full bg-primary focus:outline-none rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
          />
        </div>
        <button type="submit" className="bg-white py-2 rounded-lg text-primary">
          Subscribe Now
        </button>
      </form>
      <img src={lineRounded} alt="" className="absolute right-0 bottom-0" />
    </section>
  );
}
export default Subscribe;
