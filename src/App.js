import Login from "./auth/Login";
import Register from "./auth/Register";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Hero />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
