import styles from './styles.module.css'
const cardInfo = {
    name: "Ethereum",
    value: 12.4,
    currency: "ETH"
}
interface Iprops {
    
    token: string,
    balance: number,
    currency: string
}

export default function TokensCard(tokenInfo: Iprops){
    return <>
        <div className={styles.cardWrapper}>
            <p className = {styles.token}>{tokenInfo.token}</p>
            <p className = {styles.balance}>{tokenInfo.balance}</p>
            <p className = {styles.currency}>{tokenInfo.currency}</p>
        </div>
    </>
}