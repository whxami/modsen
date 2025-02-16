import { Outlet } from 'react-router-dom';
import { FC } from 'react';
import Header from '@components/header/header.tsx';
import Footer from '@components/footer/footer.tsx';

const MainLayout: FC = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            <Header />
            <main style={{ flex: 1 }}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
