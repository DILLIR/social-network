import { rtkApi } from 'shared/api/rtkApi';
import { Notification } from '../model/types/notification';

const notificationApi = rtkApi.injectEndpoints({
    endpoints: (builder) => ({
        getNotifications: builder.query<Notification[], void>({
            query: (limit) => ({
                url: '/notifications'
            })
        })
    })
});

export const useNotifications = notificationApi.useGetNotificationsQuery;
