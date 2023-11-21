import React, { useState, useEffect } from 'react';

export default function SlideInput({ setSlides }) {
  const [slideNumber, setSlideNumber] = useState(1);
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSlides((prevSlides) => ({
      ...prevSlides,
      [slideNumber]: text
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="number" 
        value={slideNumber} 
        onChange={(e) => setSlideNumber(e.target.value)} 
        placeholder="Slide Number" 
      />
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Text" 
      />
      <button type="submit">Submit</button>
    </form>
  );
}