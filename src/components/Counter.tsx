import { useState } from 'react'

import styles from './Counter.module.sass'

export const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <p className={styles.par}>{count}</p>
            <button onClick={increment}>increment</button>
        </div>
    )
}
