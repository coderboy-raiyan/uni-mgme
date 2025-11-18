import { NextFunction, Request, Response } from 'express';
import catchAsyncError from '../../utils/catchAsyncError';

const createStudentController = catchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {}
);

const StudentControllers = {
    createStudentController,
};

export default StudentControllers;
