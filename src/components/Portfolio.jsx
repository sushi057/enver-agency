import circles from "../assets/circles.svg";
import right_arrow from "../assets/left-arrow.svg";
import left_arrow from "../assets/right-arrow.svg";
import { useState } from "react";
import rectangle3 from "../assets/gradients/rectangle1.svg";

function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { url: "src/assets/portfolio1.png", offset: 116 },
    {
      url: "src/assets/portfolio2.png",
      offset: 58,
    },
    {
      url: "src/assets/portfolio3.png",
      offset: 0,
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
      <div className="relative flex lg:w-full lg:flex-row lg:justify-between">
        <h1 className="font-monster text-4xl font-bold leading-[54px] lg:text-6xl">
          Our Awesome Portfolio
        </h1>
        <img
          src={rectangle3}
          className="absolute -right-24 hidden size-64 blur-3xl lg:top-0 lg:block"
        />
        <img
          className="absolute bottom-0 right-5 lg:-bottom-4 lg:size-12"
          src={circles}
        />
      </div>

      <div className="relative mt-12 flex w-screen flex-col overflow-hidden lg:w-full">
        <div
          className="flex h-full w-full gap-12 rounded-2xl bg-[#1E1E20] p-6 transition-transform duration-500 lg:hidden"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <img
              key={slide.url}
              src={slide.url}
              className="lg:object-fit lg:size-64 lg:w-fit"
            />
          ))}
        </div>

        <div className="hidden h-full w-full gap-12 rounded-2xl bg-[#1E1E20] p-6 transition-transform duration-500 lg:grid lg:grid-cols-3 lg:gap-20 lg:bg-inherit lg:px-0">
          <img src={slides[0].url} />
          <img src={slides[1].url} className="pt-14" />
          <img src={slides[2].url} className="pt-28" />
        </div>

        <div className="mt-12 flex flex-row justify-center gap-4 lg:hidden">
          <div
            className="active:bg-brand/100 grid h-10 w-10 cursor-pointer place-content-center rounded-full bg-gray-500 transition-colors duration-150"
            onClick={prevSlide}
          >
            <img className="size-4" src={left_arrow} />
          </div>
          <div
            className={
              "active:bg-brand/100 grid h-10 w-10 cursor-pointer place-content-center rounded-full bg-gray-500 transition-colors duration-150"
            }
            onClick={nextSlide}
          >
            <img className="size-4" src={right_arrow} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
