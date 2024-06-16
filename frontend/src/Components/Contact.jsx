// import React from 'react';
import { AiOutlinePhone } from 'react-icons/ai';

const Contact = () => {
  return (
    <div className="max-w-lg mx-auto p-6 bg-black shadow-md rounded-md text-white">
      <h2 className="text-lg font-bold mb-4">Contact Us</h2>
      
      <div className="flex mb-4">
        <div className="w-1/2 pr-2">
          <label htmlFor="email" className="block mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-900 text-white"
            placeholder="Enter your email"
          />
        </div>
        <div className="w-1/2 pl-2">
          <label htmlFor="name" className="block mb-1">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-900 text-white"
            placeholder="Enter your name"
          />
        </div>
      </div>
      
      <div className="mb-4">
        <label htmlFor="description" className="block mb-1">Description</label>
        <textarea
          id="description"
          name="description"
          rows="4"
          className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-900 text-white"
          placeholder="Enter your message"
        ></textarea>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="text-sm flex items-center">
          <AiOutlinePhone className="mr-2" />
          <div>Contact Logo</div>
        </div>
        <div className="text-sm">Fake Number: +123 456 7890</div>
      </div>
    </div>
  );
};

export default Contact;
