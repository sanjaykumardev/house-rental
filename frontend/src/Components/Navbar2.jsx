import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import { useContext } from 'react';
import { UserContext } from '../models/UserContext'


const Navbar2 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token') !== null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigator = useNavigate();
  const { username } = useContext(UserContext);
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigator('/loader');
    setTimeout(() => {
      navigator('/');
    }, 1000);
  };

 

  return (
    <nav className="bg-red-500 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          House Rental
        </Link>
        <div className="hidden md:flex text-lg space-x-20">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/services" className="hover:underline">
            Services
          </Link>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </div>

        <div className="flex space-x-4 relative">
          {isLoggedIn ? (
            <>
              <button onClick={() => setIsProfileOpen(!isProfileOpen)} className="text-lg font-semibold px-5 py-2 rounded hover:bg-blue-400">
                <CgProfile className="inline mr-2 h-6" />
                {username}
              </button>
              {isProfileOpen && (
                <div className="absolute right-0 mt-10 py-2 font-semibold bg-gray-700 text-gray-200 rounded-md shadow-lg">
                  <Link to="/account" className="block px-4 py-2 hover:bg-gray-600">
                    Dashboard
                  </Link>
                  <Link to="/tasks" className="block px-4 py-2 hover:bg-gray-600">
                    Cart
                  </Link>
                  <Link to="/profile" className="block px-4 py-2 hover:bg-gray-600">
                    Account
                  </Link>
                  <button onClick={handleLogout} className="block w-full text-left px-4 py-2 hover:bg-gray-600">
                    Logout
                  </button>
                </div>
              )}
            </>
          ) : (
            <>
              <Link to="/">
                <button className="text-xl font-bold px-4 py-2 rounded bg-white text-black hover:bg-black  hover:text-white">
                  Sign In
                </button>
              </Link>
              <Link to="/register">
                <button className="text-xl font-bold px-4 py-2 rounded bg-white text-black hover:bg-black  hover:text-white">
                  Sign Up
                </button>
              </Link>
            </>
          )}
        </div>

        <div className="md:hidden">
          {/* Mobile menu toggle button */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
