import React from 'react';
import Navbar from '../navbar/Navbar';

const PublicHome = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
          <h1 className="text-2xl font-bold mb-4">Log in First</h1>
          <p className="mb-4">You need to be logged in to access the full features of this website.</p>
          <p>Please Log in to continue.</p>
        </div>
      </div>
    </div>
  );
};

export default PublicHome;
