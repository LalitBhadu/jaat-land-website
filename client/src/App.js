import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Homepage/Home";
import Contactus from "./Components/Contactus/Contactus";

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
        </Routes>
      </Router>
    </>
  );
}

export default App;
