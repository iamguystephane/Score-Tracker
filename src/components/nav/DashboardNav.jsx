import { Bell, LogOut, Search } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function DashboardNav() {
  return (
    <div className="flex items-center justify-between shadow xsm:h-[8vh] lg:h-[13vh] pr-2">
      <div className="flex items-center gap-5">
        <div className="flex items-center justify-center gap-2">
          <img
            src="https://student.eschosys.com/images/logo.jpg"
            alt="Logo"
            width={60}
          />
          <p className="text-sm font-semibold logo xsm:hidden md:flex">
            ESCHOSYS BIFMET
          </p>
        </div>
        <div className="flex items-center gap-2 bg-gray-200 xsm:rounded-full md:rounded-2xl py-2 px-3">
          <Search size={18} color="gray" />
          <input
            type="text"
            className="border-none focus:outline-none w-80 text-gray-500 xsm:hidden md:flex"
            placeholder="Search for a course"
          />
        </div>
      </div>
      <div className="flex items-center gap-1">
        <button className="cursor-pointer rounded-lg p-2 hover:bg-gray-200 transition-all duration-300 ease-in-out shadow">
          <Bell size={18} color="gray" />
        </button>
        <Link
          to="/"
          className="cursor-pointer rounded-lg p-2 hover:bg-gray-200 transition-all duration-300 ease-in-out shadow"
        >
          <LogOut size={18} color="gray" />
        </Link>
        <div className="flex items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1jWXsYTijwUVsko7IiuJAoTJRcs1Z9Gb2ew&s"
            alt="My Avatar"
            width={40}
            className="rounded-full shadow cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default DashboardNav;
