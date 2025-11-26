'use client';

// import ArtistHomePage from '@/components/WithNavFooterComponents/HomeComponents/AfterLogin/ArtistHomePage';
import BeforeLogin from '@/components/WithNavFooterComponents/HomeComponents/BeforeLogin/BeforeLogin';
// import { useUser } from '@/context/UserContext';
import { IBooking } from '@/types';

const DecisionMakerComp = ({ bookings = [] }: { bookings: IBooking[] }) => {
  // const { user } = useUser();

  return (
    <div className="container mx-auto p-6">
      {/* {user ? <ArtistHomePage /> : <BeforeLogin bookings={bookings} />} */}

      <BeforeLogin bookings={bookings} />
    </div>
  );
};

export default DecisionMakerComp;
