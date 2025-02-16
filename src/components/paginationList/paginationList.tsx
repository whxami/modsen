import { FC } from 'react';
import styles from './paginationList.module.scss';
import ImageCard from '../imageCard/imageCard.tsx';

/*interface paginationListProps {}*/

const PaginationList: FC = () => {
    const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <div>
            <div className={styles.listContainer}>
                <ImageCard
                    image={'zxczxc'}
                    description={'zxczxczxc'}
                    isActive={false}
                />
                <ImageCard
                    image={'zxczxc'}
                    description={'zxczxczxc'}
                    isActive={true}
                />
                <ImageCard
                    image={'zxczxc'}
                    description={'zxczxczxc'}
                    isActive={false}
                />
            </div>
            <div className={styles.pagesWrapper}>
                {arr.map((elem, index) => (
                    <span
                        key={index}
                        className={`${styles.page} ${styles.activePage}`}
                    >
                        {elem}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default PaginationList;
