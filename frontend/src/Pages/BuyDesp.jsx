import { useParams } from 'react-router-dom';
import houses from '../models/data';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AdditionalData from '@/Components/AdditionalData';
// import { useState } from 'react';
// import axios from 'axios';
const BuyDesp = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const house = houses.find(houses => houses.id === id);
  // const [calendar, setCalendar] = useState('');
  // const [numberOfPersons, setNumberOfPersons] = useState('');
  // const [age, setAge] = useState('');


  // const handleFormSubmit = async(e) => {
  //   e.preventDefault();
  //   const res = await axios.post('http://localhost:5000/details' , {calendar ,numberOfPersons ,age})
  //   console.log(res)
  //   console.log('Calendar:', calendar);
  //   console.log('Number of Persons:', numberOfPersons);
  //   console.log('Age:', age);
  //   // Reset the form fields after submission if needed
  //   setCalendar('');
  //   setNumberOfPersons('');
  //   setAge('');
  // };


  

  if (!house) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Navbar />
      <div className="flex items-center mt-2 ml-2 mb-4">
        <button onClick={() => navigate(-1)} className="mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600 hover:text-gray-900"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>

      </div>
      <div className="flex justify-center items-center mt-10 mb-10">
        <div key={house.id} className="bg-white rounded-lg shadow-lg flex-col overflow-hidden w-4/5">
        <div className=''>
          <img
            src={house.imgUrl}
            // alt={house.title}
            className="w-full h-[70vh] object-cover"
          />
          
        </div> 
        
        
        
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800">{house.title}</h1>
            <p className="text-2xl text-black mt-2">Price:{house.price}</p>
            <p className="text-gray-600 mt-2"><strong>Owner:</strong> {house.owner}</p>
            <p className="text-gray-600 mt-2"><strong>Address:</strong> {house.address}</p>

            {/* Facilities Section */}
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
            </div>

          

            {/* Guest Policy */}
            <div className="mt-4">
              <h2 className="text-xl font-semibold text-gray-800">Guest Policy</h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>No smoking in the rooms.</li>
                <li>No pets allowed.</li>
                <li>Guests must show a valid ID.</li>
                <li>Quiet hours after 10:00 PM.</li>
                <li>Maximum occupancy is 4 people.</li>
              </ul>
              <button className="mt-2 text-blue-500 underline">View Guest Policy</button>
            </div>

              {/* Check-in/out Times */}
              <div className="mt-4 text-center flex  bg-gray-300 w-[1/2]">
            <div className='mr-20  ml-80'>
            <h2 className="text-xl flex-col font-semibold  text-gray-800">CHECK-IN TIME</h2>
            <p className="text-gray-600 mt-10 font-semibold">Check-in: 12:00 PM</p>
            </div>
            <div className=' ml-80'> 
            <h2 className="text-xl  flex-col font-semibold  text-gray-800">CHECK-OUT TIME</h2>
            <p className="text-gray-600 mt-10 font-semibold">Check-out: 11:00 AM</p>
            </div>
            </div>

            {/* Reviews */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold  text-gray-800">Reviews</h2>
              <div className="flex items-center  bg-gray-300 p-5 mt-4">
                <img src="https://github.com/shadcn.png" alt="Reviewer 1" className="w-10 h-10 rounded-full mr-4" />
                <div>
                  <p className="text-gray-800 font-semibold">John Doe</p>
                  <div className="flex items-center">
                    <span className="bg-green-500 text-white px-2 py-1 rounded">5.0</span>
                    <p className="text-gray-600 ml-2">Excellent stay!</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center  bg-gray-300 p-5 mt-4">
                <img src="https://github.com/shadcn.png" alt="Reviewer 2" className="w-10 h-10 rounded-full mr-4" />
                <div>
                  <p className="text-gray-800 font-semibold">Jane Smith</p>
                  <div className="flex items-center">
                    <span className="bg-orange-500 text-white px-2 py-1 rounded">3.9</span>
                    <p className="text-gray-600 ml-2"> good, but room for improvement.</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center  bg-gray-300 p-5 mt-4">
                <img src="https://github.com/shadcn.png" alt="Reviewer 2" className="w-10 h-10 rounded-full mr-4" />
                <div>
                  <p className="text-gray-800 font-semibold">Jane Smith</p>
                  <div className="flex items-center">
                    <span className="bg-yellow-500 text-white px-2 py-1 rounded">4.0</span>
                    <p className="text-gray-600 ml-2">Very good, but room for improvement.</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center  bg-gray-300 p-5 mt-4">
                <img src="https://github.com/shadcn.png" alt="Reviewer 2" className="w-10 h-10 rounded-full mr-4" />
                <div>
                  <p className="text-gray-800 font-semibold">Jane Smith</p>
                  <div className="flex items-center">
                    <span className="bg-blue-500 text-white px-2 py-1 rounded">3.5</span>
                    <p className="text-gray-600 ml-2">Very good, but room for improvement.</p>
                  </div>
                </div>
              </div>
              <div className="flex  bg-gray-300 p-5 items-center mt-4">
                <img src="https://github.com/shadcn.png" alt="Reviewer 2" className="w-10 h-10 rounded-full mr-4" />
                <div>
                  <p className="text-gray-800 font-semibold">Jane Smith</p>
                  <div className="flex items-center">
                    <span className="bg-red-500 text-white px-2 py-1 rounded">2.0</span>
                    <p className="text-gray-600 ml-2">Very bad, room for improvement.</p>
                  </div>
                </div>
              </div>
              {/* Add more reviews as needed */}
            </div>

            {/* Map Section */}
            <h2 className="text-xl font-semibold mt-10 text-gray-800">Location</h2>
            <div className="mt-2 flex flex-row">
            
              <img src="https://img.freepik.com/premium-vector/abstract-city-map-with-pins-navigation-app_95169-1513.jpg?w=740" alt="Map Location" className="w-1/2 h-[80vh] object-fit mt-2" />
              <AdditionalData className=" space-x-2"/>
            </div>

            {/* Payment Button */}
            <div className="flex justify-end mt-8">
              <button className="bg-red-500 text-white px-6 py-3 rounded">
              <Link to={`/pay/${house.id}`}>
              Proceed to Payment
              </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BuyDesp;  