import React, { useState, useEffect } from 'react';

export default function Slider({ slides }) {
    const [position, setPosition] = useState(0);

    const totalSlides = 5;

    // 랜덤 색상 생성 함수
    const generateRandomColor = () => {
        return `#${Math.floor(Math.random()*16777215).toString(16)}`;
    };

    // 색상을 담을 배열 생성
    const slideColors = Array.from({ length: totalSlides }, generateRandomColor);

    const slideLeft = () => {
        setPosition(prevPosition => prevPosition > 0 ? prevPosition - 1 : 0);
    };

    const slideRight = () => {
        setPosition(prevPosition => prevPosition < totalSlides - 1 ? prevPosition + 1 : totalSlides - 1);
    };

    return (
        <div className="flex justify-center items-center h-screen">
        <div className="w-2/5 h-3/5" style={{ backgroundColor: slideColors[position] }}>
            <button onClick={slideLeft}>Left</button>
            <button onClick={slideRight}>Right</button>
            <div>Position: {position + 1}</div>
            <div>{slides[position + 1]}</div>
        </div>
        </div>
  );
    }