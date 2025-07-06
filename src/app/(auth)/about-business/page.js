/* eslint-disable react/no-unescaped-entities */
"use client";

import { AllImages } from "@/assets/images/AllImages";
import Map from "@/components/Map/Map";
import { Checkbox, Form, Input, Radio, Typography } from "antd";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";

const AboutBusiness = () => {
  
  const [location, setLocation] = useState(null);

  console.log("location", location);
  const router = useRouter();

  const handleUseCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          const data = {
            type: "Point",
            coordinates: [longitude,latitude],
          };
          setLocation({
            lng: longitude,
            lat: latitude,
          });
          localStorage.setItem("location", JSON.stringify(data));
        },
        (err) => {
          console.err("Geolocation Error: ", err.message);
          alert("Failed to get your location. Please allow location access.");
        }
      );
    } else {
      alert("geolocation is not supported by your browser");
    }
  };

  const onFinish = (values) => {
    // localStorage.setItem("role", JSON.stringify(values.role));
    localStorage.setItem("studioName", JSON.stringify(values.studioName));
    localStorage.setItem("businessType", JSON.stringify(values.businessType));
    localStorage.setItem(
      "servicesOffered",
      JSON.stringify(values.servicesOffered)
    );
    // localStorage.setItem("location", JSON.stringify(location));
    localStorage.setItem("city", JSON.stringify(values.city));
    localStorage.setItem("contactNumber", JSON.stringify(values.contactNumber));
    localStorage.setItem("contactEmail", JSON.stringify(values.contactEmail));

    router.push("/operating-hours");
  };
  return (
    <div className="py-16 md:py-0 h-[100vh] w-full flex items-center justify-center ">
      <div className="pt-32 pb-16">
        <div className="">
          <div className="md:w-[450px]">
            <Form
              name="select-user-type"
              initialValues={{ remember: true }}
              layout="vertical"
              className=""
              onFinish={onFinish}
            >
              <div className="mb-4 flex flex-col justify-center items-center text-center">
                <Image
                  src={AllImages.logo}
                  width={50}
                  height={50}
                  alt="logo"
                ></Image>
                <h2 className="text-center text-2xl font-bold mt-6 mb-2 text-primary">
                  Tell Us About Your Business
                </h2>
                <Typography.Text className=" text-center text-base ">
                  Provide key details about your business to help us showcase it
                  to artists and clients effectively
                </Typography.Text>
              </div>
              <Form.Item
                name="studioName"
                label={<p className=" text-md">Business Name</p>}
                style={{ width: "90%", margin: "auto", marginBottom: "10px" }}
              >
                <Input
                  required
                  style={{ padding: "6px" }}
                  className=" text-md"
                  placeholder="Your Business Name"
                />
              </Form.Item>
              <Form.Item
                name="businessType"
                label={<p className="px-6 text-md">Business Type</p>}
              >
                <div className="flex flex-col gap-4 w-full px-6">
                  <Radio value={"Studio"}>
                    <h1 className="text-textSecondary">Studio</h1>
                  </Radio>
                  <Radio value={"Event Organizer"}>
                    <h1 className="text-textSecondary">Event Organizer</h1>
                  </Radio>
                  <Radio value={"Both"}>
                    <h1 className="text-textSecondary">Both</h1>
                  </Radio>
                </div>
              </Form.Item>
              <Form.Item
                name="servicesOffered"
                label={<p className="px-6 text-md">Services Offered</p>}
              >
                <Checkbox.Group className="flex flex-col gap-4 w-full px-6">
                  <Checkbox value="Tattoo Spaces for Guest/Resident artists">
                    Tattoo Spaces for Guest/Resident artists
                  </Checkbox>
                  <Checkbox value="Piercing Rooms for Guest/Resident artists">
                    Piercing Rooms for Guest/Resident artists
                  </Checkbox>
                  <Checkbox value="Events">Events</Checkbox>
                  <Checkbox value="Other">Other</Checkbox>
                </Checkbox.Group>
              </Form.Item>

              <Form.Item
                name="primary-location"
                label={<p className=" text-md">Primary Location</p>}
                style={{ width: "90%", margin: "auto", marginBottom: "10px" }}
              >
                {/* <Input
                  required
                  style={{ padding: "6px" }}
                  className=" text-md"
                  placeholder="Your Primary Location"
                /> */}
                <button
                  type="button"
                  onClick={handleUseCurrentLocation}
                  className="flex justify-center items-center gap-2 text-primary border border-primary w-full py-2 rounded-xl"
                >
                  <FaLocationArrow />
                  {location ? (
                    <p className="text-sm">
                      {location.lat}, {location.lng}
                    </p>
                  ) : (
                    <p className="text-sm">Use my current location</p>
                  )}
                  {location && <Map location={location} />}
                </button>
              </Form.Item>



              <Form.Item
                name="city"
                label={<p className=" text-md">City</p>}
                style={{ width: "90%", margin: "auto", marginBottom: "10px" }}
              >
                <Input
                  required
                  style={{ padding: "6px" }}
                  className=" text-md"
                  placeholder="Your City"
                />
              </Form.Item>
              <Form.Item
                name="contactNumber"
                label={<p className=" text-md">Phone Number</p>}
                style={{ width: "90%", margin: "auto", marginBottom: "10px" }}
              >
                <Input
                  required
                  style={{ padding: "6px" }}
                  className=" text-md"
                  placeholder="Your Phone Number"
                />
              </Form.Item>
              <Form.Item
                name="contactEmail"
                label={<p className=" text-md">Email Address</p>}
                style={{ width: "90%", margin: "auto", marginBottom: "10px" }}
              >
                <Input
                  required
                  style={{ padding: "6px" }}
                  className=" text-md"
                  placeholder="Your Email Address"
                />
              </Form.Item>

              <button className="w-full bg-primary text-white py-3 rounded-lg mt-5 mx-2 md:mx-0">
                Continue
              </button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBusiness;
