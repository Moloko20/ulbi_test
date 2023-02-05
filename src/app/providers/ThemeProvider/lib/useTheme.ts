import { useContext } from 'react'
import { LOACL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'

interface useThemeResult {
    toggleTheme: () => void
    theme: Theme
}

export const useTheme = (): useThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
        setTheme(newTheme)
        localStorage.setItem(LOACL_STORAGE_THEME_KEY, newTheme)
    }

    return { theme, toggleTheme }
}
