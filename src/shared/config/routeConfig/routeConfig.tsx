import { type RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { PageNotFound } from 'pages/PageNotFound';
import { ProfilePage } from 'pages/ProfilePage';

type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
}
export enum AppRoute {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    // last route
    NOT_FOUND = 'notFound',
}

export const RoutePath: Record<AppRoute, string> = {
    [AppRoute.MAIN]: '/',
    [AppRoute.ABOUT]: '/about',
    [AppRoute.PROFILE]: '/profile',
    [AppRoute.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoute, AppRoutesProps> = {
    [AppRoute.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoute.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoute.PROFILE]: {
        path: RoutePath.profile,
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoute.NOT_FOUND]: {
        path: RoutePath.notFound,
        element: <PageNotFound />,
    },
};
