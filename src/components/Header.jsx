import React from "react";

function Headeer() {
  return (
    <header className="relative bg-white text-secondary p-2 sm:p-4">
      <div className="container w-full flex items-center justify-between px-2 sm:px-0 md:justify-around">
        {/* <!-- Logo --> */}

        <img src="./assets/img/tickitz2.png" alt="Logo" />

        {/* <!-- Navigation --> */}
        <nav className="hidden md:flex w-1/3 justify-evenly">
          <a href="../index.html" className="hover:text-primary">
            Home
          </a>
          <a href="movie.html" className="hover:text-primary">
            Movie
          </a>
          <a href="#" className="hover:text-primary">
            Buy Ticket
          </a>
        </nav>

        {/* <!-- Button --> */}
        <div className="button flex gap-4">
          <button className="hidden md:block bg-white hover:text-white hover:bg-blue-600 border-2 border-primary text-primary px-4 py-2 rounded">
            Sign Up
          </button>
          <button className="hidden md:block bg-primary hover:bg-blue-600 text-white px-4 py-2 rounded">
            Sign In
          </button>
        </div>

        {/* <!-- Hamburger Menu (Mobile) --> */}
        <div className="md:hidden">
          <button id="menu-toggle">
            <img src="./assets/img/side-nav.png" alt="" />
          </button>
        </div>
      </div>
      {/* <!-- Mobile Navigation Overlay --> */}
      <div className="md:hidden hidden" id="mobile-menu">
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
export default Headeer;
