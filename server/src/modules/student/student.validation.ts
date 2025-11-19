import z from 'zod';
import StudentConstants from './student.constant';

// Most comprehensive (but complex)
const emailRFC = z
    .string()
    .regex(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        'Invalid email address'
    );

const createStudentValidation = z.object({
    body: z.object({
        name: z.object({
            firstName: z.string().max(20),
            middleName: z.string().max(20).optional(),
            lastName: z.string().max(20).optional(),
        }),
        gender: z.enum(StudentConstants.Gender),
        email: emailRFC,
        avatar: z.string(),
        contactNo: z.string(),
        bloodGroup: z.enum(StudentConstants.BloodGroup),
        address: z.object({
            present: z.string(),
            permanent: z.string(),
        }),
        guardian: z.object({
            name: z.string(),
            contactNo: z.string(),
        }),
    }),
});

const StudentValidations = {
    createStudentValidation,
};

export default StudentValidations;
