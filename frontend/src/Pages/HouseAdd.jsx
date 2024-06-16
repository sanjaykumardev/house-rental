import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useContext, useState } from "react";
import { UserContext } from "../models/UserContext";
// import Axios from "axios";
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';

const HouseAdd = () => {
  const { username } = useContext(UserContext);
  const [housetype, setHouseType] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState(null);
  const [ownername, setOwnerName] = useState("");
  const [rating, setRating] = useState("");



  const handleupload = (e) => {
    
    setPhoto(e.target.files[0]);
    console.log(setPhoto);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('housetype', housetype);
      formData.append('location', location);
      formData.append('price', price);
      formData.append('bedrooms', bedrooms);
      formData.append('description', description);
      formData.append('photo', photo);
      formData.append('rating', rating);
      formData.append('ownername', ownername);
      console.log(formData);

      const res = await fetch('http://localhost:5000/house', {
        method: 'POST',
        body: formData,
      });
  
      const data = await res.json();
  
      if (data.ok) {
        console.log("house added successfully");
        toast.success('House added successfully', { position: "top-center" });
      } else {
        toast.error('House addition failed. Please check your details', { position: "top-center" });
      }
      console.log(res);
  
      // Clear form fields after submission if needed
      // setHouseType("");
      // setLocation("");
      // setPrice(""); 
      // setBedrooms("");
      // setDescription("");
      // setPhoto(null); 
      // setOwnerName("");
      // setRating("");
  
    } catch (error) {
      console.error('Error occurred while adding house:', error);
    }
  };
  




  return (
    <>
      <Navbar />
      <div >
        <h2 className="text-center text-xl mb-20 mt-10">Welcome, {username}!</h2>

        <div className="px-[100px]">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6  ">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="house-type"
                >
                  House Type
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                  value={housetype}
                  id="house-type"
                  type="text"
                  onChange={(e) => setHouseType(e.target.value)}
                  placeholder="e.g. Apartment, House, etc."
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="location"
                >
                  Location
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                  id="location"
                  value={location}
                  type="text"
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. City, State, etc."
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="price"
                >
                  Price
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                  id="price"
                  value={price}
                  type="number"
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="e.g. $100,000"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="bedrooms"
                >
                  Bedrooms
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                  id="bedrooms"
                  value={bedrooms}
                  type="number"
                  onChange={(e) => setBedrooms(e.target.value)}
                  placeholder="e.g. 3"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="description"
                >
                  Description
                </label>
                <textarea
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="e.g. This is a beautiful house..."
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="photo"
                >
                  Photo
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                  id="photo"
                  onClick={handleupload}
                  type="file"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="owner-name"
                >
                  Owner Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                  id="owner-name"
                  value={ownername}
                  type="text"
                  onChange={(e) => setOwnerName(e.target.value)}
                  placeholder="e.g. John Doe"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="rating"
                >
                  Rating
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                  id="rating"
                  type="number"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  placeholder="e.g. 4.5"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button
                className="bg-orange-500 hover:bg-orange-700 mb-20 text-white font-bold py-2 px-4 rounded"
                type="submit" onClick={handleSubmit}
              >
                Add House
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default HouseAdd;