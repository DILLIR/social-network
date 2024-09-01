import { createSelector } from '@reduxjs/toolkit';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import ArticlesIcon from 'shared/assets/icons/article-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';
import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector([getUserAuthData], (authData) => {
    const SidebarItemsList: SidebarItemType[] = [
        {
            path: RoutePath.main,
            Icon: MainIcon,
            text: 'Main',
        },
        {
            path: RoutePath.about,
            Icon: AboutIcon,
            text: 'About',
        },
    ];

    if (authData != null) {
        SidebarItemsList.push(
            {
                path: `${RoutePath.profile}/${authData?.id}`,
                Icon: ProfileIcon,
                text: 'Profile',
                authOnly: true,
            },
            {
                path: RoutePath.articles,
                Icon: ArticlesIcon,
                text: 'Articles',
                authOnly: true,
            },
        );
    }

    return SidebarItemsList;
});
