// import { Card } from "antd";
// import { CheckCircleOutlined } from "@ant-design/icons";
import Image from "next/image";
import { AllImages } from "@/assets/images/AllImages";

const steps = [
  {
    title: "Sign Up and Verify",
    description:
      "Create your business account and verify your studio to gain visibility on the platform.",
  },
  {
    title: "Add Studio Details",
    description:
      "Showcase your studio by adding your location, services, and any available guest spots.",
  },
  {
    title: "Discover Artists and Events",
    description:
      "Browse and connect with talented artists for guest spots or collaborate on upcoming events.",
  },
  {
    title: "Manage Bookings & Earnings",
    description:
      "Track appointments, client interactions, and revenue from one powerful dashboard.",
  },
];

const HowItsWorks = () => {
  return (
    <div className="mt-10 md:mt-0 md:relative bg-primary text-white py-16 px-6 md:px-16 lg:px-14 h-auto md:h-[600px] rounded-xl">
      <Image
        src={AllImages.hi}
        width={0}
        height={0}
        alt="logo"
        className="hidden md:block w-full h-auto absolute -top-2  px-20 py-5 "
      ></Image>

      <div className="md:absolute md:top-20 md:left-[20%] md:transform md:-translate-x-1/2 
      md:-translate-y-1/2  ">
        <h2 className="text-3xl md:text-4xl font-bold ">How it works</h2>
        <p className=" text-gray-300 mt-3">
          Follow these simple steps to set up your profile, manage events, and{" "}
          <br />
          connect with artists and clients.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="md:absolute md:top-[80%] md:left-[23%] md:transform 
        md:-translate-x-1/2 md:-translate-y-1/2">
          <div className=" text-center md:text-left md:w-1/2 px-4">
            <h3 className="mt-4 text-lg font-semibold">Add Studio Details</h3>
            <p className="mt-2 text-gray-300 text-sm">
              Showcase your studio by adding your location, services, and any
              available guest spots.
            </p>
          </div>
        </div>

        <div className="md:absolute md:top-[70%] md:left-[52%] md:transform md:-translate-x-1/2 md:-translate-y-1/2">
          <div className=" text-center md:text-left md:w-1/2 px-4">
            <h3 className="mt-4 text-lg font-semibold">Add Studio Details</h3>
            <p className="mt-2 text-gray-300 text-sm">
              Showcase your studio by adding your location, services, and any
              available guest spots.
            </p>
          </div>
        </div>

        <div className="md:absolute md:top-[60%] md:left-[77%] md:transform md:-translate-x-1/2 md:-translate-y-1/2">
          <div className=" text-center md:text-left  px-2 md:px-0">
            <h3 className="mt-4 text-lg font-semibold">Add Studio Details</h3>
            <p className="mt-2 text-gray-300 text-sm">
              Showcase your studio by adding your location, services, and any
              available guest spots.
            </p>
          </div>
        </div>

        <div className="md:absolute md:top-[25%] md:left-[90%] md:transform 
        md:-translate-x-1/2 md:-translate-y-1/2">
          <div className="text-center md:text-left md:w-[300px] px-2 md:px-0">
            <h3 className="mt-4 text-lg font-semibold">Add Studio Details</h3>
            <p className="mt-2 text-gray-300 text-sm">
              Showcase your studio by adding your location, services, and any
              available guest spots.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItsWorks;
