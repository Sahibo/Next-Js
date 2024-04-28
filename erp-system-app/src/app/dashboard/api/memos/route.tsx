import { memos } from "@/data/memos"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
    return NextResponse.json(memos)

}
