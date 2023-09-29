import React from 'react';
import { Article } from '@/types';
import Link from 'next/link';
import Image from 'next/image';

type ArticlCartdProps = {
  article: Article;
};

const ArticleCard = ({ article }: ArticlCartdProps) => {
  return (
    <article className="flex flex-col shadow my-4" key={article.id}>
      <Link href={`articles/${article.id}`} className="hover:opacity-75">
        <Image
          src={`https://source.unsplash.com/collection/1346951/1000x500?sig=${article.id}`}
          alt=""
          width={12800}
          height={3000}
        />
      </Link>
      <div className="bg-white flex flex-col justify-start p-6">
        <Link
          href={`articles/${article.id}`}
          className="text-blue-700 text-sm font-bold uppercase pb-4"
        >
          Technology
        </Link>
        <Link
          href={`articles/${article.id}`}
          className="text-3xl font-bold hover:text-gray-700 pb-4"
        >
          {article.title}
        </Link>
        <p className="text-sm pb-3 text-slate-900">
          By{' '}
          <Link
            href={`articles/${article.id}`}
            className="text-slate-900 font-semibold hover:text-gray-800"
          ></Link>
          , Published on {new Date(article.createdAt).toLocaleString()}
        </p>
        <Link href={`articles/${article.id}`} className="text-slate-900 pb-6">
          {article.content && article.content.length > 70
            ? article.content.substring(0, 70) + '...'
            : article.content}
        </Link>
        <Link href="#" className="uppercase text-gray-800 hover:text-black">
          Continue Reading <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </article>
  );
};

export default ArticleCard;
