'use client'
import { AllImages } from '@/assets/images/AllImages';
import Image from 'next/image';
import { LuPenLine } from "react-icons/lu";
import BusinessProfileHeader from '@/components/WithNavFooterComponents/HomeComponents/BusinessProfileComponents/BusinessProfileHeader';
import BusinessProfileSidebar from '@/components/WithNavFooterComponents/HomeComponents/BusinessProfileComponents/BusinessProfileSidebar';
import { FaPen, FaTrash } from 'react-icons/fa6';
import ResidentArtist from '@/components/WithNavFooterComponents/BusinessProfileComponents/ResidentArtist';
import GuestArtist from '@/components/WithNavFooterComponents/BusinessProfileComponents/GuestArtist';
import UpcommingEvents from '@/components/WithNavFooterComponents/BusinessProfileComponents/UpcommingEvents';
import { ConfigProvider, Form, Input, Modal } from 'antd';
import { useState } from 'react';



const BusinessProfilePage = ({ children }) => {
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




    return (
        <div className='px-2 md:px-0'>
            <div className=''>
                <div className='bg-[#f3f1f1]'>
                    <Image src={AllImages.profileBg} alt='logo' height={300} width={300} className='h-40 md:h-auto w-full '></Image>
                </div>
                <div className='container mx-auto '>
                    <BusinessProfileHeader />
                </div>
            </div>
            <div className='container mx-auto  flex flex-col md:flex-row my-10'>
                <div className='md:w-[20%] '>
                    <BusinessProfileSidebar />
                </div>
                <div className='md:w-[80%] px-5'>
                    <div>
                        <h1 className='text-2xl font-bold flex gap-2 items-center'>About Rivera Ink Studio<LuPenLine onClick={showModal} className='bg-primary text-white h-7 w-7 p-1 rounded-full' /></h1>
                        <p> Rivera Ink Studio is a premier tattoo and piercing destination located in the heart of Brooklyn, NY. With a team of experienced resident artists and a rotating roster of talented guest artists, we specialize in a wide range of styles.</p>
                    </div>
                    <div className='my-5'>
                        <ResidentArtist />
                    </div>
                    <div className='my-5'>
                        <GuestArtist />
                    </div>
                    <div className='my-12'>
                        <div className='flex justify-between items-center'>
                            <h1 className='text-2xl font-bold'>Active Guest Spots</h1>
                            <h4 className='text-primary'>Add Guest Spot</h4>
                        </div>
                        <div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                <div className="border rounded-xl p-2 flex justify-between items-center">
                                    <div className="flex justify-between items-center gap-2">
                                        <div className="">
                                            <h1 className="text-xl font-semibold">Dec 10–15, 2024</h1>
                                            <p className="text-xs text-neutral-500">Manhattan, NY (Rivera Ink Studio)</p>
                                            <h5> Slots Booked: 4 of 10 Available</h5>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FaPen className='cursor-pointer bg-primary text-white p-1 rounded'></FaPen>
                                            <FaTrash></FaTrash>
                                        </div>
                                    </div>
                                </div>
                                <div className="border rounded-xl p-2 flex justify-between items-center">

                                    <div className="flex justify-between items-center gap-2">
                                        <div className="">
                                            <h1 className="text-xl font-semibold">Dec 10–15, 2024</h1>
                                            <p className="text-xs text-neutral-500">Manhattan, NY (Rivera Ink Studio)</p>
                                            <h5> Slots Booked: 4 of 10 Available</h5>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FaPen className='cursor-pointer bg-primary text-white p-1 rounded'></FaPen>
                                            <FaTrash></FaTrash>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='my-12'>
                        <UpcommingEvents />

                    </div>
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
                {/* modal for about you */}
                <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={false} >
                    <Form
                        onFinish={onFinish}
                        name='about you'>
                        <h1 className='text-2xl font-bold'>About Your Business</h1>
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

export default BusinessProfilePage;