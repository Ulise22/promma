'use client'
import { useState } from 'react'
import styles from './Menu.module.css'
import Image from 'next/image'
import logo from '../../assets/FULLMMA.png'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

export default function Menu () {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <nav className={styles.menu}>
            <Link className={styles.menu__logo} href='/'>
                <Image className={styles.menu__logo__img} priority={true} src={logo} alt='FULLMMA' />
            </Link>

            <div onClick={() => setIsOpen(!isOpen)} className={styles.menu__icon}>
                { isOpen ? <FontAwesomeIcon icon={faXmark} size='xl' /> : <FontAwesomeIcon icon={faBars} size='xl' /> } 
            </div>
            
            <ul className={isOpen ? `${styles.menu__list} ${styles.active}` : `${styles.menu__list}`}>
                <li onClick={() => setIsOpen(false)} className={styles.menu__list__item}><Link className={styles.menu__list__item__link} href='/'>Inicio</Link></li>
                <li onClick={() => setIsOpen(false)} className={styles.menu__list__item}><Link className={styles.menu__list__item__link} href='/articulos'>Artículos</Link></li>
                <li onClick={() => setIsOpen(false)} className={styles.menu__list__item}><Link className={styles.menu__list__item__link} href='/noticias'>Noticias</Link></li>
                <li onClick={() => setIsOpen(false)} className={styles.menu__list__item}><Link className={styles.menu__list__item__link} href='/peleadores'>Peleadores</Link></li>
                <li onClick={() => setIsOpen(false)} className={styles.menu__list__item}><Link className={styles.menu__list__item__link} href='/leyendas'>Leyendas</Link></li>
                <li onClick={() => setIsOpen(false)} className={styles.menu__list__item}><Link className={styles.menu__list__item__link} href='/mujeres'>Mujeres</Link></li>
                <li onClick={() => setIsOpen(false)} className={styles.menu__list__item}><Link className={styles.menu__list__item__link} href='/covertura-ufc'>UFC</Link></li>
            </ul>
        </nav>
    )
}