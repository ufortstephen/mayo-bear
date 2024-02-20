import { createContext, useContext, useState } from 'react'

interface DarkModeContextType {
    isDarkMode: boolean
    setIsDarkMode: (isDarkMode: boolean) => void
}

const DarkModeContext = createContext<DarkModeContextType>({
    isDarkMode: false,
    setIsDarkMode: () => {},
})

export function DarkModeProvider({ children }: any) {
    const [isDarkMode, setIsDarkMode] = useState(false)

    return (
        <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )
}

export function useDarkMode() {
    return useContext(DarkModeContext)
}
