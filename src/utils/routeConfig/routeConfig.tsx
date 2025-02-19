import MainLayout from '@pages/mainLayout/MainLayout.tsx';
import CatalogPage from '@pages/catalogPage/catalogPage.tsx';
import FavoritesPage from '@pages/favoritesPage/favoritesPage.tsx';
import ArtInfoPage from '@pages/artInfoPage/artInfoPage.tsx';
import NotFoundPage from '@pages/notFoundPage/notFoundPage.tsx';

export enum AppRoutes {
    CATALOG_PAGE = 'catalog',
    ART_INFO_PAGE = 'art-info',
    FAVORITES_PAGE = 'favorites',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.CATALOG_PAGE]: '/',
    [AppRoutes.ART_INFO_PAGE]: '/art/:id',
    [AppRoutes.FAVORITES_PAGE]: '/favorites',
};

export const routeConfig = [
    {
        path: RoutePath[AppRoutes.CATALOG_PAGE],
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <CatalogPage />,
            },
            {
                path: RoutePath[AppRoutes.FAVORITES_PAGE],
                element: <FavoritesPage />,
            },
            {
                path: RoutePath[AppRoutes.ART_INFO_PAGE],
                element: <ArtInfoPage />,
            },
            {
                path: '*',
                element: <NotFoundPage />,
            },
        ],
    },
];
