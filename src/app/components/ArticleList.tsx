import { Article } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type ArticleListProps = {
  articles: Article[];
};

const ArticleList = ({ articles }: ArticleListProps) => {
  return (
    <div>
      {articles.map((article) => (
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
              Lorem Ipsum Dolor Sit Amet Dolor Sit Amet
            </Link>
            <p className="text-sm pb-3 text-slate-900">
              By{' '}
              <Link
                href={`articles/${article.id}`}
                className="text-slate-900 font-semibold hover:text-gray-800"
              >
                hoge
              </Link>
              , Published on September 1st, 2023
            </p>
            <Link
              href={`articles/${article.id}`}
              className="text-slate-900 pb-6"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus, quis
              iaculis dui porta volutpat. In sit amet posuere magna..
            </Link>
            <Link href="#" className="uppercase text-gray-800 hover:text-black">
              Continue Reading <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ArticleList;
