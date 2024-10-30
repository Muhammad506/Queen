"use client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "@/components/Home/Home";
import AdmissionPage from "@/components/Admission/AdmissionPage";
import OurPrograms from "@/components/OurPrograms";

const App = () => {
  return (
    <>
      <Home />
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/admission" element={<AdmissionPage />} />
          <Route path="/program" element={<OurPrograms />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
