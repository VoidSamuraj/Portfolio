import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import VideoPlayer from "./VideoPlayer"
import Image from "next/image";

export default function ImageCarousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
  inDiv = false
}) {
  const [curr, setCurr] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleVideoPlayChange = (isPlaying) => {
    setIsPlaying(isPlaying);
  };

  useEffect(() => {
    let slideInterval;
    if (autoSlide && !isHovered && !isPlaying) {
      slideInterval = setInterval(next, autoSlideInterval);
    }
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, isHovered, isPlaying]);

  return (
    <div className="overflow-hidden relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div
        className="flex items-center transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides?.map((item, index) => {
          if (inDiv)
            return (
              item.type === "image" ? (
                <div className="itemContainer">
                  <Image
                    key={index}
                    className="scroll-item"
                    src={item.image}
                    alt={item.name}
                    placeholder="blur"
                  />
                </div>
              ) : (
                <div className="itemContainer">
                  <VideoPlayer
                    key={index}
                    src={item.src}
                    onPlayChange={handleVideoPlayChange} // Przekazujemy funkcję zwrotną
                  />
                </div>
              )
            );
          else
            return (
              item.type === "image" ? (
                <Image
                  key={index}
                  className="scroll-item"
                  src={item.image}
                  alt={item.name}
                  placeholder="blur"
                />
              ) : (
                <VideoPlayer
                  key={index}
                  src={item.src}
                  onPlayChange={handleVideoPlayChange} // Przekazujemy funkcję zwrotną
                />
              )
            );
        })}
      </div>
      {
        slides.length > 1 &&
        <>
          <div className="absolute inset-y-0 left-0 flex items-center justify-start p-4 pointer-events-none">
            <button
              onClick={prev}
              className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white pointer-events-auto"
            >
              <ChevronLeft size={40} />
            </button>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center justify-end p-4 pointer-events-none">
            <button
              onClick={next}
              className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white pointer-events-auto"
            >
              <ChevronRight size={40} />
            </button>
          </div>

          <div className="absolute bottom-4 right-0 left-0 flex items-center justify-center gap-2">
            {slides?.map((_, i) => (
              <div
                key={i}
                className={`transition-all w-3 h-3 bg-white rounded-full ${curr === i ? "p-2" : "bg-opacity-50"
                  }`}
              />
            ))}
          </div>
        </>
      }
    </div>
  );
}
