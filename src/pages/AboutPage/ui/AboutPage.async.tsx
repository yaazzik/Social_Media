import { lazy } from 'react';

// eslint-disable-next-line no-return-await
export const AboutPageAsync = lazy(async () => await new Promise((resolve) => {
    // @ts-expect-error for test
    setTimeout(() => { resolve(import('./AboutPage')); }, 1500);
}));
