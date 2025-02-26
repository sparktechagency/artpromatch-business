"use client";

import { AllImages } from '@/assets/images/AllImages';
import { ConfigProvider, Form, Input, Modal } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaCalendarDay, FaDollarSign } from 'react-icons/fa6';
import { IoIosArrowForward } from 'react-icons/io';

const ResidentArtist = () => {
    const [selectedTab, setSelectedTab] = useState("Tattoo Artists");
    const artistsData = [
        {
            id: 1,
            name: "Lora Craft",
            location: "New York, USA",
            distance: "3.2 miles away",
            price: "400/hr",
            availability: "Next Week",
            categories: ["Tattoo Artists", "Neo-Traditional"],
            image: AllImages.image2,
        },
        {
            id: 2,
            name: "John Doe",
            location: "Los Angeles, USA",
            distance: "2.8 miles away",
            price: "350/hr",
            availability: "Next Week",
            categories: ["Tattoo Artists", "Realism"],
            image: AllImages.image2,
        },
        {
            id: 3,
            name: "Jane Smith",
            location: "Miami, USA",
            distance: "5.1 miles away",
            price: "500/hr",
            availability: "This Weekend",
            categories: ["Tattoo Artists", "Black & Grey"],
            image: AllImages.image3,
        },
        {
            id: 4,
            name: "Mike Johnson",
            location: "Chicago, USA",
            distance: "4.3 miles away",
            price: "450/hr",
            availability: "Next Month",
            categories: ["Tattoo Artists", "Watercolor"],
            image: AllImages.image4,
        },

    ];
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const onFinish = (values) => {
        console.log(values)
    }
    const filteredArtists = artistsData.filter(artist =>
        artist.categories.includes(selectedTab)
    );
    return (
        <div>
            <h1 className='text-2xl font-bold'>Meet Our Resident Artists</h1>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                    {filteredArtists.map((artist) => (
                        <div key={artist.id} className="border rounded-xl p-2">
                            <Image onClick={() => showModal(artist.id)} src={artist.image} alt={artist.name} height={300} width={500} className='cursor-pointer' />

                            <div className="flex justify-between items-center my-3">
                                <div className="flex items-center gap-2">
                                    <Link href="/other-artist-profile">
                                        <Image src={artist.image} alt={artist.name} height={50} width={50} className="rounded-full" />
                                    </Link>
                                    <div>
                                        <h1 className="text-xl font-semibold">{artist.name}</h1>
                                        <p className="text-xs text-neutral-500">{artist.location}</p>
                                    </div>
                                </div>
                                <p className="text-textSecondary">{artist.distance}</p>
                            </div>

                            <div className="flex justify-between items-center gap-2 mb-5">
                                <div className="flex gap-2">
                                    <button className="bg-neutral-200 px-2 py-1 rounded-3xl font-semibold">Ear</button>
                                    <button className="bg-neutral-200 px-2 py-1 rounded-3xl font-semibold">Facial</button>
                                    <button className="bg-neutral-200 px-2 py-1 rounded-3xl font-semibold">Oral</button>
                                    <button className="bg-neutral-200 px-2 py-1 rounded-3xl font-semibold">Genital</button>
                                </div>
                                <button className="text-textSecondary">+5</button>
                            </div>

                            <div className="flex justify-between items-center">
                                <div className="flex gap-1">
                                    <FaCalendarDay />
                                    <p className="text-xs">{artist.availability}</p>
                                </div>
                                <div className="flex items-center text-primary font-bold">
                                    <FaDollarSign />
                                    {artist.price}
                                    <IoIosArrowForward />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <ConfigProvider
                theme={{
                    components: {
                        "Button": {
                            "defaultHoverBorderColor": "rgb(47,84,235)",
                            "defaultHoverColor": "rgb(47,84,235)",
                            "defaultBorderColor": "rgb(47,84,235)"
                        }
                    }
                }}
            >
                {/* modal for add program */}
                <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={false} >
                    <Form
                        onFinish={onFinish}
                        name='about you'>
                        <h1 className='text-2xl font-bold'>About You</h1>
                        <div className=''>
                            <Form.Item name='about-you' style={{ width: "100%" }}>
                                <Input.TextArea rows={4} placeholder="Write about yourself..." />
                            </Form.Item>
                            <Form.Item name='about-you' style={{ width: "100%" }}>
                                <button onClick={handleOk} className='bg-primary text-white w-full py-2 rounded-xl'>save</button>
                            </Form.Item>

                        </div>
                    </Form>
                </Modal>
            </ConfigProvider>
        </div>
    );
};

export default ResidentArtist;