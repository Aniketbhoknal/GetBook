import React, { useState } from 'react';

const GetBookComp = () => {
  const [bookId, setBookId] = useState('');
  const [bookInfo, setBookInfo] = useState(null);

  const handleGetBook = async () => {
    try {
      const response = await fetch(`http://training.object.co.in/api/book/getbook?Id=${bookId}`, {
        method: 'GET',
      });

      const data = await response.json();

      if (data) {
        setBookInfo(data);
      } else {
        setBookInfo(null);
      }
    } catch (error) {
      console.error('Error fetching book information:', error);
    }
  };

  return (
    <div>
      <h2>Get Book Information</h2>
      <label htmlFor="bookId">Enter Book ID:</label>
      <input
        type="text"
        id="bookId"
        value={bookId}
        onChange={(e) => setBookId(e.target.value)}
      />
      <button onClick={handleGetBook}>Get Book</button>

      {bookInfo && (
        <div>
          <h3>Book Information:</h3>
          <p>Title: {bookInfo.Title}</p>
          <p>Publication: {bookInfo.Publication}</p>
          <p>Price: {bookInfo.Price}</p>
        </div>
      )}
    </div>
  );
};

export default GetBookComp;
