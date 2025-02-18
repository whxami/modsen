import { FC } from 'react';
import bookmark from '@assets/orangebookmark.svg';
import bookmarkActive from '@assets/bookmarkActive.svg';
import styles from './imageCard.module.scss';
import { truncatTitle } from '../../utils/artsApi/truncatTitle.ts';
import Image from '../image/image.tsx';
import useFavorites from '../../utils/artsApi/useFavorites.ts';

interface ImageCardProps {
    imageId: string;
    title: string;
    isPublic: boolean;
    artist_title: string;
}

const ImageCard: FC<ImageCardProps> = ({
    imageId,
    artist_title,
    title,
    isPublic,
}) => {
    const truncatedTitle = truncatTitle(title);
    const { toggleFavorite, isFavorite } = useFavorites();
    return (
        <div className={styles.cardContainer}>
            <Image
                style={{ width: '100%', height: '100%' }}
                imageId={imageId}
            />

            <div className={styles.descriptionContainer}>
                <div className={styles.textContainer}>
                    <p title={title} className={styles.blackText}>
                        {truncatedTitle}
                    </p>
                    <p className={styles.goldText}>{artist_title}</p>
                    <strong className={styles.blackText}>
                        {isPublic ? 'Public' : 'Private'}
                    </strong>
                </div>
                <div
                    className={styles.bookmarkContainer}
                    onClick={() => toggleFavorite(imageId)}
                >
                    <img
                        src={isFavorite(imageId) ? bookmarkActive : bookmark}
                        alt={isFavorite(imageId) ? 'bookmarked' : 'bookmark'}
                        height={24}
                        width={24}
                    />
                </div>
            </div>
        </div>
    );
};

export default ImageCard;
