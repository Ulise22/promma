import Image from 'next/image'
import styles from './Navbar.module.css'
import logo from '../../assets/PROMMA.svg'
import Link from 'next/link'

export default function Navbar () {
    return(
        <nav className={styles.navbar}>
            <Link className={styles.navbar__link} href='/peleadores'>Peleadores</Link>
            <Link href='/'>
                <Image className={styles.navbar__logo} src={logo} alt='promma mma' />
            </Link>
            <Link className={styles.navbar__link} href='/estilos'>Estilos</Link>
        </nav>
    )
}