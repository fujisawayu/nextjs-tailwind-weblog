import Link from 'next/link';
import React from 'react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">
          404 - Not Found
        </h1>
        <p className="text-gray-500 mb-4">ページが見つかりませんでした。</p>
        <Link href="/">
          <div className="text-blue-500 hover:underline">ホームに戻る</div>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
