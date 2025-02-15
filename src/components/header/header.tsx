import { FC } from 'react';
import bookmark from '@assets/bookmark.svg';
import logo from '@assets/museumlogo.svg';
import styles from './header.module.scss';

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.imagesContainer}>
                <img src={logo} alt="logo" width={200} height={60} />
                <div className={styles.bookmarkContainer}>
                    <img src={bookmark} alt="Bookmark" width={24} height={24} />
                    <p>Your favorites</p>
                </div>
            </div>
        </header>
    );
};

export default Header;