'use client';
import React from 'react';

// @see https://nextjs.org/docs/app/building-your-application/routing/error-handling
const Error = ({ reset }: { reset: () => void }) => {
  return (
    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mt-4 rounded shadow-md max-w-md mx-auto">
      <h3 className="font-bold mb-2">Error</h3>
      <p>An error has occurred.</p>
      <button
        onClick={() => reset()}
        className="bg-red-600 text-white mt-2 px-4 py-2 rounded hover:bg-red-500 transition ease-in-out duration-200"
      >
        Try again
      </button>
    </div>
  );
};

export default Error;
