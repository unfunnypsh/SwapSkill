import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/Footer";
import Header from "./components/Navbar";
import "./App.css";
import './index.css';


const App = () => {
  return (
    <Router>
      <Header /> 
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
