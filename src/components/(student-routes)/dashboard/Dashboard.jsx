import React from "react";
import Sidebar from "../../sidebar/Sidebar";
import { studentsRoutes } from "../../../scripts/sidebar-routes";
import DashboardNav from "../../nav/DashboardNav";

function StudentDashboard({ sidebarOpen, setSidebarOpen }) {
  return (
    <div>
      <div>
        <DashboardNav />
        <Sidebar
          routes={studentsRoutes}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
      </div>
      <div className={`${sidebarOpen ? 'ml-68' : 'ml-20'} mt-6`}>
        <h1 className="text-2xl font-medium">Dashboard</h1>
      </div>
    </div>
  );
}

export default StudentDashboard;
