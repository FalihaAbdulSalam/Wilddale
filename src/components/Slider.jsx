import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
    {
      id: 1,
      src: "https://via.placeholder.com/600x400?text=Image+1",
      alt: "Image 1",
    },
    {
      id: 2,
      src: "https://via.placeholder.com/600x400?text=Image+2",
      alt: "Image 2",
    },
    {
      id: 3,
      src: "https://via.placeholder.com/600x400?text=Image+3",
      alt: "Image 3",
    },
  ];
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleAutoplay = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };
  