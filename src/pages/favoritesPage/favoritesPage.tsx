import { FC, useState, useMemo } from 'react';
import { ImagesListFromFavorites } from '@components/imagesList/imagesList.tsx';
import { useFavorites } from '@utils/artsApi/useFavorites.ts';
import styles from './favoritesPage.module.scss';
import Select from '@components/select/select.tsx';

const FavoritesPage: FC = () => {
    const { getAllFavorites } = useFavorites();
    const favorites = getAllFavorites();
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | 'none'>('none');

    const sortedFavorites = useMemo(() => {
        if (sortOrder === 'none') {
            return favorites;
        }

        return [...favorites].sort((a, b) => {
            if (sortOrder === 'asc') {
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
