import { AllImages } from "@/assets/images/AllImages";
import { Select } from "antd";
import Image from "next/image";
import Link from "next/link";

const BusinessProfileHeader = () => {
    return (
        <div>
            <div className='flex flex-col lg:flex-row justify-between items-center gap-5 lg:gap-0 my-5'>
                <div className='flex flex-col lg:flex-row justify-start items-center gap-2'>
                    <Image src={AllImages.business} alt='logo' height={160} width={160} className='h-40 w-40 md:h-32 md:w-32 xl:h-52 xl:w-52 top-56 md:top-48 lg:top-56 xl:top-64   rounded-full border-2 border-white lg:absolute  absolute'></Image>
                    <div className='mt-24 md:mt-16 lg:mt-0 lg:ml-36 xl:ml-56'>
                        <h1 className='text-xl font-bold'>Rivera Ink Studio</h1>
                        <h4 className='text-sm text-neutral-500'>Brooklyn, NY</h4>
                    </div>

                </div>
                <div className='flex flex-col lg:flex-row justify-center items-center gap-2'>
                    <Select defaultValue="Tatto-Artist" style={{ width: 120 }} className="text-black">
                        <Select.Option value="Tatto-Artist">Tatto Artist</Select.Option>
                        <Select.Option value="tom">Tom</Select.Option>
                        <Select.Option value="tom">tom</Select.Option>
                    </Select>
                    <Link href="/discover">
                    <button className='px-4 py-2 rounded-xl border flex justify-center items-center gap-2 bg-black text-white'>Add Resident Artist</button>
                    </Link>
                    <Link href="/guest-spots">
                        <button className='px-4 py-2 rounded-xl  flex justify-center items-center gap-2 border bg-primary text-white'>Add Guest Spot</button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default BusinessProfileHeader;