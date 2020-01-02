import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"; // React Router

// Importing Styles
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap 4
import "./index.css"; // Custom CSS

// Importing Components
import Sidebar from "./components/Sidebar.js"; // Sidebar
import Navigation from "./components/Navigation.js"; // Navigation
import Footer from './components/Footer.js'; // Footer
import ScrollToTop from "./components/ScrollToTop"; // Scroll To Top Button
import About from "./components/About.js"; // About
import Experience from "./components/Experience.js"; // Experience
import Education from "./components/Education.js"; // Education
import Skills from "./components/Skills.js"; // Skills
import Portfolio from "./components/Portfolio.js"; // Portfolio

function App() {
  return (
    <Router>
      <Navigation />
      <Footer />
      <div className="wrapper">
        <Sidebar />
        <Redirect from="/" to="/about" />
        <Route path="/about" component={About} />
        <Route path="/experience" component={Experience} />
        <Route path="/education" component={Education} />
        <Route path="/skills" component={Skills} />
        <Route path="/portfolio" component={Portfolio} />
      </div>
      <ScrollToTop />
    </Router>
  );
}

export default App;
