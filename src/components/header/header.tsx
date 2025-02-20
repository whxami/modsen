import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import bookmark from '@assets/bookmark.svg';
import logo from '@assets/museumlogo.svg';
import Home from '@assets/home.svg';
import styles from './header.module.scss';
import { AppRoutes } from '@utils/routeConfig/routeConfig.tsx';
import { useAppNavigation } from '@utils/routeConfig/useNavigate.tsx';

const Header: FC = () => {
    const location = useLocation();
    const { handleNavigate } = useAppNavigation();

    return (
        <header className={styles.header}>
            <div className={styles.imagesContainer}>
                <img src={logo} alt="logo" className={styles.museumLogo} />
                <div className={styles.bookmarkContainer}>
                    {location.pathname !== '/' && (
                        <div
                            onClick={() =>
                                handleNavigate(AppRoutes.CATALOG_PAGE)
                            }
                            className={styles.icon}
                        >
                            <img src={Home} alt="Home" width={24} height={24} />
                            <p>Home</p>
                        </div>
                    )}
                    <div
                        onClick={() => handleNavigate(AppRoutes.FAVORITES_PAGE)}
                        className={styles.icon}
                    >
                        <img
                            src={bookmark}
                            alt="Bookmark"
                            width={24}
                            height={24}
                        />
                        <p>Your favorites</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
