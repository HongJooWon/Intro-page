"use client" 

import Image from "next/image";
import randomPic from '../public/FrodoLOTR4.png';

export default function Main() {
  return (
    <div className="pt-200px">
    <div className="flex flex-col items-center h-screen font-[Noto-Sans-KR-Black]">
        <div className='text-2xl font-semibold'>Juwon Hong</div>
        <div className="flex justify-center items-center p-6">
            <Image className="w-1/2" src={randomPic} alt="" width={300} height={300}/>
            <div className="w-1/2 h-full ml-10">
              <div className="font-[Noto-Sans-KR] w-3/5 pt-10">Handong Global University</div>
              <div className="font-[Noto-Sans-KR] w-3/5 pt-10">Computer Science & Global Entrepreneurship</div>
              <div className="font-[Noto-Sans-KR] w-3/5 pt-10">INTP</div>
              <div className="font-[Noto-Sans-KR] w-3/5 pt-10">Tennis Player</div>
            </div>
        </div>
        <div className="mt-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">GitHub</a>
            <a href="mailto:youremail@example.com" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Email</a>
        </div>
    </div>
    </div>
  );
}