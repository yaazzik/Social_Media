import { lazy } from 'react';

// eslint-disable-next-line no-return-await
export const ArticleDetailsPageAsync = lazy(async () => await new Promise((resolve) => {
    // @ts-expect-error для теста
    setTimeout(() => { resolve(import('./ArticleDetailsPage')); }, 1500);
}));
