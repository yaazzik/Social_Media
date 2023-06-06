import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
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
        expect(getProfileData(state as StateSchema)).toEqual({
            username: 'Hassan',
            avatar: 'https://wallpaperaccess.com/full/4595689.jpg',
            city: 'Boston',
            currency: Currency.USD,
            country: Country.USA,
            age: 23,
            firstname: 'Ellie',
            lastname: 'Heisenberg',
        });
    });

    test('should return undefined from empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
