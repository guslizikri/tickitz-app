import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/tickitz2.png";
import menu from "../assets/img/side-nav.png";
import { useEffect, useState } from "react";
function Header() {
  const [showMobileMenu, setshowMobileMenu] = useState(false);
  const showMobileMenuHandler = (e) => {
    console.log("yeay");
    setshowMobileMenu(!showMobileMenu);
  };
  return (
    <header className=" relative bg-white text-secondary p-5 sm:p-4">
      <div className="w-full flex items-center justify-between md:justify-around px-2 sm:px-0 ">
        {/* <!-- Logo --> */}

        <img src={logo} alt="Logo" />

        {/* <!-- Navigation --> */}
        <nav className="hidden md:flex w-1/3 justify-evenly">
          <Link to={"/"} className="hover:text-primary">
            Home
          </Link>
          <Link to={"/movie"} className="hover:text-primary">
            Movie
          </Link>
          <a href="#" className="hover:text-primary">
            Buy Ticket
          </a>
        </nav>

        {/* <!-- Button --> */}
        <div className="button flex gap-4">
          <button className="hidden md:block bg-white hover:text-white hover:bg-blue-600 border-2 border-primary text-primary px-4 py-2 rounded">
            Sign Up
          </button>

          <Link to={"/login"}>
            <button className="hidden md:block bg-primary hover:bg-blue-600 text-white px-4 py-2 rounded">
              Sign In
            </button>
          </Link>
        </div>

        {/* <!-- Hamburger Menu (Mobile) --> */}
        <div className="md:hidden">
          <button id="menu-toggle" onClick={showMobileMenuHandler}>
            <img src={menu} alt="" />
          </button>
        </div>
      </div>
      {/* <!-- Mobile Navigation Overlay --> */}
      <div
        className={showMobileMenu ? "md:hidden block" : "md:hidden hidden"}
        id="mobile-menu"
      >
        <div className="pb-3 pt-2 pl-3 sm:pl-5">
          <a
            href="#"
            className="text-secondary block rounded-md py-2 text-base font-medium"
            aria-current="page"
          >
            Dashboard
          </a>
          <a
            href="../index.html"
            className="text-secondary hover:text-primary block rounded-md py-2 text-base font-medium"
          >
            Home
          </a>
          <a
            href="movie.html"
            className="text-secondary hover:text-primary block rounded-md py-2 text-base font-medium"
          >
            Movie
          </a>
          <a
            href="#"
            className="text-secondary hover:text-primary block rounded-md py-2 text-base font-medium"
          >
            Buy Ticket
          </a>
          <div className="button flex w-full flex-col gap-3">
            <button className="w-1/2 bg-white hover:bg-blue-600 border-[1px] border-primary text-primary hover:text-secondary px-4 py-2 rounded">
              Sign Up
            </button>
            <button className="w-1/2 bg-primary hover:bg-blue-600 text-secondary px-4 py-2 rounded">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
