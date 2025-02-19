import { FC, useEffect, useState } from 'react';
import { useFetching } from '@utils/artsApi/fetchingHooks.ts';
import styles from './paginationList.module.scss';
import ImageCard from '@components/imageCard/imageCard.tsx';
import { Art } from '@constants/types/artsTypes.ts';
import { MoonLoader } from 'react-spinners';
import { usePagination } from '@utils/artsApi/usePagination.ts';

const itemsPerPage = 3;
const totalPages = 4;
const pagesArray = [1, 2, 3, 4];

const PaginationList: FC = () => {
    const { currentPage, goToPreviousPage, goToNextPage, goToPage } =
        usePagination(totalPages);
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
                {pagesArray.map((page) => (
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
