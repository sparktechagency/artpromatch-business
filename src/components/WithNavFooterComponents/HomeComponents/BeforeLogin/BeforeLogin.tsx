import WhyUs from './WhyUs';
import SteadyHands from './SteadyHands';
import HowItsWorks from './HowItsWorks';
import Testimonials from './Testimonials';
import HeroSection from './HeroSection';
import { IBooking } from '@/types';

const BeforeLogin = ({ bookings = [] }: { bookings: IBooking[] }) => {
  return (
    <div className="container mx-auto px-2 md:px-0">
      <HeroSection />
      <WhyUs />
      <HowItsWorks />
      {bookings.length > 0 && <Testimonials bookings={bookings} />}
      <SteadyHands />
    </div>
  );
};

export default BeforeLogin;
