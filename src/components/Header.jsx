import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/tickitz2.png";
import profile from "../assets/img/profile.png";
import search from "../assets/img/icon-search.png";
import menu from "../assets/img/side-nav.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { logout } from "../store/reducer/user";

function Header() {
  const { isAuth, role } = useSelector((s) => s.users);
  const dispatch = useDispatch();

  const [showMobileMenu, setshowMobileMenu] = useState(false);
  const [showProfileMenu, setshowProfileMenu] = useState(false);

  const showMobileMenuHandler = (e) => {
    setshowMobileMenu(!showMobileMenu);
  };

  const showProfileMenuHandler = (e) => {
    e.preventDefault();
    setshowProfileMenu(!showProfileMenu);
  };
  return (
    <header className=" relative bg-white text-secondary p-5 sm:p-4">
      <div className="w-full flex items-center justify-between md:justify-around px-2 sm:px-0 ">
        {/* <!-- Logo --> */}

        <img src={logo} alt="Logo" />

        {/* <!-- Navigation --> */}
        <nav className="hidden md:flex w-1/3 justify-evenly">
          {role.toLowerCase() == "admin" ? (
            <>
              <Link to={"/admin/dashboard"} className="hover:text-primary">
                Dashboard
              </Link>
              <Link to={"/admin"} className="hover:text-primary">
                Movie
              </Link>
            </>
          ) : (
            <>
              <Link to={"/"} className="hover:text-primary">
                Home
              </Link>
              <Link to={"/movie"} className="hover:text-primary">
                Movie
              </Link>
              <a href="#" className="hover:text-primary">
                Buy Ticket
              </a>
            </>
          )}
        </nav>

        {/* <!-- Button --> */}
        <div className="button hidden md:flex gap-4 items-center">
          {!isAuth ? (
            <>
              <Link to={"/login"}>
                <button className=" md:block bg-white hover:text-white hover:bg-blue-600 border-2 border-primary text-primary px-4 py-2 rounded">
                  Sign Up
                </button>
              </Link>

              <Link to={"/login"}>
                <button className=" md:block bg-primary hover:bg-blue-600 text-white px-4 py-2 rounded">
                  Sign In
                </button>
              </Link>
            </>
          ) : (
            <>
              <div>
                <img src={search} alt="" />
              </div>
              <div className="relative">
                <img
                  src={profile}
                  alt=""
                  className="w-[56px] rounded-full"
                  onClick={showProfileMenuHandler}
                />
                <div
                  className={`${
                    showProfileMenu ? " block" : " hidden"
                  } absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabIndex="-1"
                >
                  <Link
                    to={"/profile"}
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-0"
                  >
                    Your Profile
                  </Link>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-1"
                  >
                    Your Ticket
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-2"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(logout());
                    }}
                  >
                    Sign out
                  </a>
                </div>
              </div>
            </>
          )}
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
          <div className="relative  button flex w-full flex-col gap-3">
            {!isAuth ? (
              <>
                <Link to={"/login"}>
                  <button className="w-1/2 bg-white hover:bg-blue-600 border-[1px] border-primary text-primary hover:text-secondary px-4 py-2 rounded">
                    Sign Up
                  </button>
                </Link>

                <Link to={"/login"}>
                  <button className="w-1/2 bg-primary hover:bg-blue-600 text-secondary px-4 py-2 rounded">
                    Sign In
                  </button>
                </Link>
              </>
            ) : (
              <div className="flex items-center gap-6">
                <div className="relative">
                  <img
                    src={profile}
                    alt=""
                    className="w-[56px] rounded-full"
                    onClick={showProfileMenuHandler}
                  />
                  <div
                    className={`${
                      showProfileMenu ? " block" : " hidden"
                    } absolute left-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabIndex="-1"
                  >
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabIndex="-1"
                      id="user-menu-item-0"
                    >
                      Your Profile
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabIndex="-1"
                      id="user-menu-item-1"
                    >
                      Your Ticket
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700"
                      role="menuitem"
                      tabIndex="-1"
                      id="user-menu-item-2"
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(logout());
                      }}
                    >
                      Sign out
                    </a>
                  </div>
                </div>
                <div>
                  <img src={search} alt="" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
