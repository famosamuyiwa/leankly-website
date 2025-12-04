import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface NavigationProps {
  currentPage?: string;
}

function Navigation({ currentPage }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const getCurrentPage = () => {
    if (currentPage) return currentPage;
    const path = location.pathname;
    if (path === "/about") return "about";
    if (path === "/contact") return "contact";
    if (path === "/account-deletion") return "account-deletion";
    return "home";
  };

  const isCurrentPage = (page: string) => {
    return getCurrentPage() === page;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="logo">
            <span className="gradient-text">Leankly</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`${
                  isCurrentPage("home")
                    ? "text-primary-300"
                    : "text-black-200 hover:text-primary-300"
                } transition-colors`}
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className={`${
                  isCurrentPage("about")
                    ? "text-primary-300"
                    : "text-black-200 hover:text-primary-300"
                } transition-colors`}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`${
                  isCurrentPage("contact")
                    ? "text-primary-300"
                    : "text-black-200 hover:text-primary-300"
                } transition-colors`}
              >
                Contact
              </Link>
              <Link
                to="/account-deletion"
                onClick={() => setIsMenuOpen(false)}
                className={`${
                  isCurrentPage("account-deletion")
                    ? "text-primary-300"
                    : "text-black-200 hover:text-primary-300"
                } transition-colors`}
              >
                Delete Account
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-black-200 hover:text-primary-300 hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-300 transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              <span className="material-symbols-rounded text-2xl">
                {isMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={`${
                isCurrentPage("home")
                  ? "bg-primary-50 text-primary-300"
                  : "text-black-200 hover:bg-primary-50 hover:text-primary-300"
              } block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors`}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className={`${
                isCurrentPage("about")
                  ? "bg-primary-50 text-primary-300"
                  : "text-black-200 hover:bg-primary-50 hover:text-primary-300"
              } block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors`}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={`${
                isCurrentPage("contact")
                  ? "bg-primary-50 text-primary-300"
                  : "text-black-200 hover:bg-primary-50 hover:text-primary-300"
              } block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors`}
            >
              Contact
            </Link>
            <Link
              to="/account-deletion"
              onClick={() => setIsMenuOpen(false)}
              className={`${
                isCurrentPage("account-deletion")
                  ? "bg-primary-50 text-primary-300"
                  : "text-black-200 hover:bg-primary-50 hover:text-primary-300"
              } block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors`}
            >
              Delete Account
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
