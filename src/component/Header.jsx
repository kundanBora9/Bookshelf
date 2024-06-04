import React from 'react';
import { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';

function Header({ bookshelf, handleAddToBookshelf }) {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const navigate = useNavigate();

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
    fetch(`https://openlibrary.org/search.json?q=${e.target.value}&limit=10&page=1`)
      .then(response => response.json())
      .then(data => setSearchResults(data.docs))
      .catch(error => console.error(error));
  };

  return (
      <>
      <div className='flex flex-wrap justify-between items-center m-10'>
      <h1 className='text-3xl font-bold '>Bookshelf</h1>
      <div>
        <h2>Search by Book Name</h2>
        <input
          type="search"
          name=""
          id=""
          className='border border-slate-500'
          value={searchInput}
          onChange={handleSearchInput}
        />
      </div>
     
      <Link to="/my-bookshelf">
        <button className='border bg-green-600 text-white p-2'>My Bookshelf</button>
      </Link>
    </div>
    <div className='grid sm:grid-cols-1 grid-rows-1 gap-3  md:grid-cols-2  lg:grid-cols-4'>
        {searchResults.map((book, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4 m-2">
            <h3 className="text-lg font-medium mb-2">{book.title}</h3>
            <p className="text-gray-700">{book.author_name && book.author_name[0]}</p>
            <p>Eddition Count :{ book.edition_count}</p>
            <button className='border bg-green-600 text-white p-2' onClick={() => {
              handleAddToBookshelf(book);
              navigate('/my-bookshelf');
            }}>Add to Bookshelf</button>
          </div>
        ))}
      </div>
      </>

    
  );
}

export default Header;