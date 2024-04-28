import { Status } from "./Memo"

export interface PaymentVoucher
{
    id: number
    subject: string
    date: Date,
    status: Status
}