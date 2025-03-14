
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <NavLink to="/" className="flex items-center">
          <span className="text-xl font-bold text-gray-900">
            Nayvoh<span className="text-nayvoh-600">Tech</span>
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <NavLink to="/" className={({ isActive }) => 
            `nav-link ${isActive ? 'active' : ''}`
          }>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => 
            `nav-link ${isActive ? 'active' : ''}`
          }>
            About
          </NavLink>
          <NavLink to="/services" className={({ isActive }) => 
            `nav-link ${isActive ? 'active' : ''}`
          }>
            Services
          </NavLink>
          <NavLink to="/tools" className={({ isActive }) => 
            `nav-link ${isActive ? 'active' : ''}`
          }>
            Tools
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => 
            `nav-link ${isActive ? 'active' : ''}`
          }>
            Contact
          </NavLink>
        </div>

        <div className="hidden md:block">
          <Button className="bg-nayvoh-600 hover:bg-nayvoh-700">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full absolute top-16 left-0 shadow-md animate-fade-in">
          <div className="flex flex-col p-4 space-y-3">
            <NavLink
              to="/"
              className={({ isActive }) => 
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? "text-nayvoh-600 font-semibold" : "text-gray-700 hover:text-nayvoh-600"
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => 
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? "text-nayvoh-600 font-semibold" : "text-gray-700 hover:text-nayvoh-600"
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) => 
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? "text-nayvoh-600 font-semibold" : "text-gray-700 hover:text-nayvoh-600"
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </NavLink>
            <NavLink
              to="/tools"
              className={({ isActive }) => 
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? "text-nayvoh-600 font-semibold" : "text-gray-700 hover:text-nayvoh-600"
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Tools
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => 
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? "text-nayvoh-600 font-semibold" : "text-gray-700 hover:text-nayvoh-600"
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>
            <Button className="bg-nayvoh-600 hover:bg-nayvoh-700 w-full">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
