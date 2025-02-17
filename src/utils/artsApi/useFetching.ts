import { useState, useEffect } from 'react';

export const useFetching = <T>(
    fetchFunction: (page: number, perPage: number) => Promise<T>,
    page: number,
    perPage: number
) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [cache, setCache] = useState<{ [key: number]: T }>({});

    useEffect(() => {
        const fetchData = async () => {
            if (cache[page]) {
                setData(cache[page]);
                setLoading(false);
                return;
            }

            setLoading(true);
            setError(null);

            try {
                const result = await fetchFunction(page, perPage);
                setData(result);
                setCache((prevCache) => ({ ...prevCache, [page]: result }));
            } catch (error: unknown) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError('Неизвестная ошибка');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [page, cache, perPage, fetchFunction]);

    return { data, loading, error };
};
