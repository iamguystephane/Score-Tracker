import React from "react";
import { Sidebar as Collapse, LayoutDashboard, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Sidebar({ routes }) {
  const location = useLocation();

  const getCurrentPath = (url) => {
    if (location.pathname === url) {
      return "bg-yellow-200 py-2 text-yellow-700 border-r-4";
    }
    return "";
  };

  return (
    <div className=" h-screen fixed w-60 shadow px-2">
      <div className="flex items-center gap-2 border-b-gray-300 border-b py-2 justify-between">
        <div className="flex items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1jWXsYTijwUVsko7IiuJAoTJRcs1Z9Gb2ew&s"
            alt="My Avatar"
            width={40}
            className="rounded-full"
          />
          <p>John Doe</p>
        </div>
        <button
          className={`cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-in-out rounded-lg p-2`}
        >
          <Collapse size={18} />
        </button>
      </div>
      <div className="mt-5">
        {routes.map((route) => {
          const IconComponent = route.icon;
          return (
            <Link
              to={route.route}
              className={`flex gap-4! items-center mb-2 hover:bg-yellow-200 py-2 hover:text-yellow-700 transition-all duration-300 ease-in-out px-2 ${getCurrentPath(route.route)}`}
            >
              <IconComponent />
              <p> {route.name} </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
