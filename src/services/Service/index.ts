'use server';

import { getValidAccessTokenForServerActions } from '@/lib/getValidAccessToken';
// import { FieldValues } from '@/types';
// import { revalidateTag } from 'next/cache';

// getArtistProfileByHisId
export const getArtistProfileByHisId = async (id: string): Promise<any> => {
  const accessToken = await getValidAccessTokenForServerActions();

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/artists/profile/${id}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        cache: 'no-store',
      }
    );

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

// getLocationName
export const getLocationName = async (location: number[]) => {
  const [lat, lon] = location;
  const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&accept-language=en`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return data.display_name || 'Unknown location';

    // const address = data.address || {};
    // // priority: city > town > village
    // const city =
    //   address.city || address.town || address.village || address.county;
    // const country = address.country;

    // if (city && country) {
    //   return `${city}, ${country}`;
    // } else if (country) {
    //   return country;
    // } else {
    //   return data.display_name || 'Unknown location';
    // }
  } catch (error) {
    console.error('Error fetching location:', error);
    return 'Unable to get location';
  }
};
