// Navbar.jsx
import React, { useState, useEffect } from "react";
import MenuIcon from "../assets/menu.png";
import CloseIcon from "../assets/x.png";
import { useNavigate, useLocation, Navigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userCategory, setUserCategory] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem("fureverUser");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUserCategory(userData.category);
    }
  }, []);

  const handleSignUp = () => {
    navigate("/signup");
  };

  const handleLogout = () => {
    localStorage.removeItem("fureverUser");
    setUserCategory(null);
    navigate("/");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false); // Close menu after navigation
  };

  // Don't show navbar on signup page
  if (location.pathname === "/signup") return null;

  return (
    <nav className="navbar bg-gray-800/80 shadow-lg fixed top-0 left-0 w-full z-50 backdrop-blur-sm mt-4 rounded-4xl">
      <div className="navbar-container max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div
          className="logo text-3xl font-extrabold bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent tracking-wide cursor-pointer"
          onClick={() => navigate("/")}
        >
          FurEverCare+
        </div>

        {/* Desktop Navigation */}
        <ul className="desktop-menu hidden md:flex space-x-8 text-white font-medium">
          <li 
            onClick={() => navigate("/home")} 
            className="menu-item cursor-pointer hover:text-green-400"
          >
            Home
          </li>
          
          <li 
            onClick={() => navigate("/about")} 
            className="menu-item cursor-pointer hover:text-green-400"
          >
            About
          </li>
          
          {userCategory === "Vet" && (
            <li
              className="menu-item hover:text-green-400 cursor-pointer transition"
              onClick={() => navigate("/vetinfo")}
            >
              Vet
            </li>
          )}

          {userCategory === "Animal Shelter" && (
            <li
              className="menu-item hover:text-green-400 cursor-pointer transition"
              onClick={() => navigate("/shelter")}
            >
              Animal Shelter
            </li>
          )}

          {userCategory === "Pet Owner" && (
            <li
              className="menu-item hover:text-green-400 cursor-pointer transition"
              onClick={() => navigate("/petowner")}
            >
              Pet Owner
            </li>
          )}
        </ul>

        {/* Auth Buttons - Desktop */}
        <div className="auth-buttons hidden md:block">
          {!userCategory ? (
            <button
              onClick={handleSignUp}
              className="signup-btn bg-gradient-to-r from-green-400 to-emerald-500 text-gray-900 px-5 py-2 rounded-full shadow-md hover:scale-105 transition-transform"
            >
              Sign Up
            </button>
          ) : (
            <button
              onClick={handleLogout}
              className="logout-btn bg-green-400 text-gray-900 px-5 py-2 rounded-full shadow-md hover:bg-green-500 transition"
            >
              Log Out
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div
          className="mobile-menu-button md:hidden text-gray-300 cursor-pointer"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <img src={CloseIcon} width={28} height={28} alt="Close menu" />
          ) : (
            <img src={MenuIcon} width={28} height={28} alt="Open menu" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu md:hidden bg-gray-800 shadow-md px-6 py-4 space-y-4 text-gray-300 font-medium">
          <ul className="mobile-nav-items space-y-3">
            <li 
              onClick={() => Navigate("/home")} 
              className="mobile-menu-item cursor-pointer hover:text-green-400 py-2"
            >
              Home
            </li>
            
            <li 
              onClick={() => Navigate("/about")} 
              className="mobile-menu-item cursor-pointer hover:text-green-400 py-2"
            >
              About
            </li>
            
            {userCategory === "Vet" && (
              <li
                onClick={() => handleNavigation("/vetinfo")}
                className="mobile-menu-item cursor-pointer hover:text-green-400 py-2"
              >
                Vet Dashboard
              </li>
            )}

            {userCategory === "Animal Shelter" && (
              <li
                onClick={() => handleNavigation("/shelter")}
                className="mobile-menu-item cursor-pointer hover:text-green-400 py-2"
              >
                Animal Shelter
              </li>
            )}

            {userCategory === "Pet Owner" && (
              <li
                onClick={() => handleNavigation("/petowner")}
                className="mobile-menu-item cursor-pointer hover:text-green-400 py-2"
              >
                Pet Owner
              </li>
            )}
          </ul>

          {/* Auth Buttons - Mobile */}
          {!userCategory ? (
            <button
              onClick={handleSignUp}
              className="mobile-signup-btn w-full bg-gradient-to-r from-green-400 to-emerald-500 text-gray-900 py-2 rounded-full shadow-md hover:scale-105 transition-transform"
            >
              Sign Up
            </button>
          ) : (
            <button
              onClick={handleLogout}
              className="mobile-logout-btn w-full bg-green-400 text-gray-900 py-2 rounded-full shadow-md hover:bg-green-500 transition"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;