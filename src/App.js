import { useState } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Routes } from "react-router";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#1f2b31";
      showAlert("Dark Mode Disabled", "warning");
    } else {
      setmode("dark");
      document.body.style.backgroundColor = "#1f2b31";
      document.body.style.color = "white";
      showAlert("Dark Mode Enabled", "info");
    }
  };
  return (
    <>
      {/* <Navbar title="Text Utils" /> */}
      <Router>
        <Navbar
          title="Text Utils"
          about="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <Routes>
          <Route
            path="/about"
            element={
              <div className="container my-3">
                <AboutMe />
              </div>
            }
          />
          <Route
            path="/"
            element={
              <div className="container my-3">
                <TextForm
                  heading="Enter a text to analyze below"
                  showAlert={showAlert}
                  mode={mode}
                />
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
