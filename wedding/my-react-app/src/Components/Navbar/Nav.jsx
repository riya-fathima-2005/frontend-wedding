import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

import logo from "../../assets/Images/logo.png";
import "../../assets/Style/Nav.css";

const Nav = () => {
  const navigate = useNavigate();

  // NAVBAR SCROLL
  const [scrolled, setScrolled] = useState(false);

  // USER STATE
  const [user, setUser] = useState(null);

  // PROFILE DROPDOWN
  const [showProfile, setShowProfile] = useState(false);

  // CHECK LOGIN
  useEffect(() => {
    const token = localStorage.getItem("token");

    const savedUser = localStorage.getItem("user");

    if (token && savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // SCROLL EFFECT
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // LOGOUT
  const handleLogout = () => {
    localStorage.removeItem("token");

    localStorage.removeItem("refresh");

    localStorage.removeItem("user");

    setUser(null);

    navigate("/login");
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top navbar-custom ${
        scrolled ? "navbar-scrolled" : "navbar-transparent"
      }`}
    >
      <div className="container">
        {/* LOGO */}
        <NavLink to="/" className="navbar-brand">
          <img src={logo} alt="Company Logo" className="company-logo" />
        </NavLink>

        {/* MOBILE TOGGLE */}
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* NAVBAR MENU */}
        <div className="collapse navbar-collapse" id="navMenu">
          {/* NAV LINKS */}
          <ul className="navbar-nav mx-auto gap-lg-4 text-center">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                HOME
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/wedding" className="nav-link">
                WEDDING
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/venue" className="nav-link">
                VENUE
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/blog" className="nav-link">
                BLOG
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/faqqq" className="nav-link">
                FAQ
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">
                CONTACT
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/host" className="nav-link">
                BECOME A HOST
              </NavLink>
            </li>
          </ul>

          {/* AUTH SECTION */}
          {!user ? (
            <div className="d-flex gap-3 auth-buttons">
              <NavLink
                to="/login"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  paddingTop: "15px",
                  marginBottom: "-10px",
                }}
              >
                <b>Login</b>
              </NavLink>

              <NavLink
                to="/sign"
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  paddingTop: "15px",
                  marginBottom: "-10px",
                }}
              >
                <b>Sign Up</b>
              </NavLink>
            </div>
          ) : (
            <div className="position-relative">
              {/* PROFILE ICON */}
              <FaUserCircle
                size={38}
                color="#fff"
                style={{
                  cursor: "pointer",
                }}
                onClick={() => setShowProfile(!showProfile)}
              />

              {/* PROFILE DROPDOWN */}
           {showProfile && (
  <div className="profile-dropdown">

    <div className="text-center">
      <FaUserCircle size={60} color="#000" />

      <h6 className="mt-2">
        {user?.username || user?.name || "User"}
      </h6>

      <p>{user?.email}</p>
    </div>

    <hr />

    <NavLink
      to="/smallprofile"
      className="btn btn-outline-dark w-100 mb-2"
      onClick={() => setShowProfile(false)}
    >
      My Profile
    </NavLink>

    <NavLink
      to="/my-bookings"
      className="btn btn-outline-dark w-100 mb-2"
      onClick={() => setShowProfile(false)}
    >
      My Bookings
    </NavLink>

    <button
      className="btn btn-dark w-100"
      onClick={handleLogout}
    >
      Logout
    </button>

  </div>
)}  
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
