import Image from 'next/image';
import Link from 'next/link';
import { Typography } from 'antd';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { AllImages } from '@/assets/images/AllImages';

const HeroSection = () => {
  return (
    <section>
      <div className="relative">
        <Image
          src={AllImages.Background}
          width={500}
          height={500}
          alt="logo"
          className="w-full h-96 md:h-auto "
        />
      </div>
      <div className="flex flex-col justify-center items-center text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Image
          src={AllImages.logo}
          width={80}
          height={80}
          alt="logo"
          className="mt-10 md:mt-0"
        />
        {/* <h2 className="text-center lg:text-5xl font-bold mt-6 mb-2 ">
          Your studio. Your team. Your growth.
          <br /> Steady Hands
        </h2> */}

        <h1>
          <div className="text-center md:text-5xl font-bold mt-6 mb-2">
            Your studio. Your team. Your growth.
            {/* <br /> Steady Hands */}
          </div>
        </h1>

        {/* <Typography.Text className="md:text-xl text-center text-primary mt-3 md:mb-10 ">
          Connect with top artists, manage events, and grow your business
          effortlessly.
        </Typography.Text> */}

        <div className="text-base md:text-lg text-center text-primary mt-3 md:mb-10 ">
          Connect with top artists, manage events, and grow your business
          effortlessly.
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center md:gap-5 mb-20">
          <Link
            href="/sign-in"
            className="bg-black py-3 px-6 rounded-lg mt-5 flex items-center gap-2 text-white"
          >
            Get Started
            <MdKeyboardArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
