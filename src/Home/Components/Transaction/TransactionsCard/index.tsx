import styles from './styles.module.css'
const cardInfo = {
    name: "Ethereum",
    value: 12.4,
    currency: "ETH"
}
interface Iprops {
    type: string,
    transaction?: number,
    currency?: string,
    date: string,
    status: 'Pending'| 'Confirmed',
    to?:{
        currency: string,
        gain: number
    },
    from?:{
        currency: string,
        lost: number
    }
}

const statusToColor = {
    'Confirmed': styles.green,
    'Pending': styles.red,
}

export default function TransactionCard(transactionInfo: Iprops){
    return <>
        <div className={styles.cardWrapper}>
            <div className = {styles.transactionInfoTextWrapper}>
                <p className = {styles.token}>{transactionInfo.type}</p>
                {
                    transactionInfo.type == 'Swap' ?
                    <>
                        <p className = {`${styles.balance} ${styles.green}`}>{`+ ${transactionInfo.to?.gain}`}</p>
                        <p className = {styles.currency}>{transactionInfo.to?.currency}</p>

                    </>    
                    :
                    <>  
                        {
                            Number(transactionInfo.transaction) > 0 ?
                            <p className = {`${styles.balance}  ${styles.green}`}>{`+ ${transactionInfo.transaction}`}</p>
                            :
                            <p className = {`${styles.balance}  ${styles.red}`}>{`- ${Math.abs(transactionInfo.transaction || 0)}`}</p>                            
                        }
                        <p className = {styles.currency}>{transactionInfo.currency}</p>
                    </>
                }
            </div>
            {
                <div className={styles.transactionInfoTextWrapper}>
                    <p className = {`${styles.status} ${statusToColor[transactionInfo.status]}`}>{transactionInfo.status}</p>
                    {
                    transactionInfo.type == 'Swap' &&
                    <>
                        <p className = {`${styles.balance} ${styles.red}`}>{`- ${transactionInfo.from?.lost}`}</p>
                        <p className = {styles.currency}>{transactionInfo.from?.currency}</p>

                    </>    
                    }
                </div>
            }
        </div>
        
    </>
}