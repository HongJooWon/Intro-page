import React, { useState, useEffect } from 'react';

export default function Layout({ children }) {
  const [slideNumber, setSlideNumber] = useState(1);
  const [text, setText] = useState('');
  const [slides, setSlides] = useState({});

  useEffect(() => {
    // 함수형 업데이트를 사용하여 특정 슬라이드에 텍스트 저장
    setSlides((prevSlides) => ({
      ...prevSlides,
      [slideNumber]: text
    }));
  }, [slideNumber, text]);

  return (
    <div>
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
      <div>
        {Object.entries(slides).map(([number, slideText]) => (
          <div key={number}>
            Slide {number}: {slideText}
          </div>
        ))}
      </div>
    </div>
  );
}