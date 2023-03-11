import { classNames } from 'shared/lib/classNames/classNames';
import { Link, type LinkProps } from 'react-router-dom';
import React, { memo } from 'react';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}
interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
    children?: React.ReactNode
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        to,
        children,
        className,
        theme = AppLinkTheme.PRIMARY,
        ...rest
    } = props;
    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            {...rest}
        >
            {children}
        </Link>
    );
});
