import React from 'react';

function MyBookshelf({ bookshelf }) {
  return (
    <>
    <h1 className='text-center text-3xl mt-5'>My Bookshelf</h1>
    <div className='grid sm:grid-cols-1 grid-rows-1 gap-3  md:grid-cols-2  lg:grid-cols-4'>
      {bookshelf.map((book, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-4 m-2">
          <h3 className="text-lg font-medium mb-2">{book.title}</h3>
          <p className="text-gray-700">{book.author_name && book.author_name[0]}</p>
        </div>
      ))}
    </div>
    </>
    
  );
}

export default MyBookshelf;