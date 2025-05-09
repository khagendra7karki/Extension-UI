import { SyntheticEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import FooterText from "../Components/FooterText"
import Input from "../Components/Input"
import { useAuth } from "../hooks/AuthProvider"
import styles from './styles.module.css'
import { authenticate } from "./api"

interface ICredential {
    email: string
    password: string
}


export default function Login(){
    const { setUser } = useAuth();
    const [ credential, setCredential ] = useState<ICredential>({email: "", password: ""})
    const [isErrorVisible, setIsErrorVisible] = useState(false);
    const handleChange = (name: string, value: string) => {
        setCredential({...credential, [name]: value})
    }
    const navigate = useNavigate()

    const handleSubmit = (e: SyntheticEvent) =>{
        e.preventDefault()
        const res = authenticate(credential.email, credential.password)
        if(!res){
            setIsErrorVisible(true);
            setTimeout(() => setIsErrorVisible(false), 5000); // Hide after 5 seconds
            return setCredential({email: '', password: ''})
        }
        setUser(res)
        navigate('/home')
    }

    return <>
    <main className={styles.mainBody}>
        <img className = {styles.mainImage} src = './108_capital_pte_ltd_logo.jpeg' alt = "108 capital logo"/>
        <h5 className = {styles.companyTitle}>108 WALLET</h5>
        <form className = {styles.loginForm}>
            <Input 
                placeholder="" 
                type = "text" 
                value = {credential.email}
                onChange = {(value: string) => {handleChange("email", value)}}
                label = "Username / Email"
                sx = {{width: '100%'}}
                />
            <Input
                label = "Password"
                type = "password"
                value = {credential.password}
                onChange = {(value: string) => {handleChange("password", value)}}
                placeholder=""
                sx = {{width: '100%'}}
            />
            <div className = {styles.loginButtonWrapper}>
                <button 
                className={styles.loginButton}
                onClick = {handleSubmit}
                type = 'submit'
                >
                    <i className={`fa-solid fa-arrow-right-to-bracket ${styles.loginIcon}`}></i>
                    Login
                </button>
                {
                    isErrorVisible && 
                    <p className={styles.loginFailure}>
                        Unable to login
                    </p>

                }
            </div>

        </form>
        <FooterText sx = {{marginTop: 'auto'}}/>
    </main>
    </>
}