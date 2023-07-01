import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/ui/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './CommentItem.module.scss';
import { Comment } from '../../model/types/comment';

interface CommentItemProps {
    className?: string;
    comment: Comment;
    isLoading?: boolean;
}

export const CommentItem = memo((props: CommentItemProps) => {
    const {
        className,
        comment,
        isLoading,
    } = props;

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentItem, {}, [className])}>
                <div className={cls.header}>
                    <Skeleton className={cls.avatar} border="50%" height={40} width={40} />
                    <Skeleton width={150} height={30} />
                </div>
                <Skeleton width="100%" height={50} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.CommentItem, {}, [className])}>
            <div className={cls.header}>
                {
                    comment.user.avatar
                        ? <Avatar src={comment.user.avatar} className={cls.avatar} size="40px" />
                        : <Avatar className={cls.avatar} size="40px" />
                }
                <Text title={comment.user.username} />
            </div>
            <Text text={comment.text} />
        </div>
    );
});
