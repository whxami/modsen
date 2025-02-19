import { FC } from 'react';
import styles from './imageCard.module.scss';
import { truncatTitle } from '@utils/artsApi/truncatTitle.ts';
import Image from '@components/image/image.tsx';
import Bookmark from '@components/bookmark/bookmark.tsx';
import { Art } from '@constants/types/artsTypes.ts';
import { useAppNavigation } from '@utils/routeConfig/useNavigate.tsx';
import { AppRoutes } from '@utils/routeConfig/routeConfig.tsx';

interface ImageCardProps {
    art: Art;
}

const ImageCard: FC<ImageCardProps> = ({ art }) => {
    const truncatedTitle = truncatTitle(art.title);
    const { handleNavigate } = useAppNavigation();
    return (
        <div className={styles.cardContainer}>
            <div className={styles.imageWrapper}>
                <Image
                    style={{
                        width: '100%',
                        height: '100%',
                        cursor: 'pointer',
                        objectFit: 'cover',
                    }}
                    imageId={art.image_id}
                    onClick={() => {
                        handleNavigate(AppRoutes.ART_INFO_PAGE, art.id);
                    }}
                />
            </div>
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
