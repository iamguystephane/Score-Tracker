import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/home/Homepage";
import Login from "./components/(auth-routes)/login/login";
import Signup from "./components/(auth-routes)/signup/Signup";
import ForgotPassword from "./components/(auth-routes)/forgot-password/forgotPassword";
import StudentDashboard from "./components/(student-routes)/dashboard/Dashboard";
import { useState } from "react";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/student/dashboard"
          element={
            <StudentDashboard
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
