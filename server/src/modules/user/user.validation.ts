import z from 'zod';
import UserConstants from './user.constant';

export const UserPasswordRegexWithValidation = z
    .string()
    .min(6, 'Password must be at least 6 characters')
    .regex(/^(?=.*[A-Za-z])(?=.*\d)/, 'Password must contain at least one letter and one number');

const userCreateValidation = z.object({
    body: z.object({
        id: z.string(),
        role: z.enum(UserConstants.Role),
    }),
});

const UserValidations = {
    userCreateValidation,
};
export default UserValidations;
