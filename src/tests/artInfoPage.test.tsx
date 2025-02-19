import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';
import PaginationList from '@components/paginationList/paginationList.tsx';
import { useFetching } from '@utils/artsApi/fetchingHooks.ts';
import { Art } from '@constants/types/artsTypes.ts';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

jest.mock('@utils/artsApi/fetchingHooks.ts', () => ({
    useFetching: jest.fn(),
}));

const mockData: Art[] = [
    {
        id: 14620,
        title: 'Cliff Walk at Pourville',
        date_display: '1882',
        place_of_origin: 'France',
        dimensions:
            '66.5 × 82.3 cm (26 1/8 × 32 7/16 in.); Framed: 88.9 × 104.8 × 10.8 cm (35 × 41 1/4 × 4 1/4 in.)',
        is_public_domain: true,
        artist_title: 'Claude Monet',
        image_id: 'b0effb1c-ff23-bbaa-f809-9fd94e31c1a0',
    },
    {
        id: 18579,
        title: 'Chickens',
        date_display: '1933',
        place_of_origin: 'United States',
        dimensions: '50.9 × 60.9 cm (20 1/16 × 24 in.)',
        is_public_domain: false,
        artist_title: 'Edgar Miller',
        image_id: '6c046e7f-614b-0060-2e7b-e12779ae48b6',
    },
    {
        id: 15857,
        title: 'Cabaret Scene',
        date_display: 'c. 1920',
        place_of_origin: 'France',
        dimensions: '22.4 × 30.8 cm (8 7/8 × 12 3/16 in.)',
        is_public_domain: false,
        artist_title: 'André Lhote',
        image_id: 'f6c5afa8-bbb5-9669-55d7-cfe8828f50d0',
    },
];

describe('PaginationList', () => {
    beforeEach(() => {
        (useFetching as jest.Mock).mockReturnValue({ data: mockData });
    });

    test('рендерится корректно', async () => {
        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter>
                    <PaginationList />
                </MemoryRouter>
            </QueryClientProvider>
        );
        expect(screen.getByText('1')).toBeInTheDocument();
        expect(screen.getByText('2')).toBeInTheDocument();
        expect(screen.getByText('3')).toBeInTheDocument();
        expect(screen.getByText('4')).toBeInTheDocument();
    });

    test('отображает карточки после загрузки', async () => {
        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter>
                    <PaginationList />
                </MemoryRouter>
            </QueryClientProvider>
        );
        await waitFor(() => {
            expect(
                screen.getByTitle('Cliff Walk at Pourville')
            ).toBeInTheDocument();
            expect(screen.getByTitle('Chickens')).toBeInTheDocument();
            expect(screen.getByTitle('Cabaret Scene')).toBeInTheDocument();
        });
    });

    test('переключение страниц работает', async () => {
        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter>
                    <PaginationList />
                </MemoryRouter>
            </QueryClientProvider>
        );

        fireEvent.click(screen.getByText('2'));
        await waitFor(() => {
            expect(useFetching).toHaveBeenCalledWith(2, 3);
        });

        fireEvent.click(screen.getByText('>'));
        await waitFor(() => {
            expect(useFetching).toHaveBeenCalledWith(3, 3);
        });

        fireEvent.click(screen.getByText('<'));
        await waitFor(() => {
            expect(useFetching).toHaveBeenCalledWith(2, 3);
        });
    });

    test('кнопки пагинации скрываются при первой/последней странице', async () => {
        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter>
                    <PaginationList />
                </MemoryRouter>
            </QueryClientProvider>
        );

        expect(screen.queryByText('<')).toBeNull();

        fireEvent.click(screen.getByText('4'));
        await waitFor(() => {
            expect(screen.getByText('>')).toHaveStyle('visibility: hidden');
        });
    });
});
