import { TStudent } from './student.interface';
import Student from './student.model';

const createStudentIntoDB = async (payload: TStudent) => {
    const data = await Student.create(payload);
    return data;
};

const StudentServices = {
    createStudentIntoDB,
};

export default StudentServices;
