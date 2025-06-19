"use client";
import { AllImages } from "@/assets/images/AllImages";
import { Form, TimePicker, Typography } from "antd";
import Image from "next/image";
import React, { use } from "react";
import dayjs from "dayjs";
import { CiClock2 } from "react-icons/ci";
import { useRouter } from "next/navigation";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const OperatingHours = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  const onFinish = (values) => {
    const operatingHours = {};
    days.forEach((day) => {
      const start = values[`${day.toLowerCase()}Start`];
      const end = values[`${day.toLowerCase()}End`];
      if (start && end) {
        operatingHours[day] = [
          {
            start: dayjs(start).format("HH:mm"),
            end: dayjs(end).format("HH:mm"),
          },
        ];
      }
    });
    // console.log("operatingHours:", operatingHours);
    localStorage.setItem("operatingHours", JSON.stringify(operatingHours));
    router.push("/verify-profile");
  };

  return (
    <div className="py-16 md:py-0 h-[100vh] w-full flex items-center justify-center">
      <div className="pt-32 pb-16">
        <div className="md:w-[470px]">
          <Form
            form={form}
            name="operating-hours"
            layout="vertical"
            onFinish={onFinish}
          >
            <div className="mb-4 flex flex-col justify-center items-center text-center">
              <Image src={AllImages.logo} width={50} height={50} alt="logo" />
              <h2 className="text-center text-2xl font-bold mt-6 mb-2 text-primary">
                Operating Hours
              </h2>
              <Typography.Text className="text-center text-base">
                Set your studio’s weekly operating hours for artists and clients
                on Steady Hands
              </Typography.Text>
            </div>
            <div className="border rounded-xl p-5">
              {days.map((day) => (
                <Form.Item key={day}>
                  <div className="flex justify-between items-center gap-2">
                    <p className="w-24">{day}</p>
                    <Form.Item
                      name={`${day.toLowerCase()}Start`}
                      noStyle
                      rules={[
                        { required: true, message: "Start time required" },
                      ]}
                    >
                      <TimePicker format="HH:mm" />
                    </Form.Item>
                    <span> - </span>
                    <Form.Item
                      name={`${day.toLowerCase()}End`}
                      noStyle
                      rules={[{ required: true, message: "End time required" }]}
                    >
                      <TimePicker format="HH:mm" />
                    </Form.Item>
                  </div>
                </Form.Item>
              ))}
              <Form.Item>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-2 rounded-lg"
                >
                  Submit
                </button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default OperatingHours;
