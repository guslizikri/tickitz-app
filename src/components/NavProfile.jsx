import React from "react";
import lineRounded from "../assets/img/line-rounded.png";

function NavProfile() {
  return (
    <div>
      <div className="bg-white text-secondary px-8 py-4 rounded-lg space-x-8">
        <a
          href="#"
          className="hover:text-primary border-b-2 border-primary py-4"
        >
          Account Settings
        </a>
        <a
          href="./orderhistory.html"
          className="text-[#AAAAAA] hover:text-primary"
        >
          Order History
        </a>
      </div>
    </div>
  );
}
export default NavProfile;
