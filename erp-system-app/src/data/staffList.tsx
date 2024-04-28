import { Role, Staff } from "@/types/Staff";

export const staffList: Staff[] = [
    {
        id: 1,
        name: 'John Doe',
        role: Role.Admin,
        designation: 'Human Resource Dept.'
    },
    {
        id: 2,
        name: 'Jane Smith',
        role: Role['HOD I.T'],
        designation: 'Management'
    },
    {
        id: 3,
        name: 'Emily Brown',
        role: Role['HOD Account'],
        designation: 'Peoples and Operation'
    },
    {
        id: 4,
        name: 'Omar Hayam',
        role: Role['HOD Account'],
        designation: 'Peoples and Operation'
    },
    {
        id: 5,
        name: 'Sahib Aliyev',
        role: Role['HOD Account'],
        designation: 'Peoples and Operation'
    },
];