import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo2.png'; // Adjust the path as needed
import background_image from "../assets/homepharma.png";

const Gethelphere = () => {
  return (
    <div className="h-screen w-screen">
      
       <img
          src={background_image}
          alt="Background"
          className="w-[100%] h-[100%] absolute top-0 left-0 z-[-1]"
        />
        <div className=''>
        <Link to="/">
        <img src={logo}
         style={{ width: "220px" }}/>
         </Link>
        </div>
      <div className="w-full h-full flex justify-center items-center -mt-6">
        <div className="bg-white w-[800px] border rounded-lg flex flex-col   shadow-lg p-8">
         

          <h2 className="font-semibold text-2xl text-blue-900 flex justify-center my-4">
            Help Center
          </h2>

          <p className="text-lg text-gray-700">
            Here you can find help and resources to assist with any issues you might be facing. Our support team is available to help you with your concerns and answer any questions you may have.
          </p>

          <p className="text-lg text-gray-700 mt-4">
            If you need immediate assistance, please reach out to our support team through the contact 
            <div className='flex gap-2'>
            <p> form on our website or via email at {" "}</p> <p className='text-blue-900 hover:text-red-600 hover:underline'> {" "}help@pharmetrade.com{" "}</p> 
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gethelphere;