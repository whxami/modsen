import { FC } from 'react';
import bookmark from '@assets/orangebookmark.svg';
import bookmarkActive from '@assets/bookmarkActive.svg';
import styles from './imageCard.module.scss';
import { truncatTitle } from '../../utils/artsApi/truncatTitle.ts';
import Image from '../image/image.tsx';

interface imageCardProps {
    imageId: string;
    title: string;
    isActive: boolean;
    isPublic: boolean;
    artist_title: string;
}

const ImageCard: FC<imageCardProps> = ({
    imageId,
    artist_title,
    title,
    isPublic,
    isActive,
}) => {
    const truncatedTitle = truncatTitle(title);
    return (
        <div className={styles.cardContainer}>
            <Image
                style={{
                    width: '100%',
                    height: '100%',
                }}
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
                <div className={styles.bookmarkContainer}>
                    {isActive ? (
                        <img
                            src={bookmarkActive}
                            alt={'bookmarkActive'}
                            height={24}
                            width={24}
                        />
                    ) : (
                        <img
                            src={bookmark}
                            alt={'bookmark'}
                            height={24}
                            width={24}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default ImageCard;
