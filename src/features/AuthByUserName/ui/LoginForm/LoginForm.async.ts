import { FC, lazy } from 'react';
import LoginForm, { LoginFormProps } from './LoginForm';

// eslint-disable-next-line no-return-await
export const LoginFormAsync = lazy<FC<LoginFormProps>>(async () => await new Promise((resolve) => {
    setTimeout(() => { resolve(import('./LoginForm')); }, 1500);
}));
