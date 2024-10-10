import { RouteProps } from 'react-router-dom';
import { UserRole } from '../../entities/User/model/types/user';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
};
