import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import '@testing-library/jest-dom';
import { useFetching } from '@utils/artsApi/fetchingHooks';
import { useAppNavigation } from '@utils/routeConfig/useNavigate';
import SearchBar from '@components/searchBar/searchBar.tsx';
import { act } from 'react';

jest.mock('@utils/artsApi/fetchingHooks', () => ({
    useFetching: jest.fn(),
}));

jest.mock('@utils/routeConfig/useNavigate', () => ({
    useAppNavigation: jest.fn(),
}));

describe('SearchBar', () => {
    beforeEach(() => {
        jest.useFakeTimers(); // Мокаем таймеры для debounce
        (useFetching as jest.Mock).mockReturnValue({
            data: [
                { id: 1, title: 'Starry Night', artist_title: 'Van Gogh' },
                {
                    id: 2,
                    title: 'Mona Lisa',
                    artist_title: 'Leonardo da Vinci',
                },
            ],
        });

        (useAppNavigation as jest.Mock).mockReturnValue({
            handleNavigate: jest.fn(),
        });
    });

    afterEach(() => {
        jest.runOnlyPendingTimers(); // Завершаем отложенные таймеры
        jest.useRealTimers(); // Возвращаем реальную работу таймеров
    });

    it('рендерит инпут поиска', () => {
        render(<SearchBar />);
        expect(
            screen.getByPlaceholderText(/search artist, art, work/i)
        ).toBeInTheDocument();
    });

    it('фильтрует результаты поиска', async () => {
        render(<SearchBar />);
        const input = screen.getByPlaceholderText(/search artist, art, work/i);

        fireEvent.focus(input); // Устанавливаем isFocused = true
        fireEvent.change(input, { target: { value: 'Starry' } });

        act(() => {
            jest.runAllTimers(); // Принудительно выполняем debounce
        });

        expect(await screen.findByText(/starry night/i)).toBeInTheDocument();
        expect(screen.queryByText(/mona lisa/i)).not.toBeInTheDocument();
    });

    it('вызывает навигацию при клике на результат', async () => {
        const mockNavigate = jest.fn();
        (useAppNavigation as jest.Mock).mockReturnValue({
            handleNavigate: mockNavigate,
        });

        render(<SearchBar />);
        const input = screen.getByPlaceholderText(/search artist, art, work/i);

        fireEvent.focus(input);
        fireEvent.change(input, { target: { value: 'Starry' } });

        act(() => {
            jest.runAllTimers();
        });

        const result = await screen.findByText(/starry night/i);
        fireEvent.click(result);

        expect(mockNavigate).toHaveBeenCalledWith('art-info', 1);
    });
});
