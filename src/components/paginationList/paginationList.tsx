import { FC, useState } from 'react';

import styles from './paginationList.module.scss';
import ImageCard from '../imageCard/imageCard.tsx';

import { Art } from '../../constants/types/artsTypes.ts';
import { getArts } from '../../utils/artsApi/artsApi.ts';
import { useFetching } from '../../utils/artsApi/useFetching.ts';

const itemsPerPage = 3;
const totalPages = 4;

const PaginationList: FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const { data: artworks, loading } = useFetching<Art[]>(
        getArts,
        currentPage,
        itemsPerPage
    );

    return (
        <div>
            <div className={styles.listContainer}>
                {artworks &&
                    !loading &&
                    artworks.map((art: Art) => (
                        <ImageCard
                            key={art.id}
                            isPublic={art.is_public_domain}
                            artist_title={art.artist_title}
                            imageId={art.image_id}
                            title={art.title}
                            isActive={false}
                        />
                    ))}
            </div>

            <div className={styles.pagesWrapper}>
                {Array.from(
                    { length: totalPages },
                    (_, index) => index + 1
                ).map((page) => (
                    <span
                        key={page}
                        className={`${styles.page} ${currentPage === page ? styles.activePage : ''}`}
                        onClick={() => {
                            if (currentPage !== page) {
                                setCurrentPage(page);
                            }
                        }}
                        style={{ cursor: 'pointer' }}
                    >
                        {page}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default PaginationList;
