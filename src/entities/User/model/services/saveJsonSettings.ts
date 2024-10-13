import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { JsonSettings } from '../types/jsonSettings';
import { getUserAuthData } from '../selectors/getUserAuthData/getUserAuthData';
import { getJsonSettings } from '../selectors/jsonSettings';
import { setJsonSettingsMutation } from '../../api/userApi';

export const saveJsonSettings = createAsyncThunk<
    JsonSettings,
    JsonSettings,
    ThunkConfig<string>
>(
    'user/saveJsonSettings',
    async (jsonSettings, { rejectWithValue, getState, dispatch }) => {
        const userData = getUserAuthData(getState());
        const currentSettings = getJsonSettings(getState());

        if (!userData) {
            return rejectWithValue('User not found');
        }

        try {
            const response = await dispatch(
                setJsonSettingsMutation({
                    userId: userData.id,
                    jsonSettings: {
                        ...currentSettings,
                        ...jsonSettings
                    }
                })
            ).unwrap();

            if (!response.jsonSettings) {
                return rejectWithValue('Response is empty');
            }

            return response.jsonSettings;
        } catch (error) {
            return rejectWithValue(String(error));
        }
    }
);
