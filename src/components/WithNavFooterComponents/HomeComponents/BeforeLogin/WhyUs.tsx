import Image from 'next/image';
import { CiSearch } from 'react-icons/ci';
import { HiOutlineChartBarSquare } from 'react-icons/hi2';
import { AllImages } from '@/assets/images/AllImages';

const WhyUs = () => {
  const items = [
    {
      icon: <CiSearch className="text-white h-8 w-8" />,
      title: 'Discover Artists',
      description:
        'Easily find and connect with talented tattoo artists and piercers to collaborate with your studio or events.',
    },
    {
      image: AllImages.AllInOne2,
      title: 'Manage Guest Spots',
      description:
        "List and organize guest spots for visiting artists to enhance your studio's offerings and attract clients.",
    },
    {
      image: AllImages.AllInOne1,
      title: 'Event Promotion',
      description:
        'Plan, manage, and promote events to showcase your business and drive more engagement.',
    },
    {
      icon: <HiOutlineChartBarSquare className="text-white h-8 w-8" />,
      title: 'Track Bookings and Revenue',
      description:
        'Keep track of all appointments and earnings with a powerful dashboard designed for your business needs.',
    },
  ];

  return (
    <section className="container mx-auto px-4 md:px-0 mt-20">
      {/* Header */}
      <div className="flex flex-col items-center text-center">
        <div className="bg-[#f3f1f1] text-black py-2 px-5 rounded-lg font-medium">
          Why Us?
        </div>
        <h1 className="text-3xl md:text-5xl font-bold py-8 md:py-10">
          What We Offer for Your Business
        </h1>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:my-20">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="bg-[#392d2d] h-12 w-12 rounded-xl flex items-center justify-center mb-4">
              {item.icon ? (
                item.icon
              ) : (
                <Image
                  src={item.image}
                  alt={item.title}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              )}
            </div>
            <h2 className="text-lg font-bold mb-2">{item.title}</h2>
            <p className="text-textSecondary text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyUs;
