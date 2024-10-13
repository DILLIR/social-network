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
        })
    })
});

export const setJsonSettingsMutation =
    userApi.endpoints.setJsonSettings.initiate;
