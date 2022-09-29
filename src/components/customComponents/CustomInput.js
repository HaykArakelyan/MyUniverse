import React from 'react'
import styles from "./customInput.module.css"
export default function ({ title, type, value, onChange }) {
    return (
        <div className={styles.conatiner}>
            <p className={styles.title}>{title}</p>
            <input
                className={styles.field}
                min={0}
                onChange={(e) => onChange(e.target.value)}
                type={type}
                value={value}
            />
        </div>
    )
}


