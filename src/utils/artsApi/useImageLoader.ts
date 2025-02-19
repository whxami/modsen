import { useQuery } from 'react-query';
import { generateURL } from './generateURL.ts';

export const useImageLoader = (identifier: string) => {
    return useQuery(
        ['image', identifier],
        async () => {
            const url = generateURL(identifier);

            return new Promise<string>((resolve, reject) => {
                const img = new Image();
                img.src = url;
                img.onload = () => resolve(url);
                img.onerror = () => reject(new Error('Failed to load image'));
            });
        },
        {
            retry: 2,
            staleTime: 5 * 60 * 1000,
            cacheTime: 10 * 60 * 1000,
        }
    );
};

export default useImageLoader;
