/* eslint-disable no-unused-vars */
import React from "react";
import pic4 from '../assets/pic5.png';
const Footer = () => {
  return (
    <>
      <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl text-center">
          <a href="#" className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
            <svg className="mr-2 h-8" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <image href={pic4} width="33" height="33" />
            </svg>
            Vivant
          </a>
          <p className="my-6 text-gray-500 dark:text-gray-400">
            Providing exceptional house rental services with a wide range of options to choose from.
          </p>
          <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
            <li><a href="#" className="mr-4 hover:underline md:mr-6">About</a></li>
            <li><a href="#" className="mr-4 hover:underline md:mr-6">Premium</a></li>
            <li><a href="#" className="mr-4 hover:underline md:mr-6">Services</a></li>
            <li><a href="#" className="mr-4 hover:underline md:mr-6">Blog</a></li>
            <li><a href="#" className="mr-4 hover:underline md:mr-6">Affiliate Program</a></li>
            <li><a href="#" className="mr-4 hover:underline md:mr-6">FAQs</a></li>
            <li><a href="#" className="mr-4 hover:underline md:mr-6">Contact</a></li>
          </ul>
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2022-2024 <a href="#" className="hover:underline">HouseRental™</a>. All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;