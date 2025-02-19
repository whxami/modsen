import { useQuery } from 'react-query';
import { fetchArt, getArts } from './artsApi.ts';

export function useFetching(currentPage = 1, itemsPerPage = 3) {
    return useQuery(
        ['arts', currentPage, itemsPerPage],
        async () => getArts(currentPage, itemsPerPage),
        {
            keepPreviousData: true,
            staleTime: 5 * 60 * 1000,
            cacheTime: 10 * 60 * 1000,
        }
    );
}

export function useFetchArt(id: string) {
    return useQuery(['artwork', id], async () => fetchArt(id), {
        keepPreviousData: true,
        staleTime: 5 * 60 * 1000,
        cacheTime: 10 * 60 * 1000,
    });
}
