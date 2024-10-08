import { UserRole } from '@/entities/User/model/types/user';
import { AboutPage } from '@/pages/AboutPage';
import { AdminPanelPage } from '@/pages/AdminPanelPage';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { AppRoutesProps } from '@/shared/types/router';
import { RoutePath, AppRoutes } from '@/shared/const/router';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath[AppRoutes.MAIN],
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath[AppRoutes.ABOUT],
        element: <AboutPage />,
    },
    [AppRoutes.PROFILE]: {
        path: `${RoutePath[AppRoutes.PROFILE]}/:id`,
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLES]: {
        path: RoutePath[AppRoutes.ARTICLES],
        element: <ArticlesPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_DETAILS]: {
        path: `${RoutePath[AppRoutes.ARTICLES]}/:id`,
        element: <ArticleDetailsPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_EDIT]: {
        path: `${RoutePath[AppRoutes.ARTICLE_EDIT]}`,
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_CREATE]: {
        path: `${RoutePath[AppRoutes.ARTICLE_CREATE]}`,
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AppRoutes.ADMIN_PANEL]: {
        path: `${RoutePath[AppRoutes.ADMIN_PANEL]}`,
        element: <AdminPanelPage />,
        authOnly: true,
        roles: [UserRole.ADMIN, UserRole.MANAGER],
    },
    [AppRoutes.FORBIDDEN]: {
        path: `${RoutePath[AppRoutes.FORBIDDEN]}`,
        element: <ForbiddenPage />,
    },

    // This route should be the last one
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath[AppRoutes.NOT_FOUND],
        element: <NotFoundPage />,
    },
};
