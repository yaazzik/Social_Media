import { type RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { PageNotFound } from 'pages/PageNotFound';
import { PageError } from 'widgets/PageError/ui/PageError';

export enum AppRoute {
    // eslint-disable-next-line no-unused-vars
    MAIN = 'main',
    // eslint-disable-next-line no-unused-vars
    ABOUT = 'about',
    // eslint-disable-next-line no-unused-vars
    NOT_FOUND = 'notFound',
    ERROR = 'error',
}

export const RoutePath: Record<AppRoute, string> = {
    [AppRoute.MAIN]: '/',
    [AppRoute.ABOUT]: '/about',
    [AppRoute.ERROR]: '/error',
    [AppRoute.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoute, RouteProps> = {
    [AppRoute.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoute.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoute.ERROR]: {
        path: RoutePath.error,
        element: <PageError />,
    },
    [AppRoute.NOT_FOUND]: {
        path: RoutePath.notFound,
        element: <PageNotFound />,
    },
};
