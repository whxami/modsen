import { FC, useState } from 'react';
import { useFetching } from '../../utils/artsApi/useFetching.ts';
import styles from './paginationList.module.scss';
import ImageCard from '../imageCard/imageCard.tsx';
import { Art } from '../../constants/types/artsTypes.ts';

const itemsPerPage = 3;
const totalPages = 4;

const PaginationList: FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const { data: artworks, isLoading } = useFetching(
        currentPage,
        itemsPerPage
    );

    return (
        <div>
            <div className={styles.listContainer}>
                {artworks &&
                    !isLoading &&
                    artworks.map((art: Art) => (
                        <ImageCard key={art.id} art={art} />
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
