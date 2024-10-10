// Notification.js
import React from 'react';
import { Transition } from '@headlessui/react';

const Notification = ({ show, message }) => {
  return (
    <Transition
      show={show}
      enter="transition transform duration-300 ease-in-out"
      enterFrom="translate-x-full opacity-0"
      enterTo="translate-x-0 opacity-100"
      leave="transition transform duration-300 ease-in-out"
      leaveFrom="translate-x-0 opacity-100"
      leaveTo="translate-x-full opacity-0"
    >
      {/* <div className="fixed top-4 right-4 bg-blue-900 text-white py-2 px-4 rounded-lg shadow-lg">
        {message}
      </div> */}
      <div className="fixed top-4 right-4 bg-blue-900 text-white py-2 px-4 rounded-lg shadow-lg z-50">
        {message}
      </div>
    </Transition>
  );
};

export default Notification;
