import { ReactNode, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { UserRole } from '@/entities/User/model/types/user';
import { getUserAuthData, getUserRoles } from '@/entities/User';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';

interface RequireAuthProps {
    children: ReactNode;
    roles?: UserRole[];
}

export const RequireAuth = ({ children, roles }: RequireAuthProps) => {
    const location = useLocation();
    const auth = useSelector(getUserAuthData);
    const userRoles = useSelector(getUserRoles);

    const hasRequiredRoles = useMemo(() => {
        if (!roles) {
            return true;
        }

        return roles.some((requiredRole) => {
            const hasRole = userRoles?.includes(requiredRole);
            return hasRole;
        });
    }, [roles, userRoles]);

    if (!auth) {
        <Navigate
            replace
            to={RoutePath.main}
            state={{ path: location.pathname }}
        />;
    }

    if (!hasRequiredRoles) {
        return (
            <Navigate
                replace
                to={RoutePath.forbidden}
                state={{ path: location.pathname }}
            />
        );
    }

    return <>{children}</>;
};
