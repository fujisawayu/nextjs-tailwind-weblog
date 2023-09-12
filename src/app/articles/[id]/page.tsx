import Image from 'next/image';
import React from 'react';

const Article = ({ params }: { params: { id: Number } }) => {
  return (
    <div className="max-w-3xl mx-auto p-5">
      <Image
        src={`https://source.unsplash.com/collection/1346951/1000x500?sig=${params.id}`}
        alt=""
        width={12800}
        height={3000}
      />
      <h1 className="text-4xl text-center mb-10 mt-10">Title area</h1>
      <div className="text-lg leading-relaxed text-justify">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
        reprehenderit ad, neque impedit blanditiis molestias aut voluptatem
        tempore deleniti ea in officia praesentium dicta possimus molestiae
        necessitatibus cum ipsum iusto.
      </div>
    </div>
  );
};

export default Article;
