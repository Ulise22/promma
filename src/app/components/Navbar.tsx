'use client'
import { useState } from 'react'
import Image from 'next/image'
import styles from './Navbar.module.css'
import logo from '../../assets/PROMMA.svg'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

export default function Navbar () {
    const [isOpen, setIsOpen] = useState(false)
    return(
        <nav className={styles.navbar}>
            <Link className={styles.logo} href='/'>
                <Image src={logo} priority={true} alt='promma mma' />
            </Link>

            <div onClick={() => setIsOpen(!isOpen)} className={styles.openMenu}>
                { isOpen ? <FontAwesomeIcon icon={faXmark} size='xl' /> : <FontAwesomeIcon icon={faBars} size='xl' /> } 
            </div>
            <section className={isOpen ? `${styles.navbar__container} ${styles.active}` : `${styles.navbar__container}`}>
                <div>
                    <Link onClick={() => setIsOpen(false)} className={styles.navbar__link} href='/'>Inicio</Link>
                    <Link onClick={() => setIsOpen(false)} className={styles.navbar__link} href='/peleadores'>Peleadores</Link>
                </div>
                <Link href='/'>
                    <Image className={styles.navbar__logo} src={logo} alt='promma mma' />
                </Link>
                <div>
                    <Link onClick={() => setIsOpen(false)} className={styles.navbar__link} href='/estilos'>Estilos</Link>
                    <Link onClick={() => setIsOpen(false)} className={styles.navbar__link} href='/promotoras'>Promotoras</Link>
                </div>
            </section>
        </nav>
    )
}