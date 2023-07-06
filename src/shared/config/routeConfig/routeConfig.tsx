import { type RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { PageNotFound } from 'pages/PageNotFound';
import { ProfilePage } from 'pages/ProfilePage';
import { ArticlesPage } from 'pages/ArticlesPage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
}
export enum AppRoute {
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details',
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    // last route
    NOT_FOUND = 'notFound',
}

export const RoutePath: Record<AppRoute, string> = {
    [AppRoute.MAIN]: '/',
    [AppRoute.ABOUT]: '/about',
    [AppRoute.PROFILE]: '/profile/',
    [AppRoute.ARTICLES]: '/articles',
    [AppRoute.ARTICLE_DETAILS]: '/articles/',
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
        path: `${RoutePath.profile}:id`,
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoute.ARTICLES]: {
        path: RoutePath.articles,
        element: <ArticlesPage />,
        authOnly: true,
    },
    [AppRoute.ARTICLE_DETAILS]: {
        path: `${RoutePath.article_details}:id`,
        element: <ArticleDetailsPage />,
        authOnly: true,
    },
    [AppRoute.NOT_FOUND]: {
        path: RoutePath.notFound,
        element: <PageNotFound />,
    },
};
