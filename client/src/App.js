import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Homepage/Home";
import Contactus from "./Components/Contactus/Contactus";
import About from "./Components/Pages/About";
import History from "./Components/Pages/History";
import Gotars from "./Components/Pages/Gotars";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);

    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/contact-us" element={<Contactus />} exact />
          <Route path="/about-us" element={<About />} exact />
          <Route path="/history-jaat" element={<History />} exact />
          <Route path="/gotars-jaat" element={<Gotars />} exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
