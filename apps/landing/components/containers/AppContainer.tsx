'use client'
import { ReactNode } from 'react'
import { PHProvider } from '@/hooks/PostHogProvider'

export default function AppContainer({ children }: { children: ReactNode }) {
    return <PHProvider>{children}</PHProvider>
}
