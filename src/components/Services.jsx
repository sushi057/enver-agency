import service1 from "../assets/Icon.svg";
import service2 from "../assets/Icon-1.svg";
import service3 from "../assets/Icon-2.svg";
import service4 from "../assets/Icon-3.svg";
import service5 from "../assets/Icon-4.svg";
import service6 from "../assets/Icon-5.svg";
import triangles from "../assets/triangles.svg";
import plus from "../assets/plus.svg";

function Services() {
  const services = [
    {
      service: service1,
      title: "Development",
      info: "Create a platform with the best and coolest quality from us.",
    },
    {
      service: service2,
      title: "UI/UX Designer",
      info: "We provide UI/UX Design services, and of course with the best quality",
    },
    {
      service: service3,
      title: "Graphic Designer",
      info: "We provide Graphic Design services, with the best designers.",
    },
    {
      service: service4,
      title: "Motion Graphic",
      info: "Create a platform with the best and coolest quality from us.",
    },
    {
      service: service5,
      title: "Photography",
      info: "We provide Photography services, and of course with the best quality",
    },
    {
      service: service6,
      title: "Videography",
      info: "Create a platform with the best and coolest quality from us.",
    },
  ];

  const ServiceCard = ({ service }) => {
    return (
      <div className="mt-24 flex flex-col items-center">
        <img src={service.service} />
        <p className="font-nunito mt-5 text-2xl">{service.title}</p>
        <p className="font-nunito mt-5 text-center text-lg leading-[36px] text-gray-400">
          {service.info}
        </p>
      </div>
    );
  };
  return (
    <div className="relative">
      <div className="relative">
        <img className="absolute -top-20" src={triangles} />
        <h1 className="font-monster mt-36 text-4xl font-bold leading-[54px]">
          The Services We Provide For You
        </h1>
        <img className="absolute right-5 size-7" src={plus} />
      </div>
      <div className="grid">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
      <img className="absolute -bottom-28" src={plus} />
    </div>
  );
}

export default Services;
