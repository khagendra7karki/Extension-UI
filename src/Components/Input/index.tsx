import { CSSProperties, SyntheticEvent, useState } from 'react'
import styles from './styles.module.css'
interface Iprops {
    label: string
    placeholder: string
    value: string
    type: string
    onChange: any,
    sx?: CSSProperties
}
export default function Input({label, placeholder, type, value, onChange, sx}: Iprops){

    return <> 
        <div className = {styles.inputWrapper} style = {sx}>
            <label className={styles.customLabel}>{label}</label>
            <input 
                className={styles.customInput}
                type = {type}
                value = {value}
                placeholder={placeholder}
                onChange = {(e) => onChange(e.currentTarget.value)}
            />
        </div>   
    </>

}