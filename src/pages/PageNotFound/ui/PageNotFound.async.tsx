import { lazy } from 'react';

// eslint-disable-next-line no-return-await
export const PageNotFoundAsync = lazy(async () => await new Promise((resolve) => {
    // @ts-expect-error для теста
    setTimeout(() => { resolve(import('./PageNotFound')); }, 1500);
}));
