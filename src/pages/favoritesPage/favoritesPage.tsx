import { FC } from 'react';
import { ImagesListFromFavorites } from '../../components/imagesList/imagesList.tsx';
import { useFavorites } from '../../utils/artsApi/useFavorites.ts';

const FavoritesPage: FC = () => {
    const { getAllFavorites } = useFavorites();
    const favorites = getAllFavorites();
    return (
        <div>
            <ImagesListFromFavorites favorites={favorites} />
        </div>
    );
};

export default FavoritesPage;
