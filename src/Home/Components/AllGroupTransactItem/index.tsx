import { useState } from "react"
import ToggleSwitch from "../../../Components/ToggleSwitch"
import styles from './styles.module.css'
import Tooltip from "../../../Components/Tooltip"
export default function AllGroupTransactItem(){
    const [ isChecked, setIsChecked ]  =useState<boolean>(false)
    
    return <>
        <div className = {styles.mainWrapper}>
            <div className={styles.innerWrapper}>
                <p className={styles.text}>
                    All-group-transact
                </p>
                <Tooltip
                    content = "Show the transaction from all the groups"
                    direction="top"
                >
                    <i className={`fa-regular fa-circle-question ${styles.questionMarkIcon}`}></i>

                </Tooltip>
                {
                    isChecked ? <span className = {styles.green}>on</span>:
                    <span className = {styles.red}>off</span>
                }
                <ToggleSwitch checked = {isChecked} setIsChecked = {setIsChecked}/>
            </div>

        </div>
    </>
}