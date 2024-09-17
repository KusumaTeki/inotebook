// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import NoteSate from "./context/notes/NoteState";
import Login from "./components/Login";
import Alert from "./components/Alert";
import Signup from "./components/Signup";

import { useState } from "react";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <NoteSate>
        <Router>
          <NavBar />
          <Alert alert={alert} />
          <div className="container">
            <Routes>
              <Route element={<Home showAlert={showAlert} />} path="/" />
              <Route element={<About />} path="/about" />
              <Route element={<Login showAlert={showAlert} />} path="/login" />
              <Route
                element={<Signup showAlert={showAlert} />}
                path="/signup"
              />
            </Routes>
          </div>
        </Router>
      </NoteSate>
    </>
  );
}

export default App;
