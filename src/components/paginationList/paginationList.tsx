import { FC, useEffect, useState } from 'react';
import { useFetching } from '../../utils/artsApi/fetchingHooks.ts';
import styles from './paginationList.module.scss';
import ImageCard from '@components/imageCard/imageCard.tsx';
import { Art } from '@constants/types/artsTypes.ts';
import { MoonLoader } from 'react-spinners';

const itemsPerPage = 3;
const totalPages = 4;

const PaginationList: FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [artworks, setArtworks] = useState<Art[] | null>(null);
    const [loading, setLoading] = useState(true);
    const { data } = useFetching(currentPage, itemsPerPage);

    useEffect(() => {
        setLoading(true);
        setArtworks(null);
    }, [currentPage]);

    useEffect(() => {
        if (data) {
            setArtworks(data);
            setLoading(false);
        }
    }, [data]);

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const goToPage = (page: number) => {
        if (page !== currentPage && page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className={styles.listWrapper}>
            <div className={styles.listContainer}>
                {loading ? (
                    <div className={styles.loader}>
                        <MoonLoader />
                    </div>
                ) : (
                    artworks &&
                    artworks.map((art: Art) => (
                        <ImageCard key={art.id} art={art} />
                    ))
                )}
            </div>

            <div className={styles.pagesWrapper}>
                {currentPage > 1 && (
                    <span className={styles.page} onClick={goToPreviousPage}>
                        {'<'}
                    </span>
                )}
                {Array.from(
                    { length: totalPages },
                    (_, index) => index + 1
                ).map((page) => (
                    <span
                        key={page}
                        className={`${styles.page} ${currentPage === page ? styles.activePage : ''}`}
                        onClick={() => goToPage(page)}
                    >
                        {page}
                    </span>
                ))}
                <span
                    className={styles.page}
                    style={{
                        visibility:
                            currentPage < totalPages ? 'visible' : 'hidden',
                    }}
                    onClick={goToNextPage}
                >
                    {'>'}
                </span>
            </div>
        </div>
    );
};

export default PaginationList;
