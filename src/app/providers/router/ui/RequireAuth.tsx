import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getUserAuthData } from '../../../../entities/User';
import { RoutePath } from '../../../../shared/config/routeConfig/routeConfig';

export const RequireAuth = ({ children }: { children: ReactNode }) => {
    const location = useLocation();
    const auth = useSelector(getUserAuthData);

    if (auth != null) {
        return <>{children}</>;
    }

    return (
        <Navigate
            replace
            to={RoutePath.main}
            state={{ path: location.pathname }}
        />
    );
};
