import { FC } from 'react';
import styles from './image.module.scss';
import { truncatTitle } from '../../utils/artsApi/truncatTitle.ts';
import Image from '../image/image.tsx';
import Bookmark from '../bookmark/bookmark.tsx';
import { Art } from '../../constants/types/artsTypes.ts';

interface imageProps {
    art: Art;
}

const ImageForList: FC<imageProps> = ({ art }) => {
    const truncatedTitle = truncatTitle(art.title);
    return (
        <div className={styles.mainContainer}>
            <div className={styles.imageInfo}>
                <div>
                    <Image
                        imageId={art.image_id}
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                    />
                </div>
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
