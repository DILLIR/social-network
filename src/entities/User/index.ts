export type { User, UserSchema } from 'entities/User/model/types/user';
export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
export { getUserInited } from './model/selectors/getUserInited/getUserInited';
export { userActions, userReducer } from './model/slice/userSlice';

