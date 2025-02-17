export interface Art {
    id: number;
    title: string;
    date_display: string;
    place_of_origin: string;
    dimensions: string;
    is_public_domain: true;
    artist_title: string;
    image_id: string;
}

export interface Pagination {
    current_page: number;
    next_url: string;
    prev_url?: string | null;
}

export interface ArtApiResponse {
    data: Art[];
    pagination: Pagination;
}
