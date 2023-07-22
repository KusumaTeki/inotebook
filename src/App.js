// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import NoteSate from "./context/notes/NoteState";
import Alert from "./components/Alert";

function App() {
  return (
    <>
      <NoteSate>
        <Router>
          <NavBar />
          <Alert message="Nice" />
          <div className="container">
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<About />} path="/about" />
          </Routes>
          </div>
        </Router>
      </NoteSate>
    </>
  );
}

export default App;
