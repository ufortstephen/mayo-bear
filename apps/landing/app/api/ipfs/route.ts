import axios from 'axios'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url)
    const base = searchParams.get('base')
    const id = searchParams.get('id')

    const url = `https://ipfs.io/ipfs/${base?.replace('ipfs://', '')}${id}`
    try {
        const response = await axios.get(url)
        if (response.status !== 200)
            throw new Error('Network response was not ok')

        const metadata = response.data

        return NextResponse.json(metadata, { status: 200 })
    } catch (e: any) {
        console.log(e)
        return NextResponse.json({ error: e.message }, { status: 400 })
    }
}
