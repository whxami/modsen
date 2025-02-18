import {
    Art,
    ArtApiResponse,
    singleArtApiResponse,
} from '../../constants/types/artsTypes.ts';
import axiosInstance from '../../shared/API/API.ts';

const FIELDS =
    'id,title,dimensions,artist_title,date_display,place_of_origin,is_public_domain,image_id';

export async function getArts(
    currentPage: number = 1,
    itemsPerPage: number = 3
): Promise<Art[]> {
    const response = await axiosInstance.get<ArtApiResponse>(
        'api/v1/artworks',
        {
            params: {
                fields: FIELDS,
                page: currentPage,
                limit: itemsPerPage,
            },
        }
    );

    return response.data.data;
}

export async function fetchArt(id: string): Promise<Art> {
    const response = await axiosInstance.get<singleArtApiResponse>(
        `api/v1/artworks/${id}`,
        {
            params: {
                fields: FIELDS,
            },
        }
    );
    return response.data.data;
}
