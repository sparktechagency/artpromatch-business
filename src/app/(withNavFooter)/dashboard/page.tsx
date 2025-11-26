import AllRequests from '@/components/WithNavFooterComponents/AllRequests';
import { businessGetAllRequests } from '@/services/Request';

const AllRequestsPage = async () => {
  const { data: requests, meta } = await businessGetAllRequests();

  return (
    <div className="container mx-auto p-6">
      <AllRequests requests={requests} meta={meta} />
    </div>
  );
};

export default AllRequestsPage;
