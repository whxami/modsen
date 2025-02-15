import { FC } from 'react';
import styles from './paginationList.module.scss';
import ImageCard from '../imageCard/imageCard.tsx';

/*interface paginationListProps {}*/

const PaginationList: FC = () => {
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
            <div></div>
        </div>
    );
};

export default PaginationList;
