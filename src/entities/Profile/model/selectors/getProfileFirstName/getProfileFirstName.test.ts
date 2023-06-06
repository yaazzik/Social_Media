import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileFirstName } from './getProfileFirstName';

describe('getProfileFirstName.test', () => {
    test('should return profile data', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: {
                    username: 'Hassan',
                    avatar: 'https://wallpaperaccess.com/full/4595689.jpg',
                    city: 'Boston',
                    currency: Currency.USD,
                    country: Country.USA,
                    age: 23,
                    firstname: 'Ellie',
                    lastname: 'Heisenberg',
                },
            },
        };
        expect(getProfileFirstName(state as StateSchema)).toEqual('Ellie');
    });

    test('should return empty string from empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileFirstName(state as StateSchema)).toEqual('');
    });
});
