import { useState } from "react"
import Select from "../../../Components/Select"
import styles from './styles.module.css'
import ActiveIcon from "../../../Components/ActiveIcon"
import VerticalNav from "../VerticalNav"


const items = [
    {label: 'Arbitrum One', value: 'Arbitrum One'},
    {label: 'Arbitrum Two', value: 'Arbitrum Two'},
    {label: 'Arbitrum Three', value: 'Arbitrum Three'},
    {label: 'Arbitrum Four', value: 'Arbitrum Four'},

]
export default function Header(){
    const [ selectedItem, setSelectedItem ] = useState<string>(items[0].value);
    
    return <>
        <div className = {styles.headerWrapper}>
            <Select options = {items} 
                    value = {selectedItem} 
                    onChange = {(value) => {setSelectedItem(value)}}
            />
            <ActiveIcon isActive= {true} sx = {{marginLeft: 'auto', marginRight: '40px'}} />
            <VerticalNav />
        </div>

    </>
}