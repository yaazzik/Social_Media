import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from 'features/AuthByUserName/model/selectors/getLoginUsername/getLoginUsername';

describe('getLoginPassword.test', () => {
    test('should return login form from state', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'Mark',
            },
        };

        expect(getLoginUsername(state as StateSchema)).toEqual('Mark');
    });

    test('should return empty string from empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
