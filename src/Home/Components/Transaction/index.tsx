import { useEffect, useState } from 'react';
import moment from 'moment';
import transactions from '../../../DATA/transaction.json';
import TransactionCard from './TransactionsCard';
import styles from './styles.module.css'
import { group } from 'console';

export default function Transaction(){
    const [groupedTransactions, setGroupedTransactions] = useState<any>();
    useEffect(() => {
        const groupedData = transactions.reduce((acc, transaction) => {
        const transactionDate = moment(transaction.date, 'YYYY/MM/DD').format('YYYY-MM-DD'); // Format date for grouping
        acc[transactionDate] = (acc[transactionDate] || []).concat(transaction);
        return acc;
    }, {} as any);


        setGroupedTransactions(groupedData);
    }, [transactions]);
  
    return <>
    <div className={styles.tokensWrapper}>
        
        {   groupedTransactions &&
            Object.entries(groupedTransactions).map(([date, transactionByDate]: any) => (
                <div key = {date}>
                    <h3>{moment(date).format('LL')} </h3>
                    {
                        transactionByDate.map( (transaction: any, idx: number) => {
                            return <TransactionCard key = {`${transaction.date}${idx}`} {...transaction}/>
                        })
                    }
                </div>
            ))
        }
    </div>
    </>
}