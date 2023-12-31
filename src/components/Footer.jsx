import plus from "../assets/plus.svg";
import circles from "../assets/circles.svg";
import enver from "../assets/enver.svg";
import resistance from "../assets/resistance.svg";

function Footer() {
  return (
    <div className="mt-40 flex flex-col lg:mt-80">
      <div className="relative flex flex-col items-start">
        <img
          className="absolute -top-20 left-5  size-12 lg:-top-64 lg:size-20"
          src={resistance}
        />
        <img className="absolute right-0 lg:-top-24" src={plus} />
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <h1 className="font-monster mt-20 text-[38px] font-bold lg:mt-0 lg:text-6xl">
            Contact us for the service you want to use
          </h1>
          <button className="bg-brand font-nunito mt-12 w-fit max-w-lg gap-2 rounded-sm px-8 py-3 text-center text-xl font-medium lg:mt-0 lg:h-fit lg:w-64">
            Contact us
          </button>
        </div>
        <img className="absolute -bottom-16 lg:-bottom-28" src={circles} />
      </div>

      <div className="mt-40 flex flex-col items-center gap-10 text-lg lg:mt-60 lg:flex-row lg:justify-between">
        <div className="flex flex-row items-center gap-1">
          <img className="h-7" src={enver} />
          <h1 className="font-monster text-[28px] font-semibold">Enver</h1>
        </div>
        <div className="font-nunito flex flex-col items-center gap-10 text-center text-gray-400 lg:flex-row lg:justify-center">
          <p>Support</p>
          <p>Privacy Policy</p>
          <p>Terms And Conditions</p>
        </div>
        <p>&copy;2020 Enver, All right reserved</p>
      </div>
    </div>
  );
}

export default Footer;
