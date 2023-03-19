import { FC } from 'react'
import { useTheme, Theme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'

import cls from './ThemeSwitcher.module.scss'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
    const { theme, toggleTheme } = useTheme()

    return (
        <Button
            onClick={toggleTheme}
            className={classNames(cls.themeSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
        >
            {theme === Theme.LIGHT ? <LightIcon color="#ffb835" /> : <DarkIcon color="#001bb1" />}
        </Button>
    )
}
