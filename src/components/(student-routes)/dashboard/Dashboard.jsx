import React from "react";
import Sidebar from "../../sidebar/Sidebar";
import { studentsRoutes } from "../../../scripts/sidebar-routes";

function StudentDashboard() {
  return (
    <div>
      <nav></nav>
      <Sidebar routes={studentsRoutes} />
    </div>
  );
}

export default StudentDashboard;
