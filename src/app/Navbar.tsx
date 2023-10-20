import Image from 'next/image'
import styles from './page.module.css'
import logo from '../assets/PROMMA.svg'

export default function Navbar () {
    return(
        <nav className={styles.navbar}>
            <Image src={logo} alt='promma mma' />
        </nav>
    )
}