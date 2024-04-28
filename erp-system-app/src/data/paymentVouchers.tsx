import { Status } from "@/types/Memo";
import { PaymentVoucher } from "@/types/PaymentVoucher";

export const paymentVouchers: PaymentVoucher[] = [
    {
        id: 1,
        subject: 'Request for FARS for October 2022',
        date: new Date('25/01/2023'),
        status: Status.Pending
    },
    {
        id: 2,
        subject: 'Request for FARS for October 2022',
        date: new Date('19/01/2023'),
        status: Status.Approved
    },
    {
        id: 3,
        subject: 'Request for FARS for October 2022',
        date: new Date('10/01/2023'),
        status: Status.Approved
    },
    {
        id: 4,
        subject: 'Request for FARS for October 2022',
        date: new Date('25/01/2023'),
        status: Status.Rejected
    },
    {
        id: 5,
        subject: 'Request for FARS for October 2022',
        date: new Date('25/01/2023'),
        status: Status.Pending
    },
]