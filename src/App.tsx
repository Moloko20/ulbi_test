import { Suspense } from 'react'
import { Link } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import { Counter } from './components/Counter'

import './styles/index.sass'
import { AboutPage } from './pages/AboutPage'
import { MainPage } from './pages/MainPage'
import { useTheme } from './theme/useTheme'
import { classNames } from './helpers/classNames/classNames'

export const App = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Сменить тему</button>

            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About webpage</Link>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/" element={<MainPage />} />
                </Routes>
            </Suspense>
        </div>
    )
}
