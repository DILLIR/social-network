import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';

import MainIcon from '@/shared/assets/icons/home.svg';
import ArticleIcon from '@/shared/assets/icons/article.svg';
import AboutIcon from '@/shared/assets/icons/Info.svg';
import ProfileIcon from '@/shared/assets/icons/avatar.svg';

import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile
} from '@/shared/const/router';
import { SidebarItemType } from '../types/sidebar';

export const useSidebarItems = () => {
    const userData = useSelector(getUserAuthData);
    const sidebarItemsList: SidebarItemType[] = [
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

    if (userData) {
        sidebarItemsList.push(
            {
                path: getRouteProfile(userData.id),
                Icon: ProfileIcon,
                text: 'Profile',
                authOnly: true
            },
            {
                path: getRouteArticles(),
                Icon: ArticleIcon,
                text: 'Articles',
                authOnly: true
            }
        );
    }

    return sidebarItemsList;
};
