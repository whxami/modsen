export interface Art {
    id: number;
    title: string;
    artist_title: string;
    date_start?: number;
    medium: string;
    dimensions: string;
    image_id: string;
}

export interface Pagination {
    total: number;
    total_pages: number;
    current_page: number;
}

export interface ArtApiResponse {
    data: Art[];
    pagination: Pagination;
}
