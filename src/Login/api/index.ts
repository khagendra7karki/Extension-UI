import tokens from '../../DATA/tokens.json';
import transactions from '../../DATA/transaction.json';

const getTokens = () => {
    // a function mimicking an api call to get tokens ( crypto token)
    return tokens
}

const getTransactions = () => {
    // same here
    return transactions
}
export const authenticate = (email: string, password: string) => {
    if(email== 'david@108capital.ltd' && password == 'david108'){
        const userTokens = getTokens()
        const userTransactions = getTransactions() 
        const userObject = {accountId: "0xa123sdfj998sdfsdf94556b", tokens: userTokens, transactions: userTransactions }
        return userObject
    }
    return false
}
