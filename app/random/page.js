"use client"

import React, { useState, useEffect } from 'react';

import SlideInput from '../components/SlideInput';
import Slider from '../components/Slider';

export default function Random({ children }) {
    const [slides, setSlides] = useState({});

    return (
        <div>
        <SlideInput setSlides={setSlides} />
        <Slider slides={slides} />
        </div>
    )
  }