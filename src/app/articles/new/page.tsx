'use client';

import { createArticle } from '@/blogAPI';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const CreateBlogPage = () => {
  const router = useRouter();
  const [id, setId] = useState<number>();
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [loading, setLoadind] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (typeof id === 'undefined') {
      console.error('ID is not defined');
      return;
    }
    setLoadind(true);

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    // await createArticle(id, title, content);
    await fetch(`${apiUrl}/api/blog`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, title, content }),
    });

    setLoadind(false);
    router.push('/');
    router.refresh();
  };

  return (
    <div className="min-h-screen py-8 px-4 md:px-12">
      <h2 className="text-2xl font-bold mb-4">Create New</h2>

      <form
        className="bg-slate-200 p-6 rounded shadow-lg"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="text-gray-700 text-sm font-bold mb-2">URL</label>
          <input
            type="text"
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            onChange={(e) => setId(Number(e.target.value))}
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 text-sm font-bold mb-2">Title</label>
          <input
            type="text"
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="text-gray-700 text-sm font-bold mb-2">Text</label>
          <textarea
            onChange={(e) => setContent(e.target.value)}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className={`py-2 px-4 rounded-md ${
            loading
              ? 'bg-orange-300 cursor-not-allowed'
              : 'bg-orange-300 hover:bg-orange-500'
          } `}
          disabled={loading}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateBlogPage;
