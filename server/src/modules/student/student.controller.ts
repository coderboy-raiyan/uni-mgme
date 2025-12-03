import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import catchAsyncError from '../../utils/catchAsyncError';
import StudentServices from './student.service';

const createStudentController = catchAsyncError(async (req: Request, res: Response) => {
    const data = await StudentServices.createStudentIntoDB(req.body);
    return res.status(StatusCodes.CREATED).json({
        success: true,
        message: 'student created Successfully',
        data,
    });
});
const getAllStudentsController = catchAsyncError(async (req: Request, res: Response) => {
    const data = await StudentServices.getAllStudentsFromDB();
    return res.status(StatusCodes.OK).json({
        success: true,
        message: 'students retrieved Successfully',
        data,
    });
});

const StudentControllers = {
    createStudentController,
    getAllStudentsController,
};

export default StudentControllers;
