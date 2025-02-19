import { useNavigate } from 'react-router-dom';
import { AppRoutes, RoutePath } from '@utils/routeConfig/routeConfig.tsx';

export const useAppNavigation = () => {
    const navigate = useNavigate();

    const handleNavigate = (route: AppRoutes, id?: number) => {
        if (id !== undefined) {
            navigate(RoutePath[route].replace(':id', id.toString()));
        } else {
            navigate(RoutePath[route]);
        }
    };

    return { handleNavigate };
};
