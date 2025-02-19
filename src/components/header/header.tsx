import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import bookmark from '@assets/bookmark.svg';
import logo from '@assets/museumlogo.svg';
import Home from '@assets/Home.svg';
import styles from './header.module.scss';
import { AppRoutes, RoutePath } from '@utils/routeConfig/routeConfig.tsx';

const Header: FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigate = (route: AppRoutes) => {
        navigate(RoutePath[route]);
    };

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
