import { paymentVouchers } from "@/data/paymentVouchers"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
    return NextResponse.json(paymentVouchers)

}
