import { model, Model, Schema } from 'mongoose';
import StudentConstants from './student.constant';
import { TStudent } from './student.interface';

const studentSchema = new Schema<TStudent>(
    {
        id: {
            type: String,
            required: [true, 'Student ID is required'],
            unique: true,
            trim: true,
        },
        name: {
            firstName: {
                type: String,
                required: [true, 'First name is required'],
                trim: true,
                maxlength: [50, 'First name cannot exceed 50 characters'],
            },
            middleName: {
                type: String,
                required: [true, 'Middle name is required'],
                trim: true,
                maxlength: [50, 'Middle name cannot exceed 50 characters'],
            },
            lastName: {
                type: String,
                required: [true, 'Last name is required'],
                trim: true,
                maxlength: [50, 'Last name cannot exceed 50 characters'],
            },
        },
        gender: {
            type: String,
            enum: {
                values: StudentConstants.Gender,
                message: '{VALUE} is not a valid gender',
            },
            required: [true, 'Gender is required'],
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true,
            lowercase: true,
            trim: true,
        },
        avatar: {
            type: String,
            trim: true,
            default: '',
        },
        contactNo: {
            type: String,
            required: [true, 'Contact number is required'],
            trim: true,
        },
        bloodGroup: {
            type: String,
            enum: {
                values: StudentConstants.BloodGroup,
                message: '{VALUE} is not a valid blood group',
            },
            required: [true, 'Blood group is required'],
        },
        address: {
            present: {
                type: String,
                required: [true, 'Present address is required'],
                trim: true,
            },
            permanent: {
                type: String,
                required: [true, 'Permanent address is required'],
                trim: true,
            },
        },
        guardian: {
            name: {
                type: String,
                required: [true, 'Guardian name is required'],
                trim: true,
            },
            contactNo: {
                type: String,
                required: [true, 'Guardian contact number is required'],
                trim: true,
            },
        },
    },
    {
        timestamps: true, // Adds createdAt and updatedAt fields
    }
);

// Indexes for better query performance
studentSchema.index({ id: 1 });
studentSchema.index({ email: 1 });

// Model
const Student: Model<TStudent> = model<TStudent>('Student', studentSchema);

export default Student;
