import circles from "../assets/circles.svg";
import resistance from "../assets/resistance.svg";
import right_arrow from "../assets/left-arrow.svg";
import left_arrow from "../assets/right-arrow.svg";
import { useState } from "react";

function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { url: "src/assets/portfolio1.png" },
    {
      url: "src/assets/portfolio2.png",
    },
    {
      url: "src/assets/portfolio3.png",
    },
  ];

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="mt-48 flex flex-col items-center">
      <div className="relative">
        <h1 className="font-monster text-4xl font-bold leading-[54px]">
          Our Awesome Portfolio
        </h1>
        <img className="absolute bottom-0 right-5" src={circles} />
      </div>
      <div className="relative mt-14">
        <div className="w-screen rounded-2xl bg-[#1E1E20] p-6">
          <img src={slides[currentIndex].url} />
        </div>
        <div className="mt-12 flex flex-row justify-center gap-4">
          <div
            className={`active:bg-brand/100 grid h-10 w-10 cursor-pointer place-content-center rounded-full transition-colors duration-150 ${
              currentIndex !== 0 ? "bg-brand/80" : "bg-gray-500"
            }`}
            onClick={prevSlide}
          >
            <img className="size-4" src={left_arrow} />
          </div>
          <div
            className={` ${
              currentIndex !== slides.length - 1 ? "bg-brand/80" : "bg-gray-500"
            } active:bg-brand/100 grid h-10 w-10 cursor-pointer place-content-center rounded-full transition-colors duration-150`}
            onClick={nextSlide}
          >
            <img className="size-4" src={right_arrow} />
          </div>
        </div>
        <img className="absolute -bottom-5 left-5 size-9" src={resistance} />
      </div>
    </div>
  );
}

export default Portfolio;
