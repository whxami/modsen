import { Art } from '../../constants/types/artsTypes.ts';

const loadFavorites = (): { [key: number]: Art } => {
    const storedFavorites = sessionStorage.getItem('favorites');
    const parsedFavorites = storedFavorites ? JSON.parse(storedFavorites) : {};
    return typeof parsedFavorites === 'object' ? parsedFavorites : {};
};

export const useFavorites = () => {
    const isFavorite = (imageId: number): boolean => imageId in loadFavorites();

    const toggleFavorite = (art: Art) => {
        const allFavorites = loadFavorites();
        const imageId = art.id;
        let updatedFavorites: { [key: number]: Art };

        if (isFavorite(imageId)) {
            updatedFavorites = { ...allFavorites };
            delete updatedFavorites[imageId];
            sessionStorage.setItem(
                'favorites',
                JSON.stringify(updatedFavorites)
            );
        } else {
            updatedFavorites = { ...allFavorites, [imageId]: art };
        }

        sessionStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };

    const getAllFavorites = (): Art[] => {
        return Object.values(loadFavorites());
    };
    return { toggleFavorite, getAllFavorites, isFavorite };
};
