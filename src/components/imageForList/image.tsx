import { FC } from 'react';
import styles from './image.module.scss';
import bookmark from '@assets/orangebookmark.svg';
import { truncatTitle } from '../../utils/artsApi/truncatTitle.ts';
import Image from '../image/image.tsx';

interface imageProps {
    imageId: string;
    title: string;
    isActive: boolean;
    isPublic: boolean;
    artist_title: string;
}

const ImageForList: FC<imageProps> = ({
    imageId,
    artist_title,
    title,
    isPublic,
    isActive,
}) => {
    const truncatedTitle = truncatTitle(title);
    console.log(imageId, isActive);
    return (
        <div className={styles.mainContainer}>
            <div className={styles.imageInfo}>
                <div>
                    <Image
                        imageId={imageId}
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                    />
                </div>
                <div className={styles.textContainer}>
                    <p className={styles.blackText}>{truncatedTitle}</p>
                    <p className={styles.goldText}>{artist_title}</p>
                    <strong className={styles.blackText}>
                        {isPublic ? 'Public' : 'Private'}
                    </strong>
                </div>
            </div>
            <div className={styles.bookmarkContainer}>
                <img
                    src={bookmark}
                    alt={'bookmarkActive'}
                    height={24}
                    width={24}
                />
            </div>
        </div>
    );
};

export default ImageForList;
