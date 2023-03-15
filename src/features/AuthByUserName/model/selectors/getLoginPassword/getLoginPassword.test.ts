import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from 'features/AuthByUserName/model/selectors/getLoginPassword/getLoginPassword';

describe('getLoginPassword.test', () => {
    test('should return password from state', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: 'secret',
            },
        };

        expect(getLoginPassword(state as StateSchema)).toEqual('secret');
    });

    test('should return empty string from empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});
