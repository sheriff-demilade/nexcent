import icon from "../assets/Icon.png";
import icon1 from "../assets/Icon-1.png";
import icon2 from "../assets/Icon-2.png";
import company1 from "../assets/icons/company1.png";
import company2 from "../assets/icons/company2.png";
import company3 from "../assets/icons/company3.png";
import company4 from "../assets/icons/company4.png";
import company5 from "../assets/icons/company5.png";
import company6 from "../assets/icons/company6.png";
import company7 from "../assets/icons/company7.png";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Membership Organisations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: icon,
    },
    {
      id: 2,
      title: "National Associations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: icon1,
    },
    {
      id: 3,
      title: "Clubs And Groups",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
      image: icon2,
    },
  ];
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
      <div className="text-center my-8">
        <h2 className=" text-4xl text-neutralDGray font-semibold mb-2">
          Our Clients
        </h2>
        <p className=" text-neutralGray">
          We have been working with some Fortune 500+ clients
        </p>
        <div className="my-12 flex flex-wrap justify-between items-center gap-8">
          <img src={company1} alt="company" />
          <img src={company2} alt="company" />
          <img src={company3} alt="company" />
          <img src={company4} alt="company" />
          <img src={company5} alt="company" />
          <img src={company6} alt="company" />
          <img src={company7} alt="company" />
        </div>
      </div>
      {/* Service Card */}
      <div className="mt-20 md:w-1/2 mx-auto text-center my-8">
        <h2 className=" text-4xl text-neutralDGray font-semibold mb-3">
          Manage your entire community in a single system{" "}
        </h2>
        <p className=" text-neutralGray">Who is Nextcent suitable for?</p>
      </div>
      {/* Cards */}
      <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {services.map((service) => (
          <div
            key={service.id}
            className="px-4 py-8 text-center md:w-[300px] mx--auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full"
          >
            <div>
              <div className="bg-[#e8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl ">
                <img src={service.image} alt="" className="h-12 w-12 -ml-5" />
              </div>
              <h4 className="text-2xl font-bold text-neutralDGray mb-2 px-2">
                {service.title}
              </h4>
              <p className=" text-sm text-neutralGray">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
