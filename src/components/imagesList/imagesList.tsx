import { FC } from 'react';
import Image from '@components/imageForList/image.tsx';
import styles from './imagesList.module.scss';
import { useFetching } from '../../utils/artsApi/useFetching.ts';
import { Art } from '../../constants/types/artsTypes.ts';
import { getArts } from '../../utils/artsApi/artsApi.ts';

const ImagesList: FC = () => {
    const { data: artworks, loading } = useFetching<Art[]>(getArts, 10, 9);
    return (
        <div className={styles.imagesGrid}>
            {!loading &&
                artworks?.map((elem) => (
                    <Image
                        key={elem.image_id}
                        title={elem.title}
                        imageId={elem.image_id}
                        isActive={false}
                        isPublic={elem.is_public_domain}
                        artist_title={elem.artist_title}
                    />
                ))}
        </div>
    );
};

export default ImagesList;
