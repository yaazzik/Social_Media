import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useEffect } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text, TextSize, TextTheme } from 'shared/ui/Text/ui/Text';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    fetchCommentsByArticleId,
} from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { AddCommentForm } from 'features/AddCommentForm';
import { addCommentForArticle } from 'pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle';
import { getArticleDetailsCommentIsLoading } from 'pages/ArticleDetailsPage/model/selectors/comments';
import { articleDetailsCommentReducer, getArticleComments } from '../../model/slice/ArticleDetailsCommentSlice';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = { articleDetailsComments: articleDetailsCommentReducer };

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const {
        className,
    } = props;
    const { t } = useTranslation('articleDetailsPage');
    const { id } = useParams<{id: string}>();
    const isLoading = useSelector(getArticleDetailsCommentIsLoading);
    // const error = useSelector(getArticleDetailsCommentError);
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    if (!id) {
        return (
            <Text title={t('Статья не найдена')} theme={TextTheme.PRIMARY} />
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <ArticleDetails id={id} />
                <Text className={cls.comments} title={t('Комментарии')} size={TextSize.L} />
                <AddCommentForm onSendComment={onSendComment} className={cls.addComment} />
                <CommentList isLoading={isLoading} comments={comments} />
            </div>
        </DynamicModuleLoader>

    );
};
export default memo(ArticleDetailsPage);
