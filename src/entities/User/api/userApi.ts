import { rtkApi } from '@/shared/api/rtkApi';
import { JsonSettings } from '../model/types/jsonSettings';
import { User } from '../model/types/user';

interface SetJsonSettingsArg {
    userId: string;
    jsonSettings: JsonSettings;
}

export const userApi = rtkApi.injectEndpoints({
    endpoints: (builder) => ({
        setJsonSettings: builder.mutation<User, SetJsonSettingsArg>({
            query: ({ userId, jsonSettings }) => ({
                url: `/users/${userId}`,
                method: 'PATCH',
                body: {
                    jsonSettings
                }
            })
        }),
        getUserDataById: builder.query<User, string>({
            query: (userId) => ({ url: `/users/${userId}`, method: 'GET' })
        })
    })
});

export const setJsonSettingsMutation =
    userApi.endpoints.setJsonSettings.initiate;

export const getUserDataByIdQuery = userApi.endpoints.getUserDataById.initiate;
