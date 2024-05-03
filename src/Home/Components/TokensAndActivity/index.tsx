import { useState } from 'react';
import ToggleButton from '../../../Components/ToggleButton';
import styles from './styles.module.css';
import Tokens from '../Tokens';
import Transaction from '../Transaction';

export default function TokenAndActivity(){
    const [tokenOrActivity, setTokenOrActivity] = useState<'token' | 'activity'>('token');

    return<>
    <div  className = {`${styles.tokenAndActivityWrapper}`}>
            <div className={styles.tokenAndActivity}>
                <ToggleButton buttons = {[{label:'Tokens', value: 'token'}, {label: 'Activity', value: 'activity'}]} setValue = {setTokenOrActivity}/>
            </div>
            {
                tokenOrActivity == 'token' &&<Tokens />
            }
            {
                tokenOrActivity == 'activity' && <Transaction />
            }

        </div>
    </>
}