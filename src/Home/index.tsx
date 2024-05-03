import Select from "../Components/Select"
import Header from "./Components/Header"
import styles from './styles.module.css';
import AllGroupTransactItem from "./Components/AllGroupTransactItem";
import HorizontalNav from "./Components/VerticalNav";
import AccountInfo from "./Components/AccountInfo";
import { useState } from "react";
import TokenAndActivity from "./Components/TokensAndActivity";
import FooterText from "../Components/FooterText";
const items = [
    {label: 'Some Group', value: 'Some Group'},
    {label: 'Some Group1', value: 'Some Group1'},
    {label: 'Some Group2', value: 'Some Group2'},
    {label: 'Some Group3', value: 'Some Group3'},

]
export default function Home(){
    const [ selectedGroup, setSelectedGroup] = useState<string>(items[0].value)
    return <>
    <main className = {styles.home}>
        <div className={styles.innerContent}>
            <Header/>
            <div className={styles.someGroupWrapper}>
                <i className={`fa-solid fa-layer-group ${styles.groupIcon}`}></i>
                <p className = {styles.someGroupText}>
                    {selectedGroup}
                </p>
                <Select 
                    options = {items} 
                    placeholder="switch group"
                    value = {selectedGroup} 
                    fontSize = '13px'
                    fontColor = '#727b8e'
                    onChange = {(value) => {setSelectedGroup(value)}}
                    sx = {{marginLeft: 'auto'}}/>
            </div>
            <AccountInfo />
            <TokenAndActivity />
            {/* {showNav && <HorizontalNav showNav = {showNav} toggleNav = {setShowNav} />} */}
            {/* <FooterText sx={{marginTop: 'auto'}}/> */}
            <AllGroupTransactItem/>


        </div>
    </main>
    </>
}