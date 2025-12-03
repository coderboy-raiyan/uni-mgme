import StudentConstants from './student.constant';

type BloodGroup = (typeof StudentConstants.BloodGroup)[number];

type TGender = (typeof StudentConstants.Gender)[number];

export type TStudent = {
    id: string;
    name: {
        firstName: string;
        middleName: string;
        lastName: string;
    };
    gender: TGender;
    email: string;
    avatar?: string;
    contactNo: string;
    bloodGroup: BloodGroup;
    address: {
        present: string;
        permanent: string;
    };
    guardian: {
        name: string;
        contactNo: string;
    };
};
