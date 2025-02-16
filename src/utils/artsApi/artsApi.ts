import axiosInstance from '@shared/API/API.ts';
import { ArtApiResponse } from '@constants/types/artsTypes.ts';

export async function getPosts(currentPage: number, itemsPerPage: number) {
    return await axiosInstance.get<ArtApiResponse>('/artworks', {
        params: {
            page: currentPage,
            limit: itemsPerPage,
        },
    });
}
