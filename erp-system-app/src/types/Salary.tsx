export enum Level {
    MD_CEO,
    ED,
    GM,
    DGM
}

export interface Salary {
    id: number
    title: string
    level: Level
    basicSalary: number
    allowance: number
    grossSalary: number
    deductions: number
    netSalary: number
}