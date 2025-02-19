import { FC } from 'react';
import { ImagesListFromFavorites } from '@components/imagesList/imagesList.tsx';
import { useFavorites } from '@utils/artsApi/useFavorites.ts';
import styles from './favoritesPage.module.scss';

const FavoritesPage: FC = () => {
    const { getAllFavorites } = useFavorites();
    const favorites = getAllFavorites();
    return (
        <div className={styles.imagesListWrapper}>
            <ImagesListFromFavorites favorites={favorites} />
        </div>
    );
};

export default FavoritesPage;
