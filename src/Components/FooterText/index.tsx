import { CSSProperties } from 'react';
import styles from './styles.module.css';
interface Iprops{
    sx?: CSSProperties
}
export default function FooterText({sx}: Iprops){
    return<>
        <div style = {sx}>
            <p className = {styles.footerText}>&copy; 2024. 108 Captial Pte. Ltd. All Rights Reserved.</p>
        </div>
    </>
}