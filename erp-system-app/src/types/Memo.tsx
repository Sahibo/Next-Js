export enum Status {
    Pending = 1,
    Rejected = 2,
    Approved = 3
}

export interface Memo {
    id: number
    title: string
    sentFrom: string
    sentTo: string
    status: Status
}