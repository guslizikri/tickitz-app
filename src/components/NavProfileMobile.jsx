import React from "react";
import lineRounded from "../assets/img/line-rounded.png";

function NavProfileMobile() {
  return (
    <nav className="mobile-main-nav md:hidden bg-white text-secondary px-12 py-4 space-x-8">
      <a href="#" className="hover:text-primary border-b-2 border-primary py-4">
        Account Settings
      </a>
      <a
        href="./orderhistory.html"
        className="text-[#AAAAAA] hover:text-primary"
      >
        Order History
      </a>
    </nav>
  );
}
export default NavProfileMobile;
