import { Status } from "@/types/Memo";
import { PaymentVoucher } from "@/types/PaymentVoucher";

export const paymentVouchers: PaymentVoucher[] = [
    {
        id: 1,
        subject: 'Request for FARS for October 2022',
        date: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 31) + 1),
        status: Status.Pending
    },
    {
        id: 2,
        subject: 'Request for FARS for October 2022',
        date: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 31) + 1),
        status: Status.Approved
    },
    {
        id: 3,
        subject: 'Request for FARS for October 2022',
        date: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 31) + 1),
        status: Status.Approved
    },
    {
        id: 4,
        subject: 'Request for FARS for October 2022',
        date: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 31) + 1),
        status: Status.Rejected
    },
    {
        id: 5,
        subject: 'Request for FARS for October 2022',
        date: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 31) + 1),
        status: Status.Pending
    },
];
