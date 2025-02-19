import { FC } from 'react';
import ImageForList from '@components/imageForList/imageForList.tsx';
import styles from './imagesList.module.scss';
import { useFetching } from '@utils/artsApi/fetchingHooks.ts';
import { Art } from '@constants/types/artsTypes.ts';
import { MoonLoader } from 'react-spinners';

const currentPage = 10; // для списка "остальные работы"
const itemsPerPage = 9;

const buildList = (arts: Art[]) => (
    <div className={styles.imagesGrid}>
        {arts.map((elem) => (
            <ImageForList key={elem.id} art={elem} />
        ))}
    </div>
);

export const ImagesListFromFetching: FC = () => {
    const { data: artworks, isLoading } = useFetching(
        currentPage,
        itemsPerPage
    );

    if (isLoading) return <MoonLoader />;
    if (!artworks || artworks.length === 0) return <p>Нет доступных работ</p>;

    return buildList(artworks);
};

export const ImagesListFromFavorites: FC<{ favorites: Art[] }> = ({
    favorites,
}) => {
    return buildList(favorites);
};
