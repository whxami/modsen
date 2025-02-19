import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useFetchArt } from '@utils/artsApi/fetchingHooks.ts';
import Image from '@components/image/image.tsx';
import styles from './artInfoPage.module.scss';
import Bookmark from '@components/bookmark/bookmark.tsx';
import { MoonLoader } from 'react-spinners';

function concatStyles(...str: string[]) {
    return str.join(' ');
}

const ArtInfoPage: FC = () => {
    const { id } = useParams();
    const { data: artwork, isLoading } = useFetchArt(id);
    if (isLoading)
        return (
            <div>
                <MoonLoader />
            </div>
        );
    return (
        <div className={styles.pageContainer}>
            {artwork && (
                <>
                    <div className={styles.imageWrapper}>
                        <Image
                            style={{
                                width: '100%',
                                position: 'relative',
                                objectFit: 'cover',
                            }}
                            imageId={artwork.image_id}
                        />
                        <div className={styles.bookmarkWrapper}>
                            <Bookmark art={artwork} />
                        </div>
                    </div>
                </>
            )}
            <div className={styles.descriptionContainer}>
                <p className={concatStyles(styles.largeText, styles.blackText)}>
                    {artwork?.title}
                </p>
                <p className={concatStyles(styles.goldText, styles.middleText)}>
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
                <p className={concatStyles(styles.largeText, styles.blackText)}>
                    Overview
                </p>
                <p className={concatStyles(styles.smallText, styles.goldText)}>
                    Place of origin:{' '}
                    <span
                        className={concatStyles(
                            styles.blackText,
                            styles.smallText
                        )}
                    >
                        {artwork?.place_of_origin}
                    </span>
                </p>
                <p className={concatStyles(styles.smallText, styles.goldText)}>
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
    );
};

export default ArtInfoPage;
