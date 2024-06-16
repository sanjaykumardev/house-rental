/* eslint-disable no-unused-vars */
import { useState, useContext } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { UserContext } from '../models/UserContext';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';



function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [passdata , setPassData] = useState();
  const navigate = useNavigate();
  const { username } = useContext(UserContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await Axios.post('http://localhost:5000/login', { email, password, role });
      const token = res.data.token;
      localStorage.setItem('token', token);
      setPassData(username); 
      toast.success('Login successful', { position: "top-center" }); 
      // console.log(passdata);
    if (role === 'Buyer') {
      navigate('/houselist');
    } 
    if (role === 'Seller') {
      navigate('/houseadd');
    }
    } catch (error) {
      console.error('Login failed:', error);
      toast.error('Login failed. Please check your credentials', { position: "top-center" }); 
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center w-full mt-20 items-center h-[80vh] mb-20 ">
      
        <div className="w-[80%] md:w-[50vh] ml-10 flex flex-col items-center">
          <div className="container bg-[#F1F7FE] p-8 rounded-2xl overflow-hidden shadow-md">
            <form onSubmit={handleSubmit} className="flex flex-col items-center p-8 gap-4 text-center">
              <div className="head flex flex-col gap-4 mb-4">
                <span className="text-3xl font-bold text-black">Sign In</span>
                <p className="text-md text-gray-600">Login to account with your email.</p>
              </div>
              <div className="inputs w-full mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  required
                  className="w-full px-4 py-2 mb-7 bg-white rounded border-b-2 border-gray-200 focus:outline-none focus:border-blue-500"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  required
                  className="w-full px-4 py-2 bg-white rounded border-b-2 border-gray-200 focus:outline-none focus:border-blue-500"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <select
                name="role"
                required
                value={role}
                className="w-full px-4 py-2 mt-2 mb-4 bg-white rounded border-b-2 border-gray-200 focus:outline-none focus:border-blue-500"
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="">Role</option>
                <option value="Seller">Seller</option>
                <option value="Buyer">Buyer</option>
              </select>
              <span className="forgot-password text-xs text-red-500">
                <p className="no-underline">Forgot Password?</p>
              </span>
              <button
                type="submit"
                className="w-full py-2 mb-2 text-white bg-red-500 rounded-full font-bold transition-all duration-300 hover:bg-black hover:text-white"
              >
                Sign In
              </button>
            </form>
            <div className="form-footer bg-[#e0ecfb] p-4 text-center text-sm">
              <p>Create an account? <Link to="/register" className="text-red-500 font-bold hover:text-black transition-all duration-300">Sign up</Link></p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
      <Footer />
    </>
  );
}

export default Login;
