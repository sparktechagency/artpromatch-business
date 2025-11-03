import DecisionMakerComp from '@/components/WithNavFooterComponents/DecisionMakerComp';
import { getBookingsWithReviewThatHaveReviewForClientHomePage } from '@/services/Booking';

const DashboardPage = async () => {
  const { data: bookings } =
    await getBookingsWithReviewThatHaveReviewForClientHomePage();

  return (
    <div className="container mx-auto p-6">
      <DecisionMakerComp bookings={bookings} />
    </div>
  );
};

export default DashboardPage;
