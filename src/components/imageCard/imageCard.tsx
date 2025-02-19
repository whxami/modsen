import { FC } from 'react';
import styles from './imageCard.module.scss';
import { truncatTitle } from '@utils/artsApi/truncatTitle.ts';
import Image from '@components/image/image.tsx';
import Bookmark from '@components/bookmark/bookmark.tsx';
import { Art } from '@constants/types/artsTypes.ts';
import { useNavigate } from 'react-router-dom';
import { AppRoutes, RoutePath } from '@utils/routeConfig/routeConfig.tsx';

interface ImageCardProps {
    art: Art;
}

const ImageCard: FC<ImageCardProps> = ({ art }) => {
    const truncatedTitle = truncatTitle(art.title);
    const navigate = useNavigate();

    const handleNavigate = (id: number) => {
        navigate(
            RoutePath[AppRoutes.ART_INFO_PAGE].replace(':id', id.toString())
        );
    };
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
                        handleNavigate(art.id);
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
