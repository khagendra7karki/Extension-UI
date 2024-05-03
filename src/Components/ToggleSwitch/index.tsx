import { CSSProperties } from 'react'
import styles from './styles.module.css'
interface Iprops{
    checked: boolean
    setIsChecked: React.Dispatch<React.SetStateAction<boolean>>
    sx?: CSSProperties 
}
export default function ToggleSwitch({checked, sx, setIsChecked} : Iprops){

    return <label className = {styles.switch} style={{...sx}}>
        <input type = "checkbox" checked = {checked} onChange = {() => setIsChecked( prev => !prev)}/>
        <span className = {`${styles.slider} ${styles.rounded}`}></span>
    </label>
}