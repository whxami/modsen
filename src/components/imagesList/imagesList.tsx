import { FC } from 'react';
import Image from '@components/imageForList/image.tsx';
import styles from './imagesList.module.scss';
import { useFetching } from '../../utils/artsApi/useFetching.ts';
import { Art } from '../../constants/types/artsTypes.ts';

const currentPage = 10; // для списка "остальные работы"
const itemsPerPage = 9;

const buildTree = (arts: Art[]) => (
    <div className={styles.imagesGrid}>
        {arts.map((elem) => (
            <Image key={elem.id} art={elem} />
        ))}
    </div>
);

export const ImagesListFromFetching: FC = () => {
    const { data: artworks, isLoading } = useFetching(
        currentPage,
        itemsPerPage
    );

    if (isLoading) return <p>Загрузка...</p>;
    if (!artworks || artworks.length === 0) return <p>Нет доступных работ</p>;

    return buildTree(artworks);
};

export const ImagesListFromFavorites: FC<{ favorites: Art[] }> = ({
    favorites,
}) => {
    return buildTree(favorites);
};
