import { useQuery } from 'react-query';

export const useImageLoader = (identifier: string) => {
    return useQuery(
        ['image', identifier],
        async () => {
            if (!identifier) throw new Error('No identifier provided');

            const url = `https://www.artic.edu/iiif/2/${identifier}/full/843,/0/default.jpg`;

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
