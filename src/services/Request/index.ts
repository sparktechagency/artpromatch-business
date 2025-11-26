'use server';

import { getValidAccessTokenForServerActions } from '@/lib/getValidAccessToken';
// import { FieldValues } from '@/types';
import { revalidateTag } from 'next/cache';

// businessRequestArtist
export const businessRequestArtist = async (artistId: string): Promise<any> => {
  const accessToken = await getValidAccessTokenForServerActions();

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/requests/send`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ artistId }),
      }
    );

    revalidateTag('REQUESTS');

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

// businessGetAllRequests
export const businessGetAllRequests = async (): Promise<any> => {
  const accessToken = await getValidAccessTokenForServerActions();

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/requests`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },

      next: {
        tags: ['REQUESTS'],
      },
    });

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};
