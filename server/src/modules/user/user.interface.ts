import UserConstants from './user.constant';

export type TRole = keyof typeof UserConstants.Role;
export type TUserStatus = keyof typeof UserConstants.UserStatus;

export type TUser = {
    id: string;
    password: string;
    needsPasswordChange: boolean;
    role: TRole;
    status: TUserStatus;
    isDeleted: boolean;
};
