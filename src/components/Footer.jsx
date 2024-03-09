import React from "react";
import logo from "../assets/img/tickitz2.png";
import spomsor1 from "../assets/img/sponsor1.png";
import spomsor2 from "../assets/img/sponsor2.png";
import spomsor3 from "../assets/img/sponsor3.png";
import sosmed1 from "../assets/img/sosmed1.png";
import sosmed2 from "../assets/img/sosmed2.png";
import sosmed3 from "../assets/img/sosmed3.png";
import sosmed4 from "../assets/img/sosmed4.png";

function Footer() {
  return (
    <footer className="mt-5 py-5">
      <div className="container px-5 flex-wrap lg:flex-nowrap justify-between md:px-16 flex">
        <div className="w-4/5 md:w-[48%] lg:w-[22%] mb-10">
          <img src={logo} alt="Tickitz" />
          <p className="mt-4">
            Stop waiting in line. Buy tickets conveniently, watch movies quetly
          </p>
        </div>
        <div className="w-4/5 md:w-[48%] lg:w-[22%] mb-10">
          <span className="font-bold">Explore</span>
          <ul className="flex flex-wrap gap-5 md:block md:space-y-3 mt-3">
            <li>
              <a href="#">Cinemas</a>
            </li>
            <li>
              <a href="#">Movies List</a>
            </li>
            <li>
              <a href="#">My Ticket</a>
            </li>
            <li>
              <a href="#">Notification</a>
            </li>
          </ul>
        </div>
        <div className="w-4/5 md:w-[48%] lg:w-[22%] mb-10">
          <span className="font-bold">Our Sponsor</span>
          <ul className="mt-3 flex md:block items-center gap-6 flex-wrap">
            <li className="mb-4">
              <img src={spomsor1} alt="EbuId" />
            </li>
            <li className="mb-4">
              <img src={spomsor2} alt="CineOne21" />
            </li>
            <li className="mb-4">
              <img src={spomsor3} alt="Hiflix" />
            </li>
          </ul>
        </div>
        <div className="w-4/5 md:w-[48%] lg:w-[22%] mb-10">
          <span className="font-bold">Follow Us</span>
          <ul className="flex md:block gap-6">
            <li className="flex gap-1 my-4">
              <img src={sosmed1} alt="" className="me-2" />
              <a href="#" className="hidden md:inline">
                Tickitz Cinema id
              </a>
            </li>
            <li className="flex gap-1 my-4">
              <img src={sosmed2} alt="" className="me-2" />
              <a href="#" className="hidden md:inline">
                Tickitz.id
              </a>
            </li>
            <li className="flex gap-1 my-4">
              <img src={sosmed3} alt="" className="me-2" />
              <a href="#" className="hidden md:inline">
                Tickitz.id
              </a>
            </li>
            <li className="flex gap-1 my-4">
              <img src={sosmed4} alt="" className="me-2" />
              <a href="#" className="hidden md:inline">
                Tickitz Cinema id
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center">© 2020 Tickitz. All Rights Reserved</div>
    </footer>
  );
}
export default Footer;
