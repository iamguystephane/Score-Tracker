import React from "react";
import Sidebar from "../../sidebar/Sidebar";
import { studentsRoutes } from "../../../scripts/sidebar-routes";
import DashboardNav from "../../nav/DashboardNav";
import DashboardCard from "./DashboardCard";
import { Book, BookOpen, GraduationCap } from "lucide-react";
import Announcements from "./Announcements";

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
      <div className={`${sidebarOpen ? "ml-68" : "ml-20"} mt-6 pt-20 pb-8`}>
        <h1 className="text-2xl font-medium">Dashboard</h1>
        <div className="flex items-center gap-3 flex-wrap">
          <DashboardCard
            title="Total Courses"
            content={12}
            bgColor="#DCE6CD"
            textColor="#628141"
            Icon={<Book />}
          />
          <DashboardCard
            title="Average Grade"
            content="B+"
            bgColor="#F9E7D1"
            textColor="#E67E22"
            Icon={<BookOpen />}
          />
          <DashboardCard
            title="Semester One GPA"
            content="3.78"
            bgColor="#F5D6D6"
            textColor="#BF1A1A"
            Icon={<GraduationCap />}
          />
        </div>
        <div className="mt-8">
          <h1 className="text-2xl font-medium">Announcements</h1>
          <Announcements />
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
