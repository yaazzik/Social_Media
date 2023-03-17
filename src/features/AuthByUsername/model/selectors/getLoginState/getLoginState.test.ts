import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';

describe('getLoginPassword.test', () => {
    test('should return login form from state', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'Mark',
                password: 'secret',
                isLoading: true,
            },
        };

        expect(getLoginState(state as StateSchema)).toEqual({
            username: 'Mark',
            password: 'secret',
            isLoading: true,
        });
    });

    test('should return undefined from empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginState(state as StateSchema)).toEqual(undefined);
    });
});
