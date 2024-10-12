import { createSelector } from '@reduxjs/toolkit';
import AboutIcon from '@/shared/assets/icons/about-20-20.svg';
import ArticlesIcon from '@/shared/assets/icons/article-20-20.svg';
import MainIcon from '@/shared/assets/icons/main-20-20.svg';
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg';
import { getUserAuthData } from '@/entities/User';
import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile
} from '@/shared/const/router';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector([getUserAuthData], (authData) => {
    const SidebarItemsList: SidebarItemType[] = [
        {
            path: getRouteMain(),
            Icon: MainIcon,
            text: 'Main'
        },
        {
            path: getRouteAbout(),
            Icon: AboutIcon,
            text: 'About'
        }
    ];

    if (authData != null) {
        SidebarItemsList.push(
            {
                path: getRouteProfile(authData.id),
                Icon: ProfileIcon,
                text: 'Profile',
                authOnly: true
            },
            {
                path: getRouteArticles(),
                Icon: ArticlesIcon,
                text: 'Articles',
                authOnly: true
            }
        );
    }

    return SidebarItemsList;
});
