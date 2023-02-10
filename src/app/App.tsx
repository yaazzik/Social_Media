import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/AppRuoter';
import { Navbar } from 'widgets/Navbar';
import { useTheme } from 'app/providers/ThemeProvider';
import { Sidebar } from 'widgets/Sidebar';
import React, { Suspense } from 'react';

export const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<div className="page-wrapper">Loading...</div>}>
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};
