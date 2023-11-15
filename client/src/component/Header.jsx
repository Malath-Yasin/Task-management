import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
      <header className="text-slate-700 relative flex max-w-screen flex-col overflow-hidden px-4 py-4 md:mx-auto md:flex-row md:items-center border-b-2 border-cyan-500">
        <a
          href="#"
          className="flex cursor-pointer items-center whitespace-nowrap text-2xl font-black"
        >
          <span className="mr-2 text-4xl text-cyan-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24"
            >
              {/* ... (your SVG path) ... */}
            </svg>
          </span>
          mellow
        </a>
        <input type="checkbox" className="peer hidden" id="navbar-open" />
        <label
          className="absolute top-5 right-7 cursor-pointer md:hidden"
          htmlFor="navbar-open"
        >
          <span className="sr-only">Toggle Navigation</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {/* ... (your SVG path) ... */}
          </svg>
        </label>
        <nav
          aria-label="Header Navigation"
          className=" peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start"
        >
          <ul className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
            <li className="font-bold md:mr-12">
              <a href="#">Home</a>
            </li>
            <li className="md:mr-12">
              <Link to="/addTask">Add Task</Link>
            </li>
            <li className="md:mr-12">
            <Link to="/Task">Tasks</Link>
            </li>
            <li className="md:mr-12">
              <Link to={'/login'}><button className="rounded-full border-2 border-cyan-500 px-6 py-1 text-cyan-600 transition-colors hover:bg-cyan-500 hover:text-white">
                Login
              </button></Link>
            </li>
            <li className="md:mr-12">
              <Link to={'/signup'}><button className="rounded-full border-2 border-cyan-500 px-6 py-1 text-cyan-600 transition-colors hover:bg-cyan-500 hover:text-white">
              signup
              </button></Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
