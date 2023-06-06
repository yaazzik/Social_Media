import { StateSchema } from 'app/providers/StoreProvider';
import { Dispatch } from '@reduxjs/toolkit';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';
import { validateProfileData } from './validateProfileData';

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

describe('validateProfileData.test', () => {
    let dispatch: Dispatch;
    let getState: () => StateSchema;

    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
    });

    test('success', async () => {
        const result = validateProfileData(data);

        expect(result).toEqual([]);
    });

    test('should return an error for incorrect first and lastname', async () => {
        const result = validateProfileData({
            ...data,
            firstname: '',
            lastname: '',
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_NAME]);
    });

    test('should return an error for incorrect age', async () => {
        const result = validateProfileData({
            ...data,
            age: undefined,
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });

    test('should return an error for incorrect city', async () => {
        const result = validateProfileData({
            ...data,
            city: undefined,
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_CITY]);
    });

    test('should return an error for incorrect currency', async () => {
        const result = validateProfileData({
            ...data,
            currency: undefined,
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_CURRENCY]);
    });

    test('should return an error for incorrect country', async () => {
        const result = validateProfileData({
            ...data,
            country: undefined,
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
    });

    test('should return an error for incorrect username', async () => {
        const result = validateProfileData({
            ...data,
            username: undefined,
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_USERNAME]);
    });

    test('should return an error for incorrect username', async () => {
        const result = validateProfileData({
            ...data,
            avatar: undefined,
        });

        expect(result).toEqual([ValidateProfileError.INCORRECT_AVATAR]);
    });
});
