import { Outlet } from 'react-router-dom';
import { FC } from 'react';
import Header from '@components/header/header.tsx';
import Footer from '@components/footer/footer.tsx';
import styles from './MainLayout.module.scss';

const MainLayout: FC = () => {
    return (
        <div className={styles.pageWrapper}>
            <Header />
            <main className={styles.outletWrapper}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
