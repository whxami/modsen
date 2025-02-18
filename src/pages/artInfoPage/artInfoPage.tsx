import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useFetchArt } from '../../utils/artsApi/fetchingHooks.ts';
import Image from '../../components/image/image.tsx';
import styles from './artInfoPage.module.scss';

function concatStyles(...str: string[]) {
    return str.join(' ');
}

const ArtInfoPage: FC = () => {
    const { id } = useParams();
    const { data: artwork, isLoading } = useFetchArt(id);
    return (
        <div className={styles.pageContainer}>
            <div className={styles.test}>
                {!isLoading && artwork && (
                    <Image
                        style={{ height: '200px', width: '300px' }}
                        imageId={artwork.image_id}
                    />
                )}
                <div className={styles.descriptionContainer}>
                    <p
                        className={concatStyles(
                            styles.largeText,
                            styles.blackText
                        )}
                    >
                        {artwork?.title}
                    </p>
                    <p
                        className={concatStyles(
                            styles.goldText,
                            styles.middleText
                        )}
                    >
                        {artwork?.artist_title}
                    </p>
                    <p
                        className={concatStyles(
                            styles.strongText,
                            styles.blackText,
                            styles.smallText
                        )}
                    >
                        {artwork?.date_display}
                    </p>
                    <p
                        className={concatStyles(
                            styles.largeText,
                            styles.blackText
                        )}
                    >
                        Overview
                    </p>
                    <p
                        className={concatStyles(
                            styles.smallText,
                            styles.goldText
                        )}
                    >
                        Artist nationality:{' '}
                        <span
                            className={concatStyles(
                                styles.blackText,
                                styles.smallText
                            )}
                        >
                            {artwork?.place_of_origin}
                        </span>
                    </p>
                    <p
                        className={concatStyles(
                            styles.smallText,
                            styles.goldText
                        )}
                    >
                        Dimension sheet:{' '}
                        <span
                            className={concatStyles(
                                styles.blackText,
                                styles.smallText
                            )}
                        >
                            {artwork?.dimensions}
                        </span>
                    </p>
                    <p>{artwork?.is_public_domain}</p>
                </div>
            </div>
        </div>
    );
};

export default ArtInfoPage;
