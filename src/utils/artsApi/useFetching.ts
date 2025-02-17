import { useQuery } from 'react-query';
import { getArts } from './artsApi.ts';

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
