import { FC } from 'react';
import styles from './image.module.scss';
import testImage from '@assets/testImage.png';
import bookmark from '@assets/orangebookmark.svg';

/*interface imageProps {}*/

const Image: FC = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.imageInfo}>
                <div>
                    <img
                        src={testImage}
                        alt={'modsenlogo'}
                        height={80}
                        width={70}
                    />
                </div>
                <div className={styles.textContainer}>
                    <p className={styles.blackText}>
                        Charles V, bust length...
                    </p>
                    <p className={styles.goldText}>Giovanni Britto</p>
                    <strong className={styles.blackText}>Public</strong>
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

export default Image;
