import React from "react";
import ReactDOM from "react-dom/client";
import MainView from "./view/MainView";
import AboutMe from "./view/AboutMe";
import ViewProjects from "./view/ViewProjects";
import Bio from "./view/Bio";
import Contact from "./view/Contact";
import Footer from "./view/Footer";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainView />
    <AboutMe />
    <ViewProjects />
    <Bio />
    <Contact />
    <Footer />
  </React.StrictMode>
);
