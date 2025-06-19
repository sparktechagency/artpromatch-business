"use client";

import { AllImages } from "@/assets/images/AllImages";
import { useCreateProfileMutation } from "@/redux/features/auth/authApi";
import { Form, message, Radio, Steps, Typography, Upload } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";

const VerifyProfile = () => {
  const [current, setCurrent] = useState(0);
  const Router = useRouter();
  const [createProfile] = useCreateProfileMutation();

  const role = JSON.parse(localStorage.getItem("role"));
  const studioName = JSON.parse(localStorage.getItem("studioName"));

  const businessType = JSON.parse(localStorage.getItem("businessType"));
  const servicesOffered = JSON.parse(localStorage.getItem("servicesOffered"));
  const location = JSON.parse(localStorage.getItem("location"));
  const city = JSON.parse(localStorage.getItem("city"));
  const contactNumber = JSON.parse(localStorage.getItem("contactNumber"));
  const contactEmail = JSON.parse(localStorage.getItem("contactEmail"));
  const operatingHours = JSON.parse(localStorage.getItem("operatingHours"));

  const onFinish = (values) => {
    const registrationCertificate =
      values.registrationCertificate?.[0]?.originFileObj;
    const taxIdOrEquivalent = values.taxIdOrEquivalent?.[0]?.originFileObj;
    const studioLicense = values.studioLicense?.[0]?.originFileObj;

    const data = {
      role: role,
      studioName: studioName,
      businessType: businessType,
      servicesOffered: servicesOffered,
      location: location,
      city: city,
      contactNumber: contactNumber,
      contactEmail: contactEmail,
      operatingHours: operatingHours,
    };
    // console.log(data);

    // return
    const formData = new FormData();
    formData.append("registrationCertificate", registrationCertificate);
    formData.append("taxIdOrEquivalent", taxIdOrEquivalent);
    formData.append("studioLicense", studioLicense);

    formData.append("data", JSON.stringify(data));

    createProfile(formData)
      .unwrap()
      .then((res) => {
        console.log("res", res);
        message.success(res?.message);
        Router.push("/user-welcome");
      })
      .catch((err) => {
        console.log("err", err);
        message.error(err?.data?.message);
      });
  };
  return (
    <div className="mt-32 py-16 md:py-0 h-[100vh] w-full flex items-center justify-center ">
      <div className="pt-32 pb-16">
        <div className="">
          <div className="w-[450px]">
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
                  Verify Your Business Profile
                </h2>
                <Typography.Text className=" text-center text-base ">
                  Upload documentation to verify your business and build trust
                  with artists and clients.
                </Typography.Text>
              </div>

              <Form.Item
                name="registrationCertificate"
                valuePropName="fileList"
                getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
                rules={[
                  {
                    required: true,
                    message:
                      "Please upload the Business Registration Certificate!",
                  },
                ]}
              >
                <Upload
                  listType="picture"
                  beforeUpload={() => false} // Prevent auto upload
                  className="w-full"
                >
                  <div className="border hover:border-primary rounded-lg p-6">
                    <h1 className="text-xl font-bold">
                      Business Registration Certificate
                    </h1>
                    <p>
                      Upload a valid registration certificate to confirm your
                      business is legally recognized.
                    </p>
                    <div className="border border-primary rounded-xl py-2 flex justify-center items-center gap-3 my-3">
                      <FaPlus className="h-5 w-5 text-primary" />
                      <p className="text-primary"> Upload </p>
                    </div>
                  </div>
                </Upload>
              </Form.Item>

              <Form.Item
                name="taxIdOrEquivalent"
                valuePropName="fileList"
                getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
                rules={[
                  {
                    required: true,
                    message: "Please upload the Tax ID or Equivalent!",
                  },
                ]}
              >
                <Upload
                  listType="picture"
                  beforeUpload={() => false}
                  className="w-full"
                >
                  <div className="border hover:border-primary rounded-lg p-6">
                    <h1 className="text-xl font-bold">Tax ID or Equivalent</h1>
                    <p>
                      Provide your Tax ID or equivalent document to verify your
                      business’s compliance.
                    </p>
                    <div className="border border-primary rounded-xl py-2 flex justify-center items-center gap-3 my-3">
                      <FaPlus className="h-5 w-5 text-primary" />
                      <p className="text-primary"> Upload</p>
                    </div>
                  </div>
                </Upload>
              </Form.Item>

              <Form.Item
                name="studioLicense"
                valuePropName="fileList"
                getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
                rules={[
                  {
                    required: true,
                    message: "Please upload the Studio License!",
                  },
                ]}
              >
                <Upload
                  listType="picture"
                  beforeUpload={() => false}
                  className="w-full"
                >
                  <div className="border hover:border-primary rounded-lg p-6">
                    <h1 className="text-xl font-bold">
                      Studio License (optional)
                    </h1>
                    <p>
                      If applicable, upload your studio license to add
                      credibility and attract more artists.
                    </p>
                    <div className="border border-primary rounded-xl py-2 flex justify-center items-center gap-3 my-3">
                      <FaPlus className="h-5 w-5 text-primary" />
                      <p className="text-primary"> Upload selfie</p>
                    </div>
                  </div>
                </Upload>
              </Form.Item>

              {/* <Link href="/all-set "> */}
              <button className="w-full bg-primary text-white py-3 rounded-lg my-5">
                Continue
              </button>
              {/* </Link> */}
              {/* <button className='w-full mt-5'>Skip</button> */}
            </Form>
          </div>
          <Steps
            current={current}
            // onChange={onChange}
            direction="horizontal"
            size="small"
            items={[
              {
                title: "",
                status: "finish",
              },
              {
                title: "",
                status: current >= 1 ? "finish" : "wait",
              },
              {
                title: "",
                status: current >= 2 ? "finish" : "wait",
              },
              {
                title: "",
                status: current >= 3 ? "finish" : "wait",
              },
            ]}
            style={{
              width: "100%",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default VerifyProfile;
