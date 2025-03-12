"use client";

import React, { useState, useRef, useEffect } from "react";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const slideWidthRef = useRef<number>(0);

  useEffect(() => {
    if (carouselRef.current && carouselRef.current.children.length > 0) {
      slideWidthRef.current = (
        carouselRef.current.children[0] as HTMLElement
      ).offsetWidth;
    }

    const handleResize = () => {
      if (carouselRef.current && carouselRef.current.children.length > 0) {
        slideWidthRef.current = (
          carouselRef.current.children[0] as HTMLElement
        ).offsetWidth;
        carouselRef.current.style.transform = `translateX(-${
          slideWidthRef.current * currentIndex
        }px)`;
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [currentIndex]);

  const nextSlide = () => {
    if (currentIndex === images.length - 1) {
      // If at the last slide, go directly to the first slide
      setCurrentIndex(0);
      if (carouselRef.current) {
        carouselRef.current.style.transform = `translateX(0px)`;
      }
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      if (carouselRef.current) {
        carouselRef.current.style.transform = `translateX(-${
          slideWidthRef.current * (currentIndex + 1)
        }px)`;
      }
    }
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${
        slideWidthRef.current * (currentIndex - 1)
      }px)`;
    }
  };

  return (
    <div className="mx-auto max-w-screen-xl w-screen relative overflow-hidden max-h-[500px]">
      <div
        ref={carouselRef}
        className="flex transition-transform duration-500 ease-in-out"
      >
        {images.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-full h-[200px] md:h-auto">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover md:object-contain object-top"
            />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#c8b97e] text-white p-2 rounded-full"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#c8b97e] text-white p-2 rounded-full"
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
