import axios from 'axios'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url)
    const url = searchParams.get('url')

    try {
        const {
            data: { image },
        } = await axios.get(url!)
        return NextResponse.json(image, { status: 200 } as any)
    } catch (e: any) {
        console.log(e)
        const status: any = { status: 400 }
        return NextResponse.json(e, status)
    }
}
