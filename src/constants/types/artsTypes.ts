export interface Art {
    id: number;
    title: string;
    date_display: string;
    place_of_origin: string;
    dimensions: string;
    is_public_domain: boolean;
    artist_title: string;
    image_id: string;
}

export interface Pagination {
    current_page: number;
    next_url: string | null;
    prev_url?: string | null;
}

export interface ArtApiResponse {
    data: Art[];
    pagination: Pagination;
}

export interface singleArtApiResponse {
    data: Art;
}
