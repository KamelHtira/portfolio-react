import React, { useState } from "react";
import { Link } from "react-scroll";

const Header = ({ classicHeader, darkTheme, homeRef, handleNavClick }) => {
  const [isNavModalClose, setIsNavModalClose] = useState(true);
  const [activeSection, setActiveSection] = useState("home"); // Track active section

  const handleLinkClick = (section) => {
    setActiveSection(section); // Update active section
    setIsNavModalClose(true); // Close the navigation modal
  };

  return (
    <header id="header" className="sticky-top">
      {/* Navbar */}
      <nav className="primary-menu navbar navbar-expand-lg navbar-dark bg-dark border-bottom-0">
        <div className="container-fluid position-relative h-100 flex-lg-column ps-3 px-lg-3 pt-lg-3 pb-lg-2">
          {/* Logo */}
          <Link
            smooth
            duration={500}
            style={{ cursor: "pointer" }}
            to="home"
            className="mb-lg-auto mt-lg-4"
            onClick={() => handleLinkClick("home")}
          >
            <span className="bg-dark-2 rounded-pill p-2 mb-lg-1 d-none d-lg-inline-block">
              <img
                width={150}
                className="img-fluid rounded-pill d-block"
                src="images/profile.jpg"
                title="I'm Kamel"
                alt="profile"
              />
            </span>
            <h1 className="text-5 text-white text-center mb-0 d-lg-block">
              Kamel Htira
            </h1>
          </Link>
          {/* Logo End */}
          <div
            id="header-nav"
            className={
              isNavModalClose
                ? "collapse navbar-collapse w-100 my-lg-auto"
                : "show navbar-collapse w-100 my-lg-auto"
            }
          >
            <ul className="navbar-nav text-lg-center my-lg-auto py-lg-3">
              <li className="nav-item">
                <Link
                  className={`nav-link ${activeSection === "home" ? "active" : ""}`}
                  smooth
                  duration={500}
                  style={{ cursor: "pointer" }}
                  to="home"
                  onClick={() => handleLinkClick("home")}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${activeSection === "about" ? "active" : ""}`}
                  smooth
                  duration={500}
                  style={{ cursor: "pointer" }}
                  to="about"
                  onClick={() => handleLinkClick("about")}
                >
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${activeSection === "resume" ? "active" : ""}`}
                  smooth
                  duration={500}
                  style={{ cursor: "pointer" }}
                  to="resume"
                  onClick={() => handleLinkClick("resume")}
                >
                  Resume
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${activeSection === "contact" ? "active" : ""}`}
                  smooth
                  duration={500}
                  style={{ cursor: "pointer" }}
                  to="contact"
                  onClick={() => handleLinkClick("contact")}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <button
            onClick={() => setIsNavModalClose(!isNavModalClose)}
            className={isNavModalClose ? "navbar-toggler" : "navbar-toggler show"}
            id="navbar-toggler"
            type="button"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
