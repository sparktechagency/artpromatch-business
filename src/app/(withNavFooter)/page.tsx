import DecisionMakerComp from '@/components/WithNavFooterComponents/DecisionMakerComp';
import { getBookingsWithReviewThatHaveReviewForClientHomePage } from '@/services/Booking';

const Homepage = async () => {
  const { data: bookings } =
    await getBookingsWithReviewThatHaveReviewForClientHomePage();

  return (
    <div>
      <DecisionMakerComp bookings={bookings} />
    </div>
  );
};

export default Homepage;
