import { classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties, useMemo } from 'react';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    alt?: string;
    size?: string;
}

export const Avatar = (props:AvatarProps) => {
    const {
        className,
        src,
        alt,
        size,
    } = props;

    const sizes = useMemo<CSSProperties>(() => ({
        width: size,
        height: size,
    }), [size]);

    return (
        <img style={sizes} alt={alt} src={src} className={classNames(cls.Avatar, {}, [className])} />
    );
};
