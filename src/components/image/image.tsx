import React, { FC } from 'react';
import { useImageLoader } from '@utils/artsApi/useImageLoader.ts';
import styles from './image.module.scss';

interface imageProps {
    style: React.CSSProperties;
    imageId: string;
    onClick?: () => void;
}

const Image: FC<imageProps> = (props) => {
    const { data: imageUrl, isLoading, error } = useImageLoader(props.imageId);
    return (
        <>
            {!props.imageId || !imageUrl || isLoading || error ? (
                <div className={styles.loader} style={props.style} />
            ) : (
                <img
                    onClick={props.onClick}
                    src={imageUrl}
                    alt={props.imageId}
                    style={props.style}
                />
            )}
        </>
    );
};

export default Image;
