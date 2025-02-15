import { FC } from 'react';
import styles from './searchBar.module.scss';
import searchIcon from '@assets/searchicon.svg';

interface searchBarProps {
    placeholder: string;
}

const SearchBar: FC<searchBarProps> = (props) => {
    return (
        <div className={styles.searchContainer}>
            <input
                placeholder={props.placeholder} className={styles.searchBar} />
            <img
                className={styles.searchIcon}
                src={searchIcon}
                alt="searchIcon"
                width={32}
                height={32}
            />
        </div>
    );
};

export default SearchBar;
