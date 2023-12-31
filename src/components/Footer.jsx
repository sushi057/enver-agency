import plus from "../assets/plus.svg";
import circles from "../assets/circles.svg";
import enver from "../assets/enver.svg";

function Footer() {
  return (
    <div className="mt-40 flex flex-col mx-10">
      <div className="relative flex flex-col items-start">
        <img className="absolute right-0" src={plus} />
        <h1 className="font-monster mt-20 text-[38px] font-bold">
          Contact us for the service you want to use
        </h1>
        <button className=" bg-brand font-nunito mt-12 flex max-w-lg flex-row items-center gap-2 rounded-sm px-8 py-3 text-xl font-medium">
          Contact us
        </button>
        <img className="absolute -bottom-16" src={circles} />
      </div>
      <div className="mt-40 flex flex-col items-center gap-10 text-lg">
        <div className="flex flex-row items-center gap-1">
          <img className="h-7" src={enver} />
          <h1 className="font-monster text-[28px] font-semibold">Enver</h1>
        </div>
        <div className="font-nunito flex flex-col items-center gap-10 text-center text-gray-400">
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
