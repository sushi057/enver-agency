import enver from "../assets/enver.svg";
import menu from "../assets/menu.svg";
import arrow from "../assets/arrow.svg";
import circles from "../assets/circles.svg";
import plus from "../assets/plus.svg";
import resistance from "../assets/resistance.svg";
import triangles from "../assets/triangles.svg";
import man_group from "../assets/man_group.png";
import playBtn from "../assets/playBtn.svg";
import lg_man_group from "../assets/lg_man_group.png";
import rectangle3 from "../assets/gradients/rectangle3.svg";
import rectangle4 from "../assets/gradients/rectangle4.svg";

function Hero() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-1 lg:gap-2">
          <img className="h-7 lg:size-10" src={enver} />
          <h1 className="font-monster text-[28px] font-semibold">Enver</h1>
        </div>
        <img className="h-6 lg:hidden" src={menu} />
        <nav className="font-nunito hidden gap-10 text-xl text-gray-50/70 lg:flex lg:flex-row">
          <a className="hover:text-brand" href="/">
            Home
          </a>
          <a className="hover:text-brand" href="/">
            Services
          </a>
          <a className="hover:text-brand" href="/">
            Our Projects
          </a>
          <a className="hover:text-brand" href="/">
            About us
          </a>
        </nav>
        <button className="hover:border-brand hidden w-36 rounded-md border-2 border-gray-50 px-2 py-3 text-lg lg:block">
          Contact us
        </button>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className="mt-16 lg:w-[582px]">
          <img
            src={rectangle4}
            className="absolute right-40 top-0 -z-10 blur-3xl lg:-left-40 lg:-top-48"
          />
          <h1 className="font-monster text-[42px] font-bold leading-[63px] lg:text-[80px] lg:leading-[84px]">
            Build Your
            <br /> Awesome
            <br /> Platform
          </h1>
          <p className="mt-8 text-lg text-gray-400 lg:text-xl lg:leading-10">
            Enver studio is a digital studio that offers several services such
            as UI/UX Design to developers, we will provide the best service for
            those of you who use our services.
          </p>
          <button className="bg-brand font-nunito group mt-12 flex max-w-lg flex-row items-center justify-center gap-2 px-4 py-2 font-medium transition-all duration-300 hover:brightness-125 lg:w-56 lg:gap-2 lg:px-7 lg:py-4 lg:text-xl">
            Our Services
            <img
              className="h-6 duration-300 group-hover:rotate-45"
              src={arrow}
            />
          </button>
        </div>

        <div className="relative mt-24 lg:w-1/2">
          <img className="absolute top-5 lg:size-24" src={resistance} />
          <img className="absolute -top-2 right-8 lg:size-14" src={circles} />
          <img className="lg:hidden" src={man_group} />
          <img className="hidden lg:block" src={lg_man_group} />
          <img className="absolute -bottom-2 lg:size-28" src={triangles} />
          <img className="absolute bottom-14 right-5 lg:size-14" src={plus} />
          <img
            src={rectangle3}
            className="absolute -bottom-4 blur-3xl lg:-bottom-64"
          />
        </div>
      </div>

      <div className="mx-auto flex flex-col">
        <div className="flex flex-col lg:mt-32 lg:flex-row lg:items-start lg:justify-between lg:gap-6">
          <h1 className="font-monster mt-28 text-4xl font-bold leading-[54px] lg:mt-6 lg:w-1/2 lg:text-6xl lg:leading-[70px]">
            Why Enver Is The Best Choice?
          </h1>
          <p className="font-nunito mt-8 text-lg text-gray-400 lg:mt-9 lg:w-[40%] lg:text-xl">
            Watch this one minute video so you understand why you should use our
            services!
          </p>
        </div>
        <div className="mt-12 grid h-56 w-full place-content-center bg-[url('src/assets/image-4.png')] bg-auto bg-center lg:hidden">
          <img src={playBtn} />
        </div>
        <div className="mt-12 hidden h-56 w-full bg-[url('src/assets/lg_image_4.png')] bg-center bg-no-repeat object-contain lg:grid lg:h-[670px] lg:place-content-center lg:bg-contain">
          <img className="size-32 hover:brightness-150" src={playBtn} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
