import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/home/Homepage";
import Login from "./components/login/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
