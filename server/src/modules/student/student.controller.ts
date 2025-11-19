import { Request, Response } from 'express';
import catchAsyncError from '../../utils/catchAsyncError';
import StudentServices from './student.service';

const createStudentController = catchAsyncError(async (req: Request, res: Response) => {
    const result = await StudentServices.createStudentIntoDB(req.body);
    return res.status(200).json({
        success: true,
        message: 'student created Successfully',
        data: result,
    });
});

const StudentControllers = {
    createStudentController,
};

export default StudentControllers;
