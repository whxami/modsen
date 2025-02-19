import { FC, useCallback, useMemo, useState } from 'react';
import { useFormik } from 'formik';
import { z } from 'zod';
import debounce from 'lodash/debounce';
import styles from './searchBar.module.scss';
import searchIcon from '@assets/searchicon.svg';
import { useFetching } from '@utils/artsApi/fetchingHooks.ts';
import { Art } from '@constants/types/artsTypes.ts';
import { useNavigate } from 'react-router-dom';
import { AppRoutes, RoutePath } from '@utils/routeConfig/routeConfig.tsx';

interface SearchBarProps {
    placeholder: string;
}

const searchSchema = z.object({
    query: z
        .string()
        .min(3, 'Минимум 3 символа')
        .max(15, 'Максимум 15 символов'),
});

const SearchBar: FC<SearchBarProps> = ({ placeholder }) => {
    const [searchResults, setSearchResults] = useState<Art[]>([]);
    const [isFocused, setIsFocused] = useState(false);
    const { data: artworks } = useFetching(1, 100);
    const navigate = useNavigate();
    const handleNavigate = (id: number) => {
        navigate(
            RoutePath[AppRoutes.ART_INFO_PAGE].replace(':id', id.toString())
        );
    };
    const handleSearch = useCallback(
        async (query: string) => {
            const result = searchSchema.safeParse({ query });

            if (!result.success) {
                setSearchResults([]);
                return;
            }

            if (artworks) {
                const filteredResults = artworks.filter(
                    (item: Art) =>
                        item.title
                            .toLowerCase()
                            .includes(query.toLowerCase()) ||
                        (item.artist_title &&
                            item.artist_title
                                .toLowerCase()
                                .includes(query.toLowerCase()))
                );
                setSearchResults(filteredResults);
            }
        },
        [artworks]
    );

    const debouncedSearch = useMemo(
        () => debounce(handleSearch, 500),
        [handleSearch]
    );

    const formik = useFormik({
        initialValues: { query: '' },
        validate: (values) => {
            const result = searchSchema.safeParse(values);
            return result.success ? {} : result.error.formErrors.fieldErrors;
        },
        onSubmit: (values) => {
            debouncedSearch(values.query);
        },
    });

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <div className={styles.errorText}>{formik.errors.query}</div>
                <div className={styles.searchContainer}>
                    <div className={styles.inputWrapper}>
                        <input
                            type="text"
                            name="query"
                            placeholder={placeholder}
                            className={styles.searchBar}
                            value={formik.values.query}
                            onChange={(e) => {
                                formik.handleChange(e);
                                debouncedSearch(e.target.value);
                            }}
                            onBlur={() =>
                                setTimeout(() => setIsFocused(false), 200)
                            }
                            onFocus={() => setIsFocused(true)}
                        />
                        <img
                            className={styles.searchIcon}
                            src={searchIcon}
                            alt="searchIcon"
                        />
                    </div>
                </div>
            </form>

            {isFocused && searchResults.length > 0 && (
                <div className={styles.resultList}>
                    {searchResults.map((art) => (
                        <div
                            onClick={() => handleNavigate(art.id)}
                            className={styles.resultElement}
                            key={art.id}
                        >
                            {art.title}
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default SearchBar;
