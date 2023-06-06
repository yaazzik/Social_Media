import { ProfileSchema, updateProfileData } from 'entities/Profile';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { profileActions, profileReducer, profileSlice } from './profileSlice';

const data = {
    username: 'Hassan',
    avatar: 'https://wallpaperaccess.com/full/4595689.jpg',
    city: 'Boston',
    currency: Currency.USD,
    country: Country.USA,
    age: 23,
    firstname: 'Ellie',
    lastname: 'Heisenberg',
};
describe('profileSlice', () => {
    test('setReadonly should change the readonly state', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(true),
        )).toEqual({ readonly: true });
    });

    test('updateProfile should update the profile data', () => {
        const state: DeepPartial<ProfileSchema> = { form: { lastname: 'Felony' } };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile({ lastname: 'Gosling' }),
        )).toEqual({
            form: { lastname: 'Gosling' },
        });
    });

    test('cancelEdit should set the readonly to true', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit(),
        )).toEqual({
            readonly: true,
        });
    });

    test('while pending isLoading should be true', () => {
        const state: DeepPartial<ProfileSchema> = { isLoading: false, validateError: [] };
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending,
        )).toEqual({
            isLoading: true,
        });
    });

    test('update profile data fulfilled service', () => {
        const state: DeepPartial<ProfileSchema> = { isLoading: false, validateError: [] };
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, ''),
        )).toEqual({
            isLoading: false,
            data,
            form: data,
            readonly: true,
            validateError: undefined,
        });
    });
});
