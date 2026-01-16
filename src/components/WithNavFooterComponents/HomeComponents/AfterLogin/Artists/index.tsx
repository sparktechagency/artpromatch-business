'use client';

import { Carousel, Modal, Select } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { FaStar } from 'react-icons/fa6';
import { SiGoogletasks } from 'react-icons/si';
import ServiceDetailsModal from './ServiceDetailsModal';
import { IArtist } from '@/types';
import { getCleanImageUrl } from '@/lib/getCleanImageUrl';
import { useUser } from '@/context/UserContext';
import { useRouter, useSearchParams } from 'next/navigation';
import { formatCount } from '@/lib/formatCount';
import { businessRequestArtist } from '@/services/Request';
import { toast } from 'sonner';
import Mapview from './MapView';

type ViewMode = 'list' | 'map';
const ALL = 'All';
const ARTIST_TYPES = ['Tattoo Artist', 'Piercer', 'Both'];

const Artists = ({
  data,
}: {
  data: {
    artists: IArtist[];
    availableExpertise: string[];
  };
}) => {
  const { user } = useUser();
  const router = useRouter();
  const searchParams = useSearchParams();

  const artists = data?.artists ?? [];
  const availableExpertise = data?.availableExpertise
    ? [ALL, ...data.availableExpertise]
    : [ALL];

  // UI state
  const [artistType, setArtistType] = useState<string[]>([]);
  const [tattooCategoriesSelected, setTattooCategoriesSelected] = useState<
    string[]
  >([]);

  const [view, setView] = useState<ViewMode>('list');
  const [selectedArtist, setSelectedArtist] = useState<IArtist | null>(null);
  const [isShowServiceModalOpen, setIsShowServiceModalOpen] =
    useState<boolean>(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Sync filters from URL on first load (supports favorites default + explicit All)
  useEffect(() => {
    const urlArtistType = searchParams.get('artistType');
    const urlTattooCategory = searchParams.get('tattooCategory');

    // artistType: query > preferred > All
    setArtistType(urlArtistType ? [urlArtistType] : []);

    // tattooCategory:
    // - missing => favorites
    // - 'All' => no filter
    // - list => parse list
    if (urlTattooCategory == null) {
      setTattooCategoriesSelected([]);
    } else if (urlTattooCategory === ALL) {
      setTattooCategoriesSelected([]);
    } else {
      setTattooCategoriesSelected(
        urlTattooCategory
          .split(',')
          .map(s => s.trim())
          .filter(Boolean)
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Apply both filters consistently
  const filteredArtists = useMemo(() => {
    return artists.filter(artist => {
      const byType =
        artistType.length === 0
          ? true
          : artistType.includes(artist?.type || '');

      const byCategory =
        tattooCategoriesSelected.length === 0
          ? true
          : (artist?.expertise || []).some(exp =>
              tattooCategoriesSelected.includes(exp)
            );

      return byType && byCategory;
    });
  }, [artists, artistType, tattooCategoriesSelected]);

  const openShowServiceModal = (id: string) => {
    const artist = artists.find(artist => artist._id === id) || null;
    setSelectedArtist(artist);
    setIsShowServiceModalOpen(true);
  };

  // helper function (safe URL update + explicit All kept)
  const updateQuery = (key: string, values: string[]) => {
    const params = new URLSearchParams(searchParams.toString());

    if (values.length === 0) {
      params.delete(key);
    } else {
      params.set(key, values.join(','));
    }

    const next = `?${params.toString()}`;
    const current = `?${searchParams.toString()}`;
    if (next === current) return;

    queueMicrotask(() => {
      router.push(next, { scroll: false });
    });
  };

  // handleRequestArtist
  const handleRequestArtist = async () => {
    if (!selectedArtist) return;

    const res = await businessRequestArtist(selectedArtist?._id);

    if (res?.success) {
      toast.success(res?.message);
    } else {
      toast.error(res?.message || 'Failed to request artist!');
    }
  };

  return (
    <div className="bg-slate-50 py-10">
      <div className="container mx-auto px-4">
        {/* Filters */}
        <div className="bg-white rounded-xl p-4 shadow-sm border flex flex-col md:flex-row gap-4 justify-between items-center">
          {mounted ? (
            <Select
              mode="multiple"
              allowClear
              value={artistType}
              placeholder="Artist type"
              style={{ minWidth: 180 }}
              popupMatchSelectWidth={false}
              listHeight={200}
              onChange={(values: string[]) => {
                setArtistType(values);
                updateQuery('artistType', values);
              }}
              options={ARTIST_TYPES.map(t => ({
                label: t,
                value: t,
              }))}
              className="w-fit"
            />
          ) : (
            <div
              className="w-fit rounded-md bg-slate-100"
              style={{ minWidth: 180, height: 32 }}
            />
          )}

          <div className="flex flex-wrap gap-2">
            {availableExpertise.map(cat => (
              <div
                key={cat}
                onClick={() => {
                  if (cat === ALL) {
                    setTattooCategoriesSelected([]);
                    updateQuery('tattooCategory', []);
                    return;
                  }

                  setTattooCategoriesSelected(prev => {
                    const updated = prev.includes(cat)
                      ? prev.filter(c => c !== cat)
                      : [...prev, cat];

                    updateQuery('tattooCategory', updated);
                    return updated;
                  });
                }}
                className={`px-4 py-2 rounded-full text-sm transition cursor-pointer ${
                  tattooCategoriesSelected.includes(cat)
                    ? 'bg-primary text-white shadow'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </div>
            ))}
          </div>
        </div>

        {/* View toggle (button text unchanged) */}
        <div className="flex justify-between items-center my-8">
          <p className="text-sm text-slate-600">
            {tattooCategoriesSelected.length > 0
              ? tattooCategoriesSelected.join(', ')
              : 'All'}{' '}
            ({filteredArtists.length})
          </p>

          <div className="flex bg-slate-100 p-1 rounded-xl">
            {(['list', 'map'] as ViewMode[]).map(v => (
              <button
                key={v}
                onClick={() => setView(v)}
                className={`px-5 py-2 rounded-lg text-sm transition cursor-pointer ${
                  view === v ? 'bg-white shadow text-primary' : 'text-slate-500'
                }`}
              >
                {v === 'list' ? 'List View' : 'Map View'}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        {view === 'list' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredArtists.map(artist => {
              const km = `${((artist?.distance ?? 0) / 1000).toFixed(2)} km`;
              const rating =
                artist?.avgRating && artist.avgRating > 0
                  ? artist.avgRating.toFixed(1)
                  : null;

              return (
                <div
                  key={artist._id}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition border overflow-hidden flex flex-col"
                >
                  {/* <Image
                    onClick={() => openModal(artist._id)}
                    src={getCleanImageUrl(artist?.auth?.image)}
                    alt={artist?.auth?.fullName}
                    height={300}
                    width={500}
                    className="cursor-pointer w-full h-60 object-cover rounded-lg"
                  /> */}

                  {/* full image visible */}
                  {/* <div
                    onClick={() => openModal(artist._id)}
                    className="w-full h-56 bg-slate-100 flex items-center justify-center cursor-pointer"
                  >
                    <Image
                      src={getCleanImageUrl(artist?.auth?.image)}
                      alt={artist?.auth?.fullName || 'artist'}
                      width={400}
                      height={400}
                      quality={90}
                      className="w-full h-full object-contain"
                    />
                  </div> */}

                  <div
                    onClick={() => openShowServiceModal(artist._id)}
                    className="cursor-pointer"
                  >
                    <Carousel autoplay>
                      {(artist?.flashImages?.length
                        ? artist.flashImages
                        : [undefined]
                      ).map((img, i) => (
                        <div key={`${artist._id}-flash-${i}`}>
                          <Image
                            src={getCleanImageUrl(img)}
                            alt="Service thumbnail"
                            height={300}
                            width={500}
                            className="w-full h-60 object-cover rounded-lg"
                          />
                        </div>
                      ))}
                    </Carousel>
                  </div>

                  <div className="p-4 flex flex-col h-full">
                    <h3 className="text-lg font-semibold">
                      {artist?.type || ''}{' '}
                      {user?.id === artist?.auth?._id ? '(me)' : ''}
                    </h3>

                    <Link
                      href={`/artist/${artist?._id}`}
                      className="flex items-center gap-2 mt-2"
                    >
                      <Image
                        src={getCleanImageUrl(artist?.auth?.image)}
                        alt={artist?.auth?.fullName || 'artist'}
                        width={40}
                        height={40}
                        className="rounded-full h-10 w-10 object-cover"
                      />
                      <div className="flex flex-col items-start justify-center gap-1">
                        <span className="text-sm font-medium text-primary">
                          {artist?.auth?.fullName}
                        </span>
                        <span className="truncate text-xs text-slate-500">
                          {artist?.stringLocation}
                        </span>
                      </div>
                    </Link>

                    <div className="flex justify-between items-center mt-4 text-sm text-slate-600">
                      <span>{km}</span>

                      {rating && (
                        <span className="flex items-center gap-1 text-amber-600">
                          <FaStar className="text-xs" />
                          {rating} ({artist?.totalReviewCount ?? 0})
                        </span>
                      )}

                      <span className="font-semibold text-primary">
                        ${artist?.hourlyRate ?? 0}/hr
                      </span>
                    </div>

                    {artist?.expertise?.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {artist.expertise.slice(0, 3).map((exp, i) => (
                          <span
                            key={`${exp}-${i}`}
                            className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                          >
                            {exp}
                          </span>
                        ))}

                        {artist.expertise.length > 3 && (
                          <span className="px-3 py-1 text-xs rounded-full bg-slate-100 text-slate-500">
                            +{artist.expertise.length - 3}
                          </span>
                        )}
                      </div>
                    )}

                    <div onClick={handleRequestArtist} className="mt-auto">
                      <div className="mt-5 py-2 rounded-xl bg-primary text-white text-center font-semibold hover:bg-primary/90 transition cursor-pointer">
                        Request to Join
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-xs text-slate-500 mt-4">
                      <SiGoogletasks />
                      {formatCount(artist?.totalCompletedService)} Done
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <Mapview artists={filteredArtists} />
        )}

        {/* Modal */}
        <Modal
          open={isShowServiceModalOpen}
          footer={null}
          onCancel={() => setIsShowServiceModalOpen(false)}
          centered
          width={800}
          destroyOnHidden
        >
          {selectedArtist && (
            <ServiceDetailsModal
              selectedArtist={selectedArtist}
              handleRequestArtist={handleRequestArtist}
              // onClose={() => setIsShowServiceModalOpen(false)}
            />
          )}
        </Modal>
      </div>
    </div>
  );
};

export default Artists;
