'use server';

import { getValidAccessTokenForServerHandlerGet } from '@/lib/getValidAccessToken';

// getAllArtists
export const getAllArtists = async (
  page: string = '1',
  limit: string = '12',
  query: { [key: string]: string | string[] | undefined }
): Promise<any> => {
  const accessToken = await getValidAccessTokenForServerHandlerGet();

  const normalize = (v?: string | string[]) => (Array.isArray(v) ? v[0] : v);

  // Extract values safely
  const artistType = normalize(query.artistType);
  const tattooCategory = normalize(query.tattooCategory);
  const searchTerm = normalize(query.searchTerm);

  // Build query string
  const params = new URLSearchParams();
  params.set('page', page);
  params.set('limit', limit);

  // Apply filters
  if (artistType && artistType !== 'All') {
    params.set('artistType', artistType);
  }

  if (tattooCategory && tattooCategory !== 'All') {
    params.set('tattooCategory', tattooCategory);
  }

  if (searchTerm && searchTerm !== 'All') {
    params.set('searchTerm', searchTerm);
  }

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/artists?${params.toString()}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        next: {
          tags: ['ARTISTS'],
        },
      }
    );

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};
