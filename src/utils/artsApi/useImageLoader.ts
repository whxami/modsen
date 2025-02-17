import { useState, useEffect, useRef, useCallback } from 'react';
import { generateURL } from './generateURL.ts';

interface ImageCache {
    [key: string]: string | null;
}

const imageCache: ImageCache = {};

export const useImageLoader = (imageId?: string | null) => {
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    console.log(imageCache);

    const isMounted = useRef(true);

    const imageUrl = useCallback(() => {
        if (!imageId) return null;
        return generateURL(imageId);
    }, [imageId]);

    useEffect(() => {
        isMounted.current = true;

        if (!imageId) {
            setError('Invalid image ID');
            setLoading(false);
            return;
        }

        if (imageCache[imageId]) {
            setImageSrc(imageCache[imageId]);
            setLoading(false);
            return;
        }

        const img = new Image();
        const url = imageUrl();

        img.src = url!;
        img.onload = () => {
            if (isMounted.current) {
                imageCache[imageId] = url;
                setImageSrc(url);
                setLoading(false);
            }
        };
        img.onerror = () => {
            if (isMounted.current) {
                setError('Failed to load image');
                setLoading(false);
            }
        };

        return () => {
            isMounted.current = false;
        };
    }, [imageId, imageUrl]);

    return { imageSrc, loading, error };
};
