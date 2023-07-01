import {
    createEntityAdapter,
    createSlice, PayloadAction,
} from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment';
import { StateSchema } from 'app/providers/StoreProvider';
import {
    fetchCommentsByArticleId,
} from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';

const articleDetailsCommentAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id,
});

export const getArticleComments = articleDetailsCommentAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsComments || articleDetailsCommentAdapter.getInitialState(),
);

const articleDetailsCommentSlice = createSlice({
    name: 'articleDetailsCommentSlice',
    initialState: articleDetailsCommentAdapter.getInitialState<ArticleDetailsCommentsSchema>({
        isLoading: false,
        error: '',
        ids: ['1', '2', '3'],
        entities: {
            1: {
                id: '1',
                text: 'comment',
                user: {
                    id: '1',
                    username: 'Joka',
                },
            },
            2: {
                id: '2',
                text: 'Like!',
                user: {
                    id: '2',
                    username: 'Boka',
                },
            },
            3: {
                id: '3',
                text: 'Hola',
                user: {
                    id: '3',
                    username: 'Lesheboka',
                },
            },
        },
    }),
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCommentsByArticleId.fulfilled, (
                state,
                action: PayloadAction<Comment[]>,
            ) => {
                state.isLoading = false;
                articleDetailsCommentAdapter.setAll(state, action.payload);
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: articleDetailsCommentReducer } = articleDetailsCommentSlice;
