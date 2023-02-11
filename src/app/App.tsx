import { Link } from 'react-router-dom'

import { useTheme } from './providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'

import './styles/index.sass'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'

export const App = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Сменить тему</button>

            <Navbar />

            <AppRouter />
        </div>
    )
}
