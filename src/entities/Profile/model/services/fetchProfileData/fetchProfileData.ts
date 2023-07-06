import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ProfileType } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<ProfileType, string, ThunkConfig<string>>(
    'profile/fetch ProfileData',
    async (id, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;
        try {
            const response = await extra.api.get<ProfileType>(`/profile/${id}`);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
