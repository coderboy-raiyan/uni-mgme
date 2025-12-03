import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import StudentControllers from './student.controller';
import StudentValidations from './student.validation';

const StudentRouter = Router();

StudentRouter.get('/', StudentControllers.getAllStudentsController);

StudentRouter.post(
    '/create-student',
    validateRequest(StudentValidations.createStudentValidation),
    StudentControllers.createStudentController
);

export default StudentRouter;
