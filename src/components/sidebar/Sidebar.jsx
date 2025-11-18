import React from "react";
import {
  Sidebar as Collapse,
  LayoutDashboard,
  LogOut,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Sidebar({ routes, sidebarOpen, setSidebarOpen }) {
  const location = useLocation();

  const getCurrentPath = (url) => {
    if (location.pathname === url) {
      return `bg-yellow-200 py-2 text-yellow-700 ${
        sidebarOpen ? "border-r-4" : "rounded-lg"
      } `;
    }
    return "";
  };

  return (
    <div
      className={`xsm:h-[92vh] lg:h-[87vh] transition-all duration-300 ease-in-out fixed ${
        sidebarOpen ? "w-65" : "w-15"
      } shadow px-2 flex flex-col justify-between pb-5`}
    >
      <div>
        <div
          className={`flex ${
            sidebarOpen ? "flex-row" : "flex-col items-start"
          } items-center gap-2 border-b-gray-300 border-b py-2 justify-between`}
        >
          <div className="flex items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1jWXsYTijwUVsko7IiuJAoTJRcs1Z9Gb2ew&s"
              alt="My Avatar"
              width={40}
              className="rounded-full"
            />
            {sidebarOpen && <p>John Doe</p>}
          </div>
          <button
            className={`cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-in-out rounded-lg p-2`}
            onClick={() => setSidebarOpen((prev) => !prev)}
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
                className={`flex gap-4! items-center mb-2 hover:bg-yellow-200 py-2 hover:text-yellow-700 transition-all duration-300 ease-in-out px-2 ${
                  !sidebarOpen && "hover:rounded-lg"
                } ${getCurrentPath(route.route)}`}
              >
                <IconComponent />
                {sidebarOpen && <p> {route.name} </p>}
              </Link>
            );
          })}
        </div>
      </div>
      <button className="w-full cursor-pointer flex items-center justify-center bg-gray-200 rounded-lg gap-2 py-2 shadow transition-all duration-300 ease-in-out hover:bg-gray-400 text-gray-700 hover:text-white">
        <LogOut size={18} /> {sidebarOpen && <p>Logout</p>}
      </button>
    </div>
  );
}

export default Sidebar;
