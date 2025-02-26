/* eslint-disable react/no-unescaped-entities */
'use client';

import { AllImages } from '@/assets/images/AllImages';
import { Form, Input, Radio, Typography } from 'antd';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AboutBusiness = () => {
    const onFinish = (values) => {
        console.log(values)
    }
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
                        >
                            <div className="mb-4 flex flex-col justify-center items-center text-center">
                                <Image src={AllImages.logo} width={50} height={50} alt='logo'></Image>
                                <h2 className="text-center text-2xl font-bold mt-6 mb-2 text-primary">
                                    Tell Us About Your Business
                                </h2>
                                <Typography.Text className=" text-center text-base ">
                                    Provide key details about your business to help us showcase it to artists and clients effectively
                                </Typography.Text>
                            </div>
                            <Form.Item
                                name="business-name"
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
                                name="business-type"
                                label={<p className="px-6 text-md">Business Type</p>}
                            >
                                <div className='flex flex-col gap-4 w-full px-6'>
                                    <Radio >
                                        <h1 className='text-textSecondary'>Studio</h1>
                                    </Radio>
                                    <Radio >
                                        <h1 className='text-textSecondary'>Event Organizer</h1>
                                    </Radio>
                                    <Radio >
                                        <h1 className='text-textSecondary'>Both</h1>
                                    </Radio>
                                </div>
                            </Form.Item>
                            <Form.Item
                                name="services-offered"
                                label={<p className="px-6 text-md">Services Offered</p>}
                            >
                                <div className='flex flex-col gap-4 w-full px-6'>
                                    <Radio >
                                        <h1 className='text-textSecondary'>Tattoo Spaces for Guest/Resident artists</h1>
                                    </Radio>
                                    <Radio >
                                        <h1 className='text-textSecondary'>Piercing Rooms for Guest/Resident artists</h1>
                                    </Radio>
                                    <Radio >
                                        <h1 className='text-textSecondary'>Events</h1>
                                    </Radio>
                                    <Radio >
                                        <h1 className='text-textSecondary'>Other</h1>
                                    </Radio>
                                </div>
                            </Form.Item>
                            <Form.Item
                                name="primary-location"
                                label={<p className=" text-md">Primary Location</p>}
                                style={{ width: "90%", margin: "auto", marginBottom: "10px" }}
                            >
                                <Input
                                    required
                                    style={{ padding: "6px" }}
                                    className=" text-md"
                                    placeholder="Your Primary Location"
                                />
                            </Form.Item>
                            <Form.Item
                                name="phone-number"
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
                                name="email"
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


                            <Link href="/operating-hours">
                                <button className='w-full bg-primary text-white py-3 rounded-lg mt-5 mx-2 md:mx-0'>Continue</button>
                            </Link>
                        </Form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutBusiness;