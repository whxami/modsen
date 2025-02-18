import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import bookmark from '@assets/bookmark.svg';
import logo from '@assets/museumlogo.svg';
import styles from './header.module.scss';
import { AppRoutes, RoutePath } from '../../utils/routeConfig/routeConfig.tsx';

const Header: FC = () => {
    const navigate = useNavigate();

    const handleNavigate = (route: AppRoutes) => {
        navigate(RoutePath[route]);
    };

    return (
        <header className={styles.header}>
            <div className={styles.imagesContainer}>
                <img
                    src={logo}
                    alt="logo"
                    width={200}
                    height={60}
                    onClick={() => handleNavigate(AppRoutes.CATALOG_PAGE)}
                    style={{ cursor: 'pointer' }}
                />
                <div
                    onClick={() => handleNavigate(AppRoutes.FAVORITES_PAGE)}
                    className={styles.bookmarkContainer}
                    style={{ cursor: 'pointer' }}
                >
                    <img src={bookmark} alt="Bookmark" width={24} height={24} />
                    <p>Your favorites</p>
                </div>
            </div>
        </header>
    );
};

export default Header;
