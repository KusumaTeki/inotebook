// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
