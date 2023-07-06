import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/Home.svg';
import AboutIcon from 'shared/assets/icons/About.svg';
import ProfileIcon from 'shared/assets/icons/Profile.svg';
import ArticlesIcon from 'shared/assets/icons/Articles.svg';
import { SidebarItems } from '../types/sidebar';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userAuthData) => {
        const sidebarItemsList: SidebarItems[] = [
            {
                path: RoutePath.main,
                Icon: HomeIcon,
                text: 'Главная',
            },
            {
                path: RoutePath.about,
                Icon: AboutIcon,
                text: 'О сайте',
            },

        ];

        if (userAuthData) {
            sidebarItemsList.push(
                {
                    path: RoutePath.profile + userAuthData.id,
                    Icon: ProfileIcon,
                    text: 'Профиль',
                    authOnly: true,
                },
                {
                    path: RoutePath.articles,
                    Icon: ArticlesIcon,
                    text: 'Статьи',
                    authOnly: true,
                },
            );
        }

        return sidebarItemsList;
    },
);
