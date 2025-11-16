type BloodGroup = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';

export type TStudent = {
    id: string;
    name: {
        firstName: string;
        middleName: string;
        lastName: string;
    };
    gender: 'male' | 'female';
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
