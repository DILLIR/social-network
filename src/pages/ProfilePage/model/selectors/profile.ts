import { createSelector } from '@reduxjs/toolkit';
import { getProfileData } from 'entities/Profile';
import { getUserAuthData } from 'entities/User';

export const getCanEditProfile = 
    createSelector(
        [getUserAuthData, getProfileData],
        (auth, profile) => auth?.id === profile?.id
    );