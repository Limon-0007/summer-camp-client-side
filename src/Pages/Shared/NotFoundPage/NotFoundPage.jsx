import React from 'react';
import { Link } from 'react-router-dom';
import Buttons from './../../../Components/Buttons/Buttons';

const NotFoundPage = () => {
  return (
    <div>
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="text-4xl font-medium text-gray-800">Page Not Found</p>
        <Link to="/">
      <Buttons title="Go Back to Home"></Buttons>
      </Link>
      </div>
      <div className="animate-bounce">
        <svg
          className="w-16 h-16 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 2a8 8 0 100 16 8 8 0 000-16zM5.636 14.95l-1.06-1.06 4.95-4.95-4.95-4.95 1.06-1.06 4.95 4.95 4.95-4.95 1.06 1.06-4.95 4.95 4.95 4.95-1.06 1.06-4.95-4.95-4.95 4.95z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
    </div>
  );
};

export default NotFoundPage;
