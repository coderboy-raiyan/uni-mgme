import { Router } from 'express';
import StudentControllers from './student.controller';

const StudentRouter = Router();

StudentRouter.post('/create-student', StudentControllers.createStudentController);

export default StudentRouter;
