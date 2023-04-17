import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import LanguageIcon from 'shared/assets/icons/language.svg'

import cls from './LangSwitcher.module.scss'
import { Button, ThemeButton } from 'shared/ui/Button'

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { i18n } = useTranslation()

    const onToggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            onClick={onToggle}
            className={classNames(cls.langSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
        >
            <LanguageIcon width={24} height={24} />
        </Button>
    )
}
