import Image from 'next/image';
import { AllImages } from '@/assets/images/AllImages';

const steps = [
  {
    title: 'Sign Up and Verify',
    description:
      'Create your business account and verify your studio to gain visibility on the platform.',
  },
  {
    title: 'Add Studio Details',
    description:
      'Showcase your studio by adding your location, services, and any available guest spots.',
  },
  {
    title: 'Discover Artists and Events',
    description:
      'Browse and connect with talented artists for guest spots or collaborate on upcoming events.',
  },
  {
    title: 'Manage Bookings & Earnings',
    description:
      'Track appointments, client interactions, and revenue from one powerful dashboard.',
  },
];

const HowItsWorks = () => {
  return (
    <section className="relative bg-primary text-white py-16 px-6 md:px-16 lg:px-14 rounded-xl overflow-hidden">
      {/* Background image */}
      <Image
        src={AllImages.hi}
        alt="How it works background"
        fill
        className="hidden md:block object-cover opacity-10"
        priority
      />

      {/* Text Content */}
      <div className="relative z-10 text-center md:text-left max-w-3xl mx-auto md:mx-0 mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">How it works</h2>
        <p className="text-gray-300 mt-3">
          Follow these simple steps to set up your profile, manage events, and{' '}
          <br />
          connect with artists and clients.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md p-6 rounded-xl text-center md:text-left hover:bg-white/20 transition"
          >
            <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
              <div className="bg-white text-primary rounded-full h-7 w-7 flex items-center justify-center font-bold text-sm">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold">{step.title}</h3>
            </div>
            <p className="text-gray-300 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItsWorks;
