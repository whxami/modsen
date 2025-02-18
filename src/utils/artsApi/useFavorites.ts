import { useState } from 'react';

const loadFavorites = () => {
    const storedFavorites = sessionStorage.getItem('favorites');
    const parsedFavorites = storedFavorites ? JSON.parse(storedFavorites) : [];
    return Array.isArray(parsedFavorites) ? parsedFavorites : [];
};

const useFavorites = () => {
    const [favorites, setFavorites] = useState<string[]>(loadFavorites);

    const isFavorite = (imageId: string) => favorites.includes(imageId);

    const toggleFavorite = (imageId: string) => {
        let updatedFavorites: string[];

        if (isFavorite(imageId)) {
            updatedFavorites = favorites.filter((id) => id !== imageId);
        } else {
            updatedFavorites = [...favorites, imageId];
        }

        setFavorites(updatedFavorites);
        sessionStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };

    return { toggleFavorite, isFavorite };
};

export default useFavorites;
