import React from 'react'
import styles from "./customButton.module.css"

export default function CustomButton({ title, onClick, disabled }) {
    return (
        <input
            className={styles.field}
            disabled={disabled}
            onClick={onClick}
            style={{ backgroundColor: disabled ? "red" : "#02cb06" }}
            type={"button"}
            value={title}
        />
    )
}
