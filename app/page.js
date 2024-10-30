"use client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "@/components/Home/Home";
import AdmissionPage from "@/components/Admission/AdmissionPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} /> 
        <Route path="/admission" element={<AdmissionPage />} />
      </Routes>
    </Router>
  );
};

export default App;
