import { Link } from 'react-router-dom';
import { useAuth } from '../../../hooks/AuthProvider';
import styles from './styles.module.css';
import { useState } from 'react';

// have to update this later with the actual links
const links = [
    {
        label:'Settings',
        href: '/home'
    },
    {
        label: 'Connected Sites',
        href: '/home'
    },
    {
        label: 'Activity log',
        href: '/home'
    },
    {
        label: 'Groups & Accounts',
        href: '/home'
    }

]

export default function VerticalNav() {
    const {setUser} = useAuth()
    const [showNav, setShowNav ] = useState<boolean>(false);
    

    return <>
        <i className={`fa-solid fa-ellipsis-vertical ${styles.menuIcon}`}
                onClick = { () => setShowNav(true)}
        ></i>

        <div className={`${styles.navigationWrapper} ${showNav ? styles.show : ''}`}>
            <div className = {styles.overlay} 
            onClick = {() => setShowNav(false)}
            >

            </div>
            <nav className = {styles.navigation}>
                <i className={`fa-solid fa-xmark ${styles.crossMark}`}
                    onClick = {() => setShowNav(false)}
                ></i>
                <ul>
                    {
                        links.map( (item, idx) =>{
                            return <li key = {idx}>
                                    <Link to = {item.href} className={styles.links}>
                                        {item.label}
                                    </Link>
                                </li>
                        })
                    }
                </ul>
                <button className = {styles.logoutButton}
                    onClick = {() => {setUser(null)}}
                >
                    <i className={`fa-solid fa-right-from-bracket ${styles.textFaded}`}></i>
                    <span className={styles.textFaded}>Log Out</span>
                </button>

            </nav>    

        </div>
        
    
    </>
}