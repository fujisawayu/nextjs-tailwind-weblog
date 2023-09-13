import { promises } from 'dns';
import { Article } from './types';
import { notFound } from 'next/navigation';

export const getAllArticles = async (): Promise<Article[]> => {
  const res = await fetch('http://localhost:3001/posts', {
    cache: 'no-store',
  }); // SSR

  // if (!res.ok) {
  //   throw new Error();
  // }

  const articles = await res.json();
  return articles;
};

// @see https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating
export const getDetailArticle = async (id: Number): Promise<Article> => {
  const res = await fetch(`http://localhost:3001/posts/${id}`, {
    next: { revalidate: 60 },
  }); // ISR

  if (res.status === 404) {
    notFound();
  }
  // if (!res.ok) {
  //   throw new Error();
  // }

  // await new Promise((resolve) => setTimeout(resolve, 5000));

  const article = await res.json();
  return article;
};
