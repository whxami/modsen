import { FC } from 'react';
import styles from './notFoundPage.module.scss';

const NotFoundPage: FC = () => {
    return (
        <div className={styles.pageWrapper}>
            <h1>404</h1>
            <p>Страница не найдена</p>
        </div>
    );
};

export default NotFoundPage;
