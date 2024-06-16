import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "./Navbar";
import Footer from "./Footer";
import { UserContext } from '../models/UserContext';
import { Contact } from 'lucide-react';

const Homepage = () => {
  const { username, role } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (role === 'Buyer') {
      navigate('/home');
    } else if (role === 'Seller') {
      navigate('/houselist');
    } else {
      navigate('/');
    }
  };

  return (
    <>
      <Navbar />
      
      {/* New Section */}
      <div className="relative bg-cover object-fill bg-center h-[50vh] flex items-center justify-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">Discover Your Perfect Rental</h1>
          <p className="mb-6 text-lg font-normal lg:text-xl sm:px-16 xl:px-48">Explore our extensive listings to find your next home, from cozy apartments to spacious family houses.</p>
          <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300">
            Learn more
            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
        </div>
      </div>
      
      <div className="px-[100px] p-4 pt-6 md:p-6 lg:p-12 relative z-10">
        {/* <div className="relative mb-12">
          <img
            src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="House Image"
            className="w-full h-[70vh] object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white text-5xl font-bold">
            <p>Find Your <span className="text-red-500">Dream Home</span></p>
          </div>
        </div> */}
          <div className="text-center">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4 custom-font">
                Welcome, <span className="text-orange-500">{username}</span>!
              </h2>
            </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="relative bg-white shadow-md rounded overflow-hidden">
            <img src="https://picsum.photos/400/300?random=1" alt="Luxury Villa" className="w-full h-48 object-cover" />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white text-lg font-bold p-6">
              <div>
                <h2 className="mb-2">Luxury Villas</h2>
                <p className="text-gray-200">Experience the epitome of luxury with our high-end villas, featuring stunning views and top-notch amenities.</p>
              </div>
            </div>
          </div>
          <div className="relative bg-white shadow-md rounded overflow-hidden">
            <img src="https://picsum.photos/400/300?random=2" alt="Cozy Cottage" className="w-full h-48 object-cover" />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white text-lg font-bold p-6">
              <div>
                <h2 className="mb-2">Cozy Cottages</h2>
                <p className="text-gray-200">Find peace and tranquility in our charming cottages, nestled in serene locations perfect for a relaxing getaway.</p>
              </div>
            </div>
          </div>
          <div className="relative bg-white shadow-md rounded overflow-hidden">
            <img src="https://picsum.photos/400/300?random=3" alt="Urban Apartment" className="w-full h-48 object-cover" />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white text-lg font-bold p-6">
              <div>
                <h2 className="mb-2">Urban Apartments</h2>
                <p className="text-gray-200">Stay in the heart of the city with our modern apartments, offering convenience and comfort for urban living.</p>
              </div>
            </div>
          </div>
          <div className="relative bg-white shadow-md rounded overflow-hidden">
            <img src="https://picsum.photos/400/300?random=4" alt="Beach House" className="w-full h-48 object-cover" />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white text-lg font-bold p-6">
              <div>
                <h2 className="mb-2">Beach Houses</h2>
                <p className="text-gray-200">Enjoy the ultimate beach vacation with our beachfront properties, providing direct access to sun, sand, and surf.</p>
              </div>
            </div>
          </div>
          <div className="relative bg-white shadow-md rounded overflow-hidden">
            <img src="https://picsum.photos/400/300?random=5" alt="Mountain Cabin" className="w-full h-48 object-cover" />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white text-lg font-bold p-6">
              <div>
                <h2 className="mb-2">Mountain Cabins</h2>
                <p className="text-gray-200">Escape to the mountains with our cozy cabins, offering breathtaking views and a retreat from the hustle and bustle.</p>
              </div>
            </div>
          </div>
          <div className="relative bg-white shadow-md rounded overflow-hidden">
            <img src="https://picsum.photos/400/300?random=6" alt="Country Home" className="w-full h-48 object-cover" />
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white text-lg font-bold p-6">
              <div>
                <h2 className="mb-2">Country Homes</h2>
                <p className="text-gray-200">Discover the charm of country living with our beautiful homes set in picturesque rural landscapes.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded" onClick={handleSubmit}>
            Rent Now
          </button>
        </div>
      </div>
      <Contact/>
      <Footer />
    </>
  );
};

export default Homepage;
