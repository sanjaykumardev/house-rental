import { useContext, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { UserContext } from '../models/UserContext';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
  const { items, setItemCart } = useContext(UserContext);
  const navigate = useNavigate();

  const handleRemove = (index) => {
    const newItems = items.filter((_, itemIndex) => itemIndex !== index);
    setItemCart(newItems);
    toast.success('Item removed successfully', { position: "top-center" });
  };

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(items)); // Corrected method name to setItem
  }, [items]);

  const totalAmount = Array.isArray(items)
    ? items.reduce((total, item) => total + parseFloat(item.price.replace(/[^0-9.-]+/g, "")), 0)
    : 0;

  return (
    <>
      <Navbar />
      <div className="px-4 py-8">
        <div className="flex items-center mb-4">
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
        <div className='text-center'>
          <h1 className="text-3xl font-bold text-center mb-8">My Cart</h1>
        </div>
        {Array.isArray(items) && items.length === 0 ? (
          <p className="text-center text-lg">Your cart is empty.</p>
        ) : (
          <>
            <div className="flex flex-wrap justify-center">
              {Array.isArray(items) && items.map((item, index) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden m-4 w-80 transform transition-transform duration-300 hover:scale-105"
                >
                  <img
                    src={item.imgUrl}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-bold text-gray-800">{item.title}</h2>
                    <p className="text-lg text-gray-600 mt-2">{item.price}</p>
                    <p className="text-gray-600 mt-2"><strong>Owner:</strong> {item.owner}</p>
                    <p className="text-gray-600"><strong>Address:</strong> {item.address}</p>
                    <div className="flex justify-between mt-4">
                      <button className="bg-red-500 text-white px-4 py-2 rounded">
                        <Link to={`/pay/${item.id}`}>
                          Payment
                        </Link>
                      </button>
                      <button
                        className="bg-red-500 text-white px-4 py-2 rounded"
                        onClick={() => handleRemove(index)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <h2 className="text-2xl font-bold">Total Amount: ${totalAmount.toFixed(2)}</h2>
            </div>
          </>
        )}
      </div>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default Cart;
