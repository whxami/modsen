import { FC } from 'react';
import styles from './imageForList.module.scss';
import { truncatTitle } from '@utils/artsApi/truncatTitle.ts';
import Image from '@components/image/image.tsx';
import Bookmark from '@components/bookmark/bookmark.tsx';
import { Art } from '@constants/types/artsTypes.ts';
import { AppRoutes } from '@utils/routeConfig/routeConfig.tsx';
import { useAppNavigation } from '@utils/routeConfig/useNavigate.tsx';

interface imageProps {
    art: Art;
}

const ImageForList: FC<imageProps> = ({ art }) => {
    const truncatedTitle = truncatTitle(art.title);
    const { handleNavigate } = useAppNavigation();

    return (
        <div className={styles.mainContainer}>
            <div
                onClick={() => {
                    handleNavigate(AppRoutes.ART_INFO_PAGE, art.id);
                }}
                className={styles.imageInfo}
            >
                <Image
                    imageId={art.image_id}
                    style={{
                        width: '100px',
                        height: '100px',
                        objectFit: 'cover',
                    }}
                />
                <div className={styles.textContainer}>
                    <p className={styles.blackText}>{truncatedTitle}</p>
                    <p className={styles.goldText}>{art.artist_title}</p>
                    <strong className={styles.blackText}>
                        {art.is_public_domain ? 'Public' : 'Private'}
                    </strong>
                </div>
            </div>
            <Bookmark art={art} />
        </div>
    );
};

export default ImageForList;
