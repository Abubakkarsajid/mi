import { useState } from "react";
import { NavLink } from "react-router-dom";
// import "./custom.css";
export function Navbars() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  return (
    <>
      <nav className="bg-gray-700 border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://mi-networks.web.app/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
            id="logo"
          >
            <span className="self-center text-2xl  whitespace-nowrap text-green-500 font-extrabold">
              MI-Networks
            </span>
          </a>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`w-full md:block md:w-auto ${isOpen ? "" : "hidden"}`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              <li>
                <NavLink
                  to="/"
                  onClick={handleLinkClick}
                  className="block hover:-translate-y-1 py-2 px-3  text-green-500 rounded md:bg-transparent md:text-green-500 md:p-0 md:dark:text-green-500"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  onClick={handleLinkClick}
                  className="block hover:-translate-y-2 py-2 px-3 text-gray-400 rounded md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0 md:dark:hover:text-green-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  onClick={handleLinkClick}
                  className="block hover:-translate-y-2 py-2 px-3 text-gray-400 rounded md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0 md:dark:hover:text-green-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/pricing"
                  onClick={handleLinkClick}
                  className="block hover:-translate-y-2 py-2 px-3 rounded  text-gray-400 md:hover:bg-transparent md:border-0 md:hover:text-green-500 md:p-0 md:dark:hover:text-green-500  md:dark:hover:bg-transparent"
                >
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  onClick={handleLinkClick}
                  className="block hover:-translate-y-2 py-2 px-3 text-gray-400 rounded md:hover:bg-transparent md:border-0  md:hover:text-green-500 md:p-0 md:dark:hover:text-green-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
