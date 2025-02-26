'use client'
import { AllImages } from '@/assets/images/AllImages';
import { Form, Input, Typography } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiClock2 } from "react-icons/ci";
const OperatingHours = () => {
    const onFinish = (values) => {
        console.log(values)
    }
    return (
        <div className="py-16 md:py-0 h-[100vh] w-full flex items-center justify-center ">
            <div className="pt-32 pb-16">
                <div className="">
                    <div className="md:w-[470px]">
                        <Form
                            name="operating-hours"
                            initialValues={{ remember: true }}
                            layout="vertical"
                            className=""
                        >
                            <div className="mb-4 flex flex-col justify-center items-center text-center">
                                <Image src={AllImages.logo} width={50} height={50} alt='logo'></Image>
                                <h2 className="text-center text-2xl font-bold mt-6 mb-2 text-primary">
                                    Operating Hours
                                </h2>
                                <Typography.Text className=" text-center text-base ">
                                    Set your studio’s weekly operating hours for artists and clients on Steady Hands
                                </Typography.Text>
                            </div>
                            <div className='border rounded-xl p-5'>
                                <Form.Item
                                    name="monday"

                                    style={{ width: "90%", margin: "auto", marginBottom: "10px" }}
                                >
                                    <div className="flex justify-between items-center gap-2">
                                        <div>
                                            <p>Monday</p>
                                        </div>
                                        <div className='border px-1 py-1 flex justify-center items-center gap-2 rounded-lg'>
                                            <CiClock2 />
                                            <p>8:00 AM - 5:00 PM</p>
                                        </div>
                                        <div className='border px-1 py-1 flex justify-center items-center gap-2 rounded-lg'>
                                            <CiClock2 />
                                            <p>8:00 AM - 5:00 PM</p>
                                        </div>
                                    </div>
                                </Form.Item>
                                <Form.Item
                                    name="tuesday"

                                    style={{ width: "90%", margin: "auto", marginBottom: "10px" }}
                                >
                                    <div className="flex justify-between items-center gap-2">
                                        <div>
                                            <p>Tuesday</p>
                                        </div>
                                        <div className='border px-1 py-1 flex justify-center items-center gap-2 rounded-lg'>
                                            <CiClock2 />
                                            <p>8:00 AM - 5:00 PM</p>
                                        </div>
                                        <div className='border px-1 py-1 flex justify-center items-center gap-2 rounded-lg'>
                                            <CiClock2 />
                                            <p>8:00 AM - 5:00 PM</p>
                                        </div>
                                    </div>
                                </Form.Item>
                                <Form.Item
                                    name="wednesday"

                                    style={{ width: "90%", margin: "auto", marginBottom: "10px" }}
                                >
                                    <div className="flex justify-between items-center gap-2">
                                        <div>
                                            <p>Wednesday</p>
                                        </div>
                                        <div className='border px-1 py-1 flex justify-center items-center gap-2 rounded-lg'>
                                            <CiClock2 />
                                            <p>8:00 AM - 5:00 PM</p>
                                        </div>
                                        <div className='border px-1 py-1 flex justify-center items-center gap-2 rounded-lg'>
                                            <CiClock2 />
                                            <p>8:00 AM - 5:00 PM</p>
                                        </div>
                                    </div>
                                </Form.Item>
                                <Form.Item
                                    name="thursday"

                                    style={{ width: "90%", margin: "auto", marginBottom: "10px" }}
                                >
                                    <div className="flex justify-between items-center gap-2">
                                        <div>
                                            <p>Thursday</p>
                                        </div>
                                        <div className='border px-1 py-1 flex justify-center items-center gap-2 rounded-lg'>
                                            <CiClock2 />
                                            <p>8:00 AM - 5:00 PM</p>
                                        </div>
                                        <div className='border px-1 py-1 flex justify-center items-center gap-2 rounded-lg'>
                                            <CiClock2 />
                                            <p>8:00 AM - 5:00 PM</p>
                                        </div>
                                    </div>
                                </Form.Item>
                                <Form.Item
                                    name="friday"

                                    style={{ width: "90%", margin: "auto", marginBottom: "10px" }}
                                >
                                    <div className="flex justify-between items-center gap-2">
                                        <div>
                                            <p>Friday</p>
                                        </div>
                                        <div className='border px-1 py-1 flex justify-center items-center gap-2 rounded-lg'>
                                            <CiClock2 />
                                            <p>8:00 AM - 5:00 PM</p>
                                        </div>
                                        <div className='border px-1 py-1 flex justify-center items-center gap-2 rounded-lg'>
                                            <CiClock2 />
                                            <p>8:00 AM - 5:00 PM</p>
                                        </div>
                                    </div>
                                </Form.Item>
                                <Form.Item
                                    name="saturday"

                                    style={{ width: "90%", margin: "auto", marginBottom: "10px" }}
                                >
                                    <div className="flex justify-between items-center gap-2">
                                        <div>
                                            <p>Saturday</p>
                                        </div>
                                        <div className='border px-1 py-1 flex justify-center items-center gap-2 rounded-lg'>
                                            <CiClock2 />
                                            <p>8:00 AM - 5:00 PM</p>
                                        </div>
                                        <div className='border px-1 py-1 flex justify-center items-center gap-2 rounded-lg'>
                                            <CiClock2 />
                                            <p>8:00 AM - 5:00 PM</p>
                                        </div>
                                    </div>
                                </Form.Item>
                                <Form.Item
                                    name="sunday"

                                    style={{ width: "90%", margin: "auto", marginBottom: "10px" }}
                                >
                                    <div className="flex justify-between items-center gap-2">
                                        <div>
                                            <p>Sunday</p>
                                        </div>
                                        <div className='border px-1 py-1 flex justify-center items-center gap-2 rounded-lg'>
                                            <CiClock2 />
                                            <p>8:00 AM - 5:00 PM</p>
                                        </div>
                                        <div className='border px-1 py-1 flex justify-center items-center gap-2 rounded-lg'>
                                            <CiClock2 />
                                            <p>8:00 AM - 5:00 PM</p>
                                        </div>
                                    </div>
                                </Form.Item>
                                <Form.Item
                                    name="submit"

                                    style={{ width: "90%", margin: "auto", marginBottom: "10px" }}
                                >
                                    <Link href="/verify-profile">
                                        <button className='w-full bg-primary text-white py-2 rounded-lg'>Submit</button>
                                    </Link>
                                </Form.Item>

                            </div>
                        </Form>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default OperatingHours;