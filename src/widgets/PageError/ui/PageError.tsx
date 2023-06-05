import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button'

import styles from './PageError.module.scss'

const reloadPage = () => {
    location.reload()
}

export const PageError = () => {
    const { t } = useTranslation('pageError')

    return (
        <div className={styles.pageError}>
            <p>{t('title')}</p>

            <Button onClick={reloadPage}>{t('reloadButton')}</Button>
        </div>
    )
}
