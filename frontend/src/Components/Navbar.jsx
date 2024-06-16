import { useState, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import { FaHeadset } from 'react-icons/fa';
import { UserContext } from '../models/UserContext';
import pic4 from '../assets/pic5.png';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token') !== null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigator = useNavigate();
  const location = useLocation();
  const { username, items } = useContext(UserContext);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setIsLoggedIn(false);
    navigator('/loader');
    setTimeout(() => {
      navigator('/');
    }, 1000);
  };

  return (
    <nav className="bg-white text-black relative z-20">
      <div className="px-2 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <img className="h-8 mr-2 ml-2" src={pic4} alt="Logo" />
          <Link to="/home" className="text-2xl font-bold">
            House Rental
          </Link>
        </div>
        <div className="flex justify-end space-x-2 relative items-center">
          {isLoggedIn ? (
            <>
              <div className="flex space-x-2">
              <Link to="/customer-care" className="text-lg font-semibold px-2 py-1 rounded hover:bg-blue-400 flex items-center">
                <FaHeadset className="inline mr-2 h-[3vh] w-full" />
              </Link>
                <Link to="/pay-rent" className="text-sm font-bold px-3 py-2 rounded bg-green-400 text-black hover:bg-gray-200">
                  Pay Rent
                </Link>
                <Link to="/post-property" className="text-sm font-bold px-3 py-2 rounded bg-green-400 text-black hover:bg-gray-200">
                  Post Your Property
                </Link>
              </div>
              <button onClick={() => setIsProfileOpen(!isProfileOpen)} className="text-lg font-semibold px-2 py-1 rounded hover:bg-blue-400 flex items-center">
                <CgProfile className="inline mr-2 h-[3vh] w-full" />
                {username}
              </button>
             
              {isProfileOpen && (
                <div className="absolute top-4 right-2 mt-10 py-2 font-semibold bg-gray-100 text-black rounded-md shadow-lg z-30">
                  <Link to="/account" className="block px-4 py-2 hover:bg-black hover:text-white">
                    Dashboard
                  </Link>
                  <Link to="/cart" className="block px-4 py-2 hover:bg-black hover:text-white">
                    My Cart ({items.length})
                  </Link>
                  <Link to="/profile" className="block px-4 py-2 hover:bg-black hover:text-white">
                    Account
                  </Link>
                  <button onClick={handleLogout} className="block w-full text-left px-4 py-2 hover:bg-black hover:text-white">
                    Logout
                  </button>
                </div>
              )}
            </>
          ) : (
            <>
              {location.pathname !== '/register' && (
                <Link to="/register">
                  <button className="text-lg font-bold mr-2 px-4 py-2 rounded bg-black  text-white hover:bg-red-500 hover:text-white">
                    Sign Up
                  </button>
                </Link>
              )}
              {location.pathname !== '/' && (
                <Link to="/">
                  <button className="text-lg font-bold  mr-2 px-4 py-2 rounded bg-black text-white hover:bg-red-500 hover:text-white">
                    Sign In
                  </button>
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
