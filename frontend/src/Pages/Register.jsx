/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { UserContext } from '../models/UserContext';
import { ToastContainer } from 'react-toastify';



function Register() {
  const [username, setUsernameLocal] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const [role, setRole] = useState("");
  const { setUsername } = useContext(UserContext);
  const [isTermsChecked, setIsTermsChecked] = useState(false);
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isTermsChecked) {
      setError(true);
      return;
    }

    try {
      const res = await Axios.post("http://localhost:5000/register", { username: username, email, password, role });
      const token = res.data.token;
      localStorage.setItem('token', token);
      console.log(role);
      console.log('Register successful');
      setUsername(username);
      setUsernameLocal(''); 
      setEmail('');
      setPassword('');
      setError(false);
      toast.success('Login successful', { position: "top-center" });
      navigate("/");
    } catch (error) {
      setError(true);
      console.error('Register failed:', error);
      toast.error('Login failed. Please check your credentials', { position: "top-center" }); 
    }
  };

  const handleTermsChange = () => {
    setIsTermsChecked(!isTermsChecked);
  };

  return (
    <div>
      <Navbar /> 
      <div className="flex justify-center w-full items-center h-[80vh]  mt-20 mb-20">
        <div className="w-[80%] md:w-[50vh] ml-10 flex flex-col items-center">
          <div className="container  bg-[#F1F7FE] p-8 rounded-2xl overflow-hidden shadow-md">
            <form onSubmit={handleSubmit} className="flex flex-col items-center p-8 gap-4 text-center">
              <div className="head flex flex-col gap-4 mb-4">
                <span className="text-3xl font-bold text-black">Sign Up</span>
                <p className="text-md text-gray-600"> Create an account with your email.</p>
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
                  type="text"
                  placeholder="username"
                  value={username}
                  required
                  className="w-full px-4 py-2 mb-7 bg-white rounded border-b-2 border-gray-200 focus:outline-none focus:border-blue-500"
                  onChange={(e) => setUsernameLocal(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  required
                  className="w-full px-4 py-2 mb-7 bg-white rounded border-b-2 border-gray-200 focus:outline-none focus:border-blue-500"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <select
                  name="role"
                  required
                  className="w-full px-4 py-2 mt-2 bg-white rounded border-b-2 border-gray-200 focus:outline-none focus:border-blue-500"
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option value="">Role</option>
                  <option value="Seller">Seller</option>
                  <option value="Buyer">Buyer</option>
                </select>
                </div>
                <div className="container mx-auto px-4 py-2 text-black flex items-center">
                <input
                  type="checkbox"
                  className="mr-2  text-blue-700"
                  id="termsCheckbox"
                  checked={isTermsChecked}
                  onChange={handleTermsChange}
                />
                <label htmlFor="termsCheckbox" className="text-gray-700">
                  I agree to the{' '}
                  <Link to="" className="underline">
                    Terms and Conditions
                  </Link>
                </label>
              </div>
              <button
                type="submit"
                className="w-full py-2 mb-2 text-white bg-red-500 rounded-full font-bold transition-all duration-300 hover:bg-black hover:text-white"
              >
                Sign UP
            </button>
            </form>
            <div className="form-footer bg-[#e0ecfb] p-4 text-center text-sm">
              <p>Have an account? <Link to="/login" className="text-red-500 font-bold hover:text-black transition-all duration-300">Sign In</Link></p>
            </div>
          </div>
        </div>
      </div>
     <ToastContainer/>
    <Footer />
    </div>
  );
}

export default Register;