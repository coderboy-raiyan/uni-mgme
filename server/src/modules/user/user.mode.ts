import { model, Schema } from 'mongoose';
import UserConstants from './user.constant';
import { TUser } from './user.interface';

const userSchema = new Schema<TUser>(
    {
        id: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        needsPasswordChange: {
            type: Boolean,
            default: true,
        },
        role: {
            type: String,
            enum: UserConstants.Role,
            required: true,
        },
        status: {
            type: String,
            enum: UserConstants.UserStatus,
            default: 'in-progress',
        },
        isDeleted: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

const User = model<TUser>('User', userSchema);

export default User;
