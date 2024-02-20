import { useLocalStorage, useUpdateEffect } from 'usehooks-ts'
import { usePathname } from 'next/navigation'
import { createContext, useContext, useState } from 'react'
import ReactPlayer from 'react-player'

interface MusicContextType {
    isPlaying: boolean
    setIsPlaying: (isPlaying: boolean) => void
}

const MusicContext = createContext<MusicContextType>({
    isPlaying: false,
    setIsPlaying: () => {},
})

export function MusicProvider({ children }: any) {
    const pathname = usePathname()
    // const [isPlaying, setIsPlaying] = useLocalStorage('isPlaying', false)
    const [isPlaying, setIsPlaying] = useState(false)

    useUpdateEffect(() => {
        setIsPlaying(isPlaying)
    }, [isPlaying])

    const shouldPlayMusic = pathname.trim() == '/'

    return (
        <MusicContext.Provider value={{ isPlaying, setIsPlaying }}>
            {children}
            {shouldPlayMusic && (
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=xfGYBm1auYA"
                    playing={isPlaying}
                    volume={0.05}
                    width={0}
                    height={0}
                />
            )}
        </MusicContext.Provider>
    )
}

export function useMusic() {
    return useContext(MusicContext)
}
