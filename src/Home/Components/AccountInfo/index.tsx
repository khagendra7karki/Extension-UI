import { useState } from 'react';
import Select from '../../../Components/Select';
import styles from './styles.module.css';
import { useAuth } from '../../../hooks/AuthProvider';
import Tooltip from '../../../Components/Tooltip';
const items = [
    {label: 'Arbitrum One', value: 'Arbitrum One'},
    {label: 'Arbitrum Two', value: 'Arbitrum Two'},
    {label: 'Arbitrum Three', value: 'Arbitrum Three'},
    {label: 'Arbitrum Four', value: 'Arbitrum Four'},

]
function truncateId(text: string, maxLength: number) {
  // Check if truncation is needed
  if (text.length <= maxLength) return text;

  // Define lengths for prefix, suffix, and remaining characters
  const prefixLength = 6; // Length of "0x"
  const suffixLength = 4; // Length of "..."
  const remainingChars = maxLength - prefixLength - suffixLength;

  // Truncate and add ellipsis
  return `${text.substring(0, prefixLength)}....${text.substring(text.length - suffixLength)}`;
}

export default function AccountInfo(){
    const [ selectedItem, setSelectedItem ] = useState<string>(items[0].value);
    const {user} = useAuth()

    return <>
    <div className = {styles.accountInfoWrapper}>
        <div className = {styles.accountNumberWrapper}>
            <Tooltip
                content = {user.accountId}
                direction = 'top'
            >
                <p className = {styles.accountNumber}>{truncateId(user.accountId, 14)}</p>

            </Tooltip>
            <Tooltip
                content = {'Click to Copy'}
                direction = 'top'
            >
                <i className={`fa-regular fa-clone ${styles.copyIcon}`}
                    onClick = {() => navigator.clipboard.writeText(user.accountId)}
                ></i>

            </Tooltip>
    
        </div>
        <h2 className = {styles.walletName}>Fully packed wallet</h2>
        <Select options = {items} 
                placeholder = "switch account"
                value = {selectedItem} 
                fontSize = '13px'
                fontColor = '#727b8e'
                onChange = {(value) => {setSelectedItem(value)}}
                />
    </div>
        
    </>
}