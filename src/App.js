import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import LandingPage from "./pages/LandingPage";
import Discover from './pages/Discover/Discover';
import AboutUs from "./pages/AboutUs";
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
        <Route path="/discover" element={<Discover />} />
        <Route path="/about_us" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;


// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import UserHomepage from "./pages/UserHomepage";
// import ProjectsPage from "./pages/ProjectsPage";
// //import Discover from "./pages/Discover/Discover";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/homepage" element={<UserHomepage />} />
//         <Route path="/projects" element={<ProjectsPage />} />
//       </Routes>
//     </Router>

//   );
// };

// export default App;
