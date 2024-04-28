export enum Role {
    'Admin',
    'HOD I.T',
    'HOD Account'
}

export interface Staff {
    id: number
    name: string
    role: Role
    designation: string
}

