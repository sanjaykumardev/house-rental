import  { useContext, useState } from 'react';
import Axios from 'axios';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import { UserContext } from '../models/UserContext';


const AdditionalData = () => {
  const {setOutDate , setInDate, setPersonAge , setPersonCount} = useContext(UserContext)
  const [startdate, setStartdate] = useState('');
  const [enddate, setEndDate] = useState('');
  const [numberofperson, setNumberOfPersons] = useState('');
  const [age, setAge] = useState('');
  
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const res = await Axios.post('http://localhost:5000/details', {
        startdate,
        enddate,
        numberofperson,
        age
      });
      
      console.log(res);
      setInDate(startdate)
      setPersonAge(age);
      setOutDate(enddate);
      setPersonCount( numberofperson)
      setStartdate(" ");
      setEndDate('');
      setNumberOfPersons('');
      setAge('');
      toast.success('Login successful', { position: "top-center" }); 
    } catch (error) {
      console.error('Error:', error);
      toast.error('Login failed. Please check your credentials', { position: "top-center" }); 
    }
  };

  return (
    <div className=" mt-10 flex flex-col w-[40%] ml-20"> 
   
      <form onSubmit={handleFormSubmit} className="  bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <strong className=' mb-10  ml-[30%] text-bold text-2xl text-center'>Additional Details</strong>
        <div className="mb-4 mt-10">
          <label className="block text-gray-700 text-md font-bold mb-2" htmlFor="calendar">
            Start Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="calendar"
            type="date"
            placeholder="Enter calendar details"
            value={startdate}
            onChange={(e) => setStartdate(e.target.value)}
          />
        </div>
        <div className="mb-4 mt-10">
          <label className=" text-md font-bold mb-4" htmlFor="calendar">
            End Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full mb-4 py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            id="calendar"
            type="date"
            placeholder="Enter calendar details"
            value={enddate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-md font-bold mb-4" htmlFor="numberOfPersons">
            Number of Persons
          </label>
          <input
            className="shadow appearance-none border rounded  mb-4 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="numberOfPersons"
            type="number"
            placeholder="Enter number of persons"
            value={numberofperson}
            onChange={(e) => setNumberOfPersons(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-md font-bold mb-4" htmlFor="age">
            Age
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="age"
            type="number"
            placeholder="Enter age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="flex items-center ml-[30%]  mt-10 justify-between">
          <button
            className="bg-blue-500  hover:bg-blue-700 w-[60%] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
        <ToastContainer/>
      </form>
    </div>
  );
};

export default AdditionalData;
