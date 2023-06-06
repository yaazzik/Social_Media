import { ProfileType } from 'entities/Profile';
import { ValidateProfileError } from 'entities/Profile/model/types/profile';

export const validateProfileData = (profile?: ProfileType) => {
    if (!profile) {
        return [ValidateProfileError.NO_DATA];
    }

    const {
        lastname,
        firstname,
        age,
        country,
        avatar,
        username,
        currency,
        city,
    } = profile;

    const errors: Array<ValidateProfileError> = [];

    if (!firstname || !lastname) {
        errors.push(ValidateProfileError.INCORRECT_NAME);
    }

    if (!age) {
        errors.push(ValidateProfileError.INCORRECT_AGE);
    }

    if (!country) {
        errors.push(ValidateProfileError.INCORRECT_COUNTRY);
    }

    if (!city) {
        errors.push(ValidateProfileError.INCORRECT_CITY);
    }

    if (!currency) {
        errors.push(ValidateProfileError.INCORRECT_CURRENCY);
    }

    if (!avatar) {
        errors.push(ValidateProfileError.INCORRECT_AVATAR);
    }

    if (!username) {
        errors.push(ValidateProfileError.INCORRECT_USERNAME);
    }

    return errors;
};
