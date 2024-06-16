import { useParams } from 'react-router-dom';
import { useContext, useState } from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import houses from '../models/data';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
// import { Contact } from 'lucide-react';
import { UserContext } from '../models/UserContext';
import  Axios  from 'axios';
// import {loadStripe} from '@stripe/stripe-js';

const Payment = () => {
  const { houseId } = useParams();
  const house = houses.find(house => house.id === houseId);
  const [email, setEmail] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const {indate , outdate, personcount, personage} = useContext(UserContext);
  // const serviceTax = house.price * 0.1;
  // const gstTax = house.price * 0.05;
  // const netTax = serviceTax + gstTax;
  // const totalPrice = house.price + netTax;


  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const res = await Axios.post('http://localhost:5000/addeddetails', {
        phonenumber ,
        email
      });
      
      console.log(res);
      setPhoneNumber("");
      setEmail("");
     
      toast.success('Login successful', { position: "top-center" }); 
    } catch (error) {
      console.error('Error:', error);
      toast.error('Login failed. Please check your credentials', { position: "top-center" }); 
    }
  };

  return (
    <>
      <Navbar />
      <div className=" p-6 md:p-12">
        <div className="flex flex-wrap rounded-lg shadow-lg overflow-hidden -mx-4 items-start justify-center">
          <div className=" p-4 ">
            <h2 className="text-2xl font-bold mb-4">House Details</h2>
            <ul className="list-none mb-4">
              <li className="mb-2">
                <span className="text-gray-700 font-semibold">House ID:</span> {houseId}
              </li>
              <div className="mb-4">
                <img
                  src={house.imgUrl}
                  alt={house.title}
                  className="w-full h-[40vh] object-cover rounded-lg shadow-lg"
                />
              </div>
              <li className="mb-2">
                <span className="text-gray-700 text-lg font-semibold">House Name: </span> {house.title}
              </li>
              <li className="mb-2">
                <span className="text-gray-700  text-lg font-semibold">Price:</span> {house.price}
              </li>
            </ul>
            <div className="mt-4">
              <h2 className="text-xl font-semibold text-gray-800">Facilities</h2>
              <div className="flex flex-wrap mt-2">
                <div className="flex items-center mr-4 mb-2">
                  <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V7a2 2 0 00-2-2H6a2 2 0 00-2 2v6M7 10h10M7 16h.01M17 16h.01M9 21h6a2 2 0 002-2v-5H7v5a2 2 0 002 2z" /></svg>
                  <span>WiFi</span>
                </div>
                <div className="flex items-center mr-4 mb-2">
                  <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 17l-2 2m2-2l2 2m-2-2V4m0 0L4 7m4-3l4 3m-4-3v13m8 0v-5a2 2 0 00-2-2H8a2 2 0 00-2 2v5m8 0l4-4m-4 4l-4-4" /></svg>
                  <span>Air Conditioning</span>
                </div>
                <div className="flex items-center mr-4 mb-2">
                  <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6a1 1 0 011-1h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v4l3 2" /></svg>
                  <span>TV</span>
                </div>
                <div className="flex items-center mr-4 mb-2">
                  <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h.01M15 12h.01M12 12h.01M7 12h.01M17 12h.01M20 9v6M4 9v6M4 21h16a2 2 0 002-2V5a2 2 0 00-2-2H4a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                  <span>Rooms</span>
                </div>
              </div>
              <div className='mt-3 '>
                <h2 className='text-xl font-semibold text-gray-800'>Guest Information</h2>
                <div className='mb-3 mt-4'>
                <div className='mb-3'>
                  <h1>StartDate:  {indate}</h1>
                </div>
                <div className='mb-3'>
                  <h1>EndDate :  {outdate}</h1>
                </div>
                <div className='mb-3'>
                  <h1>Number Of Person : {personcount}</h1>
                </div>
                <div className='mb-3'>
                  <h1>Age :  {personage}</h1>
                </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" md:w-1/2 xl:w-[40%] ml-40 p-4">
            <h2 className="text-2xl font-bold mb-4 text-center">Payment Information</h2>
            <div className="flex mb-4 justify-around text-3xl">
              <i className="fa fa-cc-visa" />
              <i className="fa fa-cc-mastercard" />
              <i className="fa fa-cc-amex" />
              <i className="fa fa-cc-paypal" />
            </div>
            <form id="payment-form" onClick={handleFormSubmit}>
             
              <div className="mb-4 ">
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 text-sm text-gray-700 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="phoneNumber">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  value={phonenumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full p-2 text-sm text-gray-700 border border-gray-300 rounded"
                />
              </div>
              {/* <div className="mb-4">
                <p className="text-gray-700 mb-2">Price: {house.price}</p>
                <p className="text-gray-700 mb-2">Service Tax (10%): ${serviceTax.toFixed(2)}</p>
                <p className="text-gray-700 mb-2">GST Tax (5%): ${gstTax.toFixed(2)}</p>
                <p className="text-gray-700 mb-2">Net Tax: ${netTax.toFixed(2)}</p>
                <p className="text-gray-700 mb-2">Total Price: ${totalPrice}</p>
              </div> */}
             
              <p className="text-gray-700 mt-4">
                Secure your rental today with our easy online payment options, including credit card, debit card, and PayPal.
              </p>
              
              <p className="text-gray-700 mt-4">
                Secure your rental today with our easy online payment options, including credit card, debit card, and PayPal.
              </p>
              <p className="text-gray-700 mt-2">
                By proceeding with your rental, you agree to our terms and conditions, including our cancellation and refund policies.
              </p>
            <div className=' mt-[60%] ml-[80%]'>
            <button id="submit" className="w-full  bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" >
                  Pay Now
                </button>
            </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer/>
      {/* <Contact/> */}
      <Footer />
    </>
  );
};

export default Payment;
