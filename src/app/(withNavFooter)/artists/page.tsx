import Pagination from '@/components/Shared/Pagination';
import Artists from '@/components/WithNavFooterComponents/HomeComponents/AfterLogin/Artists';
import ArtistAfterLoginHeader from '@/components/WithNavFooterComponents/HomeComponents/AfterLogin/Artists/ArtistAfterLoginHeader';
import { getAllArtists } from '@/services/Artist';

const DiscoverPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) => {
  const query = await searchParams;

  const {
    data: artists,
    meta,
    // success,
    // message,
  } = await getAllArtists(query.page, '20', query);

  // if (!success) {
  //   return (
  //     <div className="container mx-auto md:my-8">
  //       <div className="min-h-screen flex justify-center items-center text-center">{message}</div>
  //     </div>
  //   );
  // }

  return (
    <div>
      <ArtistAfterLoginHeader />
      <Artists artists={artists} />
      <Pagination meta={meta} />
    </div>
  );
};

export default DiscoverPage;
