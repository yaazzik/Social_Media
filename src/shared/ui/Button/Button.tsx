import { classNames } from 'shared/lib/classNames/classNames';
import React, { type FC } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        ...rest
    } = props;

    return (
        <button
            type="button"
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            {...rest}
        >
            {children}
        </button>
    );
};
