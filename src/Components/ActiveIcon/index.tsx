import { CSSProperties } from 'react';
import styles from './styles.module.css';

interface Iprops{
    isActive: boolean
    sx?: CSSProperties
}
export default function ActiveIcon({isActive, sx}: Iprops){
    return <>
    <div className={`${styles.iconWrapper} ${isActive ? styles.active: ''}`}
        style = {sx}
    >
        <i className={`fa-solid fa-globe ${styles.globeIcon}`}
        ></i>

    </div>
        
    </>
}