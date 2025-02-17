import { Art, ArtApiResponse } from '../../constants/types/artsTypes.ts';
import axiosInstance from '../../shared/API/API.ts';

export async function getArts(
    currentPage: number = 1,
    itemsPerPage: number = 3
): Promise<Art[]> {
    const response = await axiosInstance.get<ArtApiResponse>(
        'api/v1/artworks',
        {
            params: {
                fields: 'id,title,dimensions,artist_title,date_display,place_of_origin,is_public_domain,image_id',
                page: currentPage,
                limit: itemsPerPage,
            },
        }
    );

    return response.data.data;
}

export async function getImage(identifier: string) {
    return await axiosInstance.get<ArtApiResponse>(
        `https://www.artic.edu/iiif/2/${identifier}/full/843,/0/default.jpg`
    );
}
