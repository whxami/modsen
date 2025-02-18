import { FC, useState } from 'react';
import bookmarkActive from '@assets/bookmarkActive.svg';
import bookmark from '@assets/bookmark.svg';
import styles from './bookmark.module.scss';
import { Art } from '../../constants/types/artsTypes.ts';
import { useFavorites } from '../../utils/artsApi/useFavorites.ts';

interface BookmarkProps {
    art: Art;
}

const Bookmark: FC<BookmarkProps> = ({ art }) => {
    const { toggleFavorite, isFavorite } = useFavorites();
    const [favorite, setFavorite] = useState(isFavorite(art.id));

    const handleFavorite = (art: Art) => {
        toggleFavorite(art);
        setFavorite((prev) => !prev);
    };

    return (
        <div
            className={`${styles.bookmarkContainer} ${favorite ? styles.activeBookmark : ''}`}
            onClick={() => handleFavorite(art)}
        >
            <img
                src={favorite ? bookmarkActive : bookmark}
                alt={favorite ? 'bookmarked' : 'bookmark'}
                height={24}
                width={24}
            />
        </div>
    );
};

export default Bookmark;
