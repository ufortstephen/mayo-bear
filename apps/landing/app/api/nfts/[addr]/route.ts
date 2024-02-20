import ENV from '@/env'
import axios from 'axios'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
    const addr = request.nextUrl.pathname.split('/').pop()

    if (!addr) {
        return NextResponse.json({ error: 'Ethereum address is required' }, {
            status: 400,
        } as any)
    }

    const alchemyUrl = `https://eth-${ENV.NETWORK}.g.alchemy.com/nft/v2/${ENV.ALCHEMY_API_KEY}/getNFTs`
    const params = {
        owner: addr,
        contractAddresses: [ENV.SEED_SALE_CONTRACT_ADDRESS],
        withMetadata: true,
        pageSize: 50,
    }

    const headers = {
        accept: 'application/json',
    }

    try {
        const { data } = await axios.get(alchemyUrl, { params, headers })
        return NextResponse.json(data, { status: 200 } as any)
    } catch (e: any) {
        console.error('Error fetching NFTs:', e)
        const status: any = { status: 400 }
        return NextResponse.json(e, status)
    }
}
