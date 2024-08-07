import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';
import ArticlesIcon from 'shared/assets/icons/article-20-20.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        Icon: MainIcon,
        text: 'Main'
    },
    {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'About'
    }, 
    {
        path: RoutePath.profile,
        Icon: ProfileIcon,
        text: 'Profile',
        authOnly: true
    },
    {
        path: RoutePath.articles,
        Icon: ArticlesIcon,
        text: 'Articles',
        authOnly: true
    },

];