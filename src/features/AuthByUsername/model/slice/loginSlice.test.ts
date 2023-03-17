import { LoginSchema } from 'features/AuthByUsername';
import { loginActions, loginReducer, loginSlice } from './loginSlice';

describe('loginSlice', () => {
    test('setUsername should change the username in state', () => {
        const state: DeepPartial<LoginSchema> = { username: 'user' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUsername('admin'),
        )).toStrictEqual({ username: 'admin' });
    });

    test('setPassword should change the password in state', () => {
        const state: DeepPartial<LoginSchema> = { password: '0000' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setPassword('1234'),
        )).toStrictEqual({ password: '1234' });
    });
});
