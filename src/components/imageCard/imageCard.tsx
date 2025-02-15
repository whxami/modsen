import {FC} from 'react'
import testImage from '@assets/testImage.png';
import bookmark from '@assets/orangebookmark.svg';
import bookmarkActive from '@assets/bookmarkActive.svg';
import styles from './imageCard.module.scss'

interface imageCardProps{
    image:string;
    description:string;
    isActive:boolean;
}

const ImageCard:FC<imageCardProps> = (props) => {
    return (
        <div className={styles.cardContainer}>
            <img src={testImage} alt={"modsenlogoo"}  height={445} width={400}/>
            <div className={styles.descriptionContainer}>
                <div className={styles.textContainer}>
                    <p className={styles.blackText}>Charles V, bust length...</p>
                    <p className={styles.goldText}>Giovanni Britto</p>
                    <strong className={styles.blackText}>Public</strong>
                </div>
                <div className={styles.bookmarkContainer}>
                    {props.isActive ? <img src={bookmarkActive} alt={'bookmarkActive'} height={24} width={24} /> :
                        <img src={bookmark} alt={'bookmark'} height={24} width={24} />}

                </div>
            </div>
        </div>
    )
}

export default ImageCard;