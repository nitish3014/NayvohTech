import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path: string) => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0); // Immediate scroll to top
    navigate(path);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 bg-white shadow-md py-2`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <NavLink 
          to="/" 
          className="flex items-center"
          onClick={() => handleNavigation("/")}
        >
          <span className="text-xl font-bold text-gray-900">
            Nayvoh<span className="text-nayvoh-600">Tech</span>
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive 
                  ? "text-nayvoh-600 font-semibold" 
                  : "text-gray-900 hover:text-nayvoh-600"
              }`
            }
            onClick={() => handleNavigation("/")}
          >
            Home
          </NavLink>
          <NavLink 
            to="/services" 
            className={({ isActive }) => 
              `px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive 
                  ? "text-nayvoh-600 font-semibold" 
                  : "text-gray-900 hover:text-nayvoh-600"
              }`
            }
            onClick={() => handleNavigation("/services")}
          >
            Services
          </NavLink>
          <NavLink 
            to="/resources" 
            className={({ isActive }) => 
              `px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive 
                  ? "text-nayvoh-600 font-semibold" 
                  : "text-gray-900 hover:text-nayvoh-600"
              }`
            }
            onClick={() => handleNavigation("/resources")}
          >
            Resources
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive 
                  ? "text-nayvoh-600 font-semibold" 
                  : "text-gray-900 hover:text-nayvoh-600"
              }`
            }
            onClick={() => handleNavigation("/about")}
          >
            About Us
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive 
                  ? "text-nayvoh-600 font-semibold" 
                  : "text-gray-900 hover:text-nayvoh-600"
              }`
            }
            onClick={() => handleNavigation("/contact")}
          >
            Contact
          </NavLink>
        </div>

        <div className="hidden md:block">
          <Button 
            className="bg-nayvoh-600 hover:bg-nayvoh-700"
            onClick={() => handleNavigation("/contact")}
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-900 focus:outline-none"
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
                  isActive ? "text-nayvoh-600 font-semibold" : "text-gray-900 hover:text-nayvoh-600"
                }`
              }
              onClick={() => handleNavigation("/")}
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) => 
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? "text-nayvoh-600 font-semibold" : "text-gray-900 hover:text-nayvoh-600"
                }`
              }
              onClick={() => handleNavigation("/services")}
            >
              Services
            </NavLink>
            <NavLink
              to="/resources"
              className={({ isActive }) => 
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? "text-nayvoh-600 font-semibold" : "text-gray-900 hover:text-nayvoh-600"
                }`
              }
              onClick={() => handleNavigation("/resources")}
            >
              Resources
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => 
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? "text-nayvoh-600 font-semibold" : "text-gray-900 hover:text-nayvoh-600"
                }`
              }
              onClick={() => handleNavigation("/about")}
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => 
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? "text-nayvoh-600 font-semibold" : "text-gray-900 hover:text-nayvoh-600"
                }`
              }
              onClick={() => handleNavigation("/contact")}
            >
              Contact
            </NavLink>

            <Button 
              className="bg-nayvoh-600 hover:bg-nayvoh-700 w-full"
              onClick={() => handleNavigation("/contact")}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;