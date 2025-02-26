import { AllImages } from '@/assets/images/AllImages';
import Image from 'next/image';
import React from 'react';
import { CiSearch } from "react-icons/ci";
import { GrGlobe } from "react-icons/gr";
import { HiOutlineChartBarSquare } from "react-icons/hi2";
const WhyUs = () => {
    return (
        <div className='container mx-auto px-2 md:px-0 mt-20'>
            <div className='flex flex-col justify-center items-center  '>
                <button className='text-center bg-[#f3f1f1] text-primary py-3 px-6 
                rounded-lg mb-5 md:mb-2'>Why Us?</button>
                <h1 className='text-center md:text-5xl font-bold mb-5 md:mb-0'>What We Offer for Your <br />  Business</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 md:my-20'>
                <div className='flex flex-col justify-center items-center text-center'>
                    <CiSearch className='bg-[#392d2d] h-10 w-10 rounded-xl flex justify-center items-center p-2 text-white' />
                    <h1 className='text-xl font-bold my-2'>Discover Artists</h1>
                    <p className='text-textSecondary'>Easily find and connect with talented tattoo artists and piercers to collaborate with your studio or events. </p>
                </div>
                <div className='flex flex-col justify-center items-center text-center'>
                    <GrGlobe src={AllImages.AllInOne2} width={500} height={500} alt='logo' className='bg-[#392d2d] h-10 w-10 rounded-xl flex justify-center items-center p-2 text-white' />
                    <h1 className='text-xl font-bold my-2'>Manage Guest Spots</h1>
                    <p className='text-textSecondary'>List and organize guest spots for visiting artists to enhance your studio’s offerings and attract clients.</p>
                </div>
                <d iv className='flex flex-col justify-center items-center text-center'>
                    <Image src={AllImages.AllInOne1} width={500} height={500} alt='logo' className='bg-[#392d2d] h-10 w-10 rounded-xl flex justify-center items-center p-2'></Image>
                    <h1 className='text-xl font-bold my-2'>Event Promotion</h1>
                    <p className='text-textSecondary'>Plan, manage, and promote events to showcase your business and drive more engagement.</p>
                </d>
                <div className='flex flex-col justify-center items-center text-center'>
                    <HiOutlineChartBarSquare className='bg-[#392d2d] h-10 w-10 rounded-xl flex justify-center items-center p-2 text-white' />
                    <h1 className='text-xl font-bold my-2 '>Track Bookings and Revenue</h1>
                    <p className='text-textSecondary'>Keep track of all appointments and earnings with a powerful dashboard designed for your business needs.</p>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;