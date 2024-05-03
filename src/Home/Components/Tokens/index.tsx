import tokens from '../../../DATA/tokens.json';
import TokensCard from './TokensCard';
import styles from './styles.module.css'

export default function Tokens(){
    return <>
    <div className={styles.tokensWrapper}>
        {
            tokens.map( (token, idx) => {
                return <TokensCard key = {idx} {...token}/>
            })
        }
    </div>
    </>
}