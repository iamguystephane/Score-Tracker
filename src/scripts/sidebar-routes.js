import {
  Book,
  GraduationCap,
  LayoutDashboard,
  MessageCircle,
  Users,
} from "lucide-react";

const studentsRoutes = [
  {
    id: "1",
    name: "Dashboard",
    route: "/student/dashboard",
    icon: LayoutDashboard,
  },

  {
    id: "2",
    name: "Grades",
    route: "/student/grades",
    icon: GraduationCap,
  },

  {
    id: "3",
    name: "Courses",
    route: "/student/courses",
    icon: Book,
  },

  {
    id: "4",
    name: "Complaints",
    route: "/student/complaints",
    icon: MessageCircle,
  },
];

const adminRoutes = [
  {
    id: "1",
    name: "Dashboard",
    route: "/admin/dashboard",
    icon: LayoutDashboard,
  },

  {
    id: "2",
    name: "Courses",
    route: "/admin/courses",
    icon: Book,
  },

  {
    id: "3",
    name: "Users",
    route: "/admin/users",
    icon: Users,
  },
];

const lecturerRoutes = [
  {
    id: "1",
    name: "Dashboard",
    route: "/lecturer/dashboard",
    icon: LayoutDashboard,
  },

  {
    id: "2",
    name: "Courses",
    route: "/lecturer/courses",
    icon: Book,
  },

  {
    id: "3",
    name: "Students",
    route: "/lecturer/students",
    icon: Users,
  },
];

export { studentsRoutes, adminRoutes, lecturerRoutes };
