/* eslint-disable react/no-unescaped-entities */
import{ useEffect, useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import SearchBar from "../Components/SearchBar";
import houses from '../models/data';
import { UserContext } from '../models/UserContext';

const HouseList = () => {
  const { setItemCart } = useContext(UserContext);
  const [ratings, setRatings] = useState(houses.map(house => house.rating));
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const savedCartItems = JSON.parse(localStorage.getItem('cartItems'));
      if (savedCartItems) {
        setItemCart(savedCartItems);
      }
    } catch (e) {
      console.error('Failed to load cart items:', e);
    }
  }, [setItemCart]);

  const handleRating = (index, rating) => {
    const newRatings = [...ratings];
    newRatings[index] = rating;
    setRatings(newRatings);
  };

  const handlecart = (house) => {
    setItemCart((prevItems) => {
      const newItems = [...prevItems, house];
      try {
        localStorage.setItem('cartItems', JSON.stringify(newItems));
        toast.success('Cart added successfully', { position: "top-center" });
      } catch (e) {
        if (e.name === 'QuotaExceededError') {
          console.error('LocalStorage quota exceeded');
          toast.error('Failed to save item: storage limit exceeded', { position: "top-center" });
        } else {
          console.error('Failed to save item:', e);
          toast.error('Failed to save item', { position: "top-center" });
        }
      }
      return newItems;
    });
  };

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
      <div>
        <h1 className="text-3xl font-light text-center mt-10 mb-5 font-serif">World's Largest NoBrokerage Property Site</h1>
      </div>
      <div className="flex justify-center mb-5">
        <SearchBar />
      </div>
      <div className="flex flex-wrap justify-center px-4 mt-5 mb-10">
        {houses.map((card, index) => (
          <div
            key={card.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden m-4 w-80 transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={card.imgUrl}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800">{card.title}</h2>
              <p className="text-lg text-bold text-black mt-2">Price: {card.price}</p>
              <p className="text-gray-600 mt-2"><strong>Owner:</strong> {card.owner}</p>
              <p className="text-gray-600"><strong>Address:</strong> {card.address}</p>
              <div className="flex items-center mt-2">
                <div className="flex text-yellow-400">
                  {Array.from({ length: 5 }, (_, starIndex) => (
                    <svg
                      key={starIndex}
                      onClick={() => handleRating(index, starIndex + 1)}
                      viewBox="0 0 24 24"
                      fill={starIndex < ratings[index] ? "currentColor" : "none"}
                      stroke="currentColor"
                      className="w-4 h-4 cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 .587l3.668 7.431L24 9.751l-6 5.84 1.42 8.305L12 18.673 4.58 23.896 6 15.09l-6-5.84 8.332-1.733z"
                      />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-gray-600">{ratings[index]}</span>
              </div>
              <div className="flex justify-between items-center mt-10">
                <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => handlecart(card)}>Add Cart</button>
                <Link to={`/desp/${card.id}`}>
                  <button className="bg-red-500 text-white px-4 py-2 rounded">Buy</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default HouseList;
