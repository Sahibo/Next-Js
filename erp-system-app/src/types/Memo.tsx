export enum Status{
    Pending,
    Rejected, 
    Approved
}

export interface Memo
{
    id: number
    title: string
    sentFrom: string
    sentTo: string
    status: Status
}