import enver from "../assets/enver.svg";
import menu from "../assets/menu.svg";
import arrow from "../assets/arrow.svg";
import circles from "../assets/circles.svg";
import plus from "../assets/plus.svg";
import resistance from "../assets/resistance.svg";
import triangles from "../assets/triangles.svg";
import man_group from "../assets/man_group.png";
import playBtn from "../assets/playBtn.svg";

function Hero() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-1">
          <img className="h-7" src={enver} />
          <h1 className="font-monster text-[28px] font-semibold">Enver</h1>
        </div>
        <img className="h-6" src={menu} />
      </div>

      <div className="mt-16">
        <h1 className="font-monster text-[42px] font-bold leading-[63px]">
          Build Your
          <br /> Awesome <br /> Platform
        </h1>
        <p className="mt-8 text-lg text-gray-400">
          Enver studio is a digital studio that offers several services such as
          UI/UX Design to developers, we will provide the best service for those
          of you who use our services.
        </p>
        <button className="bg-brand font-nunito mt-12 flex max-w-lg flex-row items-center gap-2 px-4 py-2 font-medium">
          Our Services
          <img className="h-6" src={arrow} />
        </button>
      </div>

      <div className="relative mt-24">
        <img className="absolute top-5" src={resistance} />
        <img className="absolute -top-2 right-8" src={circles} />
        <img src={man_group} />
        <img className="absolute -bottom-2" src={triangles} />
        <img className="absolute bottom-14 right-5" src={plus} />
      </div>

      <div className="mx-auto flex flex-col">
        <h1 className="font-monster mt-28 text-4xl font-bold leading-[54px]">
          Why Enver Is The Best Choice?
        </h1>
        <p className="font-nunito mt-8 text-lg">
          Watch this one minute video so you <br /> understand why you should
          use our services!
        </p>
        {/* <img src={group_video} /> */}
        <div className="mt-12 grid h-56 w-full place-content-center bg-[url('src/assets/image-4.png')] bg-auto bg-center object-cover">
          <img src={playBtn} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
