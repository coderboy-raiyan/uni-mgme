import { TStudent } from './student.interface';
import Student from './student.model';

const createStudentIntoDB = async (payload: TStudent) => {
    const data = await Student.create(payload);
    return data;
};
const getAllStudentsFromDB = async () => {
    const data = await Student.find({});
    return data;
};

const StudentServices = {
    createStudentIntoDB,
    getAllStudentsFromDB,
};

export default StudentServices;
