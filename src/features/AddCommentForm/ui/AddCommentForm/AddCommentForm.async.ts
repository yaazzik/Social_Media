import { FC, lazy } from 'react';
import { AddCommentFormProps } from './AddCommentForm';

// eslint-disable-next-line no-return-await
export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(async () => await new Promise((resolve) => {
    setTimeout(() => { resolve(import('./AddCommentForm')); }, 1500);
}));
