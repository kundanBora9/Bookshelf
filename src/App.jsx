import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Header from './component/Header';
import MyBookshelf from './component/MyBookshelf';

function App() {
  const [bookshelf, setBookshelf] = useState([]);

  const handleAddToBookshelf = (book) => {
    setBookshelf([...bookshelf, book]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Header bookshelf={bookshelf} handleAddToBookshelf={handleAddToBookshelf} />} />
        <Route path="/my-bookshelf" element={<MyBookshelf bookshelf={bookshelf} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;