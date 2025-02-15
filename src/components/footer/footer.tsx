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
                    width={200}
                    height={60}
                />
                <img
                    src={modsenLogo}
                    alt="modsenLogo"
                    width={165}
                    height={60}
                />
            </div>
        </footer>
    );
};

export default Footer;
