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
        src = 'https://img2.freepng.ru/20180710/rxs/kisspng-computer-icons-'
            + 'anonymous-avatar-clip-art-anonymous-icon-5b447c8a9da205.3161285015312149866457.jpg',
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
