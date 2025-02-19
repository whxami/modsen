import { FC } from 'react';
import styles from './catalogPage.module.scss';
import SearchBar from '@components/searchBar/searchBar.tsx';
import PaginationList from '@components/paginationList/paginationList.tsx';
import { ImagesListFromFetching } from '@components/imagesList/imagesList.tsx';

const CatalogPage: FC = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.searchContainer}>
                <div className={styles.searchText}>
                    <p>
                        Let&apos;s Find Some{' '}
                        <span className={styles.goldText}>Art</span> <br />
                        Here!
                    </p>
                </div>
                <div className={styles.searchBarWrapper}>
                    <SearchBar placeholder={'Search art, artist, work...'} />
                </div>
            </div>
            <div className={styles.paginationList}>
                <div className={styles.textPos}>
                    <p className={styles.lightGoldText}>Topics for you</p>
                    <p className={styles.lightBlackText}>Our special gallery</p>
                </div>
                <PaginationList />
            </div>
            <div className={styles.listOfArts}>
                <div className={styles.textPos}>
                    <p className={styles.lightGoldText}>Here some more</p>
                    <p className={styles.lightBlackText}>Other works for you</p>
                </div>
                <ImagesListFromFetching />
            </div>
        </div>
    );
};

export default CatalogPage;
