import { FC, useState, useMemo } from 'react';
import { ImagesListFromFavorites } from '@components/imagesList/imagesList.tsx';
import { useFavorites } from '@utils/artsApi/useFavorites.ts';
import styles from './favoritesPage.module.scss';
import Select from '@components/select/select.tsx';
import SortOrder from '@components/select/selectEnum.ts';

const FavoritesPage: FC = () => {
    const { getAllFavorites } = useFavorites();
    const favorites = getAllFavorites();
    const [sortOrder, setSortOrder] = useState<SortOrder>(SortOrder.NONE);

    const sortedFavorites = useMemo(() => {
        if (sortOrder === SortOrder.NONE) {
            return favorites;
        }

        return [...favorites].sort((a, b) => {
            if (sortOrder === SortOrder.ASC) {
                return a.title.localeCompare(b.title);
            }
            return b.title.localeCompare(a.title);
        });
    }, [favorites, sortOrder]);

    return (
        <div className={styles.imagesListWrapper}>
            <div className={styles.selectWrapper}>
                <Select onSelect={setSortOrder} />
            </div>
            <ImagesListFromFavorites favorites={sortedFavorites} />
        </div>
    );
};

export default FavoritesPage;
