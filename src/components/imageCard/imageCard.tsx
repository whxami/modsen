import { FC } from 'react';
import styles from './imageCard.module.scss';
import { truncatTitle } from '../../utils/artsApi/truncatTitle.ts';
import Image from '../image/image.tsx';
import Bookmark from '../bookmark/bookmark.tsx';
import { Art } from '../../constants/types/artsTypes.ts';

interface ImageCardProps {
    art: Art;
}

const ImageCard: FC<ImageCardProps> = ({ art }) => {
    const truncatedTitle = truncatTitle(art.title);
    return (
        <div className={styles.cardContainer}>
            <Image
                style={{ width: '100%', height: '100%' }}
                imageId={art.image_id}
            />

            <div className={styles.descriptionContainer}>
                <div className={styles.textContainer}>
                    <p title={art.title} className={styles.blackText}>
                        {truncatedTitle}
                    </p>
                    <p className={styles.goldText}>{art.artist_title}</p>
                    <strong className={styles.blackText}>
                        {art.is_public_domain ? 'Public' : 'Private'}
                    </strong>
                </div>
                <Bookmark art={art} />
            </div>
        </div>
    );
};

export default ImageCard;
