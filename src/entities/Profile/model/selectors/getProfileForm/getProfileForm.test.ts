import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
    test('should return profile form', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: {
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
        expect(getProfileForm(state as StateSchema)).toEqual({
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
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
