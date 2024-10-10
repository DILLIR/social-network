import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { getProfileData } from '@/features/EditableProfileCard';

export const getCanEditProfile = createSelector(
    [getUserAuthData, getProfileData],
    (auth, profile) => auth?.id === profile?.id,
);
