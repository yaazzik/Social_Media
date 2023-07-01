import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Text } from 'shared/ui/Text/ui/Text';
import { useTranslation } from 'react-i18next';
import { Comment } from '../../model/types/comment';
import { CommentItem } from '../CommentItem/CommentItem';
import cls from './CommentList.module.scss';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
    const {
        className,
        comments,
        isLoading,
    } = props;

    const { t } = useTranslation();

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {
                comments?.length
                    ? comments.map((comment) => (
                        <CommentItem
                            className={cls.comment}
                            isLoading={isLoading}
                            key={comment.id}
                            comment={comment}
                        />
                    ))
                    : <Text title={t('Комментарии отсутствуют')} />
            }
        </div>
    );
});
