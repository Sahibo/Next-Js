import { staffList } from "@/data/staffList"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
    return NextResponse.json(staffList)

}
