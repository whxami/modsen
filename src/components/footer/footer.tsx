import { FC } from 'react';
import styles from './footer.module.scss';
import museumLogo from '@assets/museumwhitelogo.svg';
import modsenLogo from '@assets/modsenlogo.svg';

const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.imagesContainer}>
                <img
                    src={museumLogo}
                    alt="museumLogo"
                    className={styles.museumLogo}
                />
                <img
                    src={modsenLogo}
                    alt="modsenLogo"
                    className={styles.modsenLogo}
                />
            </div>
        </footer>
    );
};

export default Footer;
