/* eslint-disable no-unused-vars */
import { useParams } from 'react-router-dom';
import { useContext, useState } from 'react';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import houses from '../models/data';
import { ToastContainer } from 'react-toastify';
// import { toast } from 'react-toastify';
// import { Contact } from 'lucide-react';
import { UserContext } from '../models/UserContext';
// import  Axios  from 'axios';
// import {loadStripe} from '@stripe/stripe-js';

const Payment = () => {
  const { houseId } = useParams();
  const house = houses.find(house => house.id === houseId);
  // const [email, setEmail] = useState('');
  // const [phonenumber, setPhoneNumber] = useState('');
  const {indate , outdate, personcount, personage} = useContext(UserContext);



 

  return (
    <>
      <Navbar />
      <div className=" p-6 md:p-12 md:px-[500px]">
        <div className="flex flex-wrap rounded-lg  -mx-4 items-start justify-center">
          <div className=" p-4 ">
            <h2 className="text-2xl font-bold mb-4 text-center">Payment Information</h2>
            <ul className="list-none mb-4">
              <li className="mb-2">
                <span className="text-gray-200 font-semibold">House ID:</span> {houseId}
              </li>
              <div className="mb-4 ">
                <img
                  src={house.imgUrl}
                  alt={house.title}
                  className="w-full h-[40vh] object-cover rounded-lg shadow-lg"
                />
              </div>
              <div>
                
              </div>
              <li className="mb-2">
                <span className="text-gray-700 text-lg font-semibold">House Name: </span> {house.title}
              </li>
              <li className="mb-2">
                <span className="text-gray-700  text-lg font-semibold">Price:</span> {house.price}
              </li>
              {/* <div className='flex flex-col '>
              <li className="mb-2">
                <span className="text-gray-700  text-lg font-semibold">Price:</span> {house.price}
              </li>
              </div> */}
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
            <div className=' text-center'>
            <button id="submit" className="w-[20]  bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" >
                  Pay Now
                </button>
            </div>
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
