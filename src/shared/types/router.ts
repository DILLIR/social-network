import { RouteProps } from 'react-router-dom';
// eslint-disable-next-line fs-path-checker/layer-imports
import { UserRole } from '@/entities/User';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
};
