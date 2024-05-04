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
          <Route path="/home" element={<Hero />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
