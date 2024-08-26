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
                <Image className={styles.menu__logo__img} src={logo} alt='ProMMA' />
            </Link>

            <div onClick={() => setIsOpen(!isOpen)} className={styles.menu__icon}>
                { isOpen ? <FontAwesomeIcon icon={faXmark} size='xl' /> : <FontAwesomeIcon icon={faBars} size='xl' /> } 
            </div>
            
            <ul className={isOpen ? `${styles.menu__list} ${styles.active}` : `${styles.menu__list}`}>
                <li onClick={() => setIsOpen(false)} className={styles.menu__list__item}><Link className={styles.menu__list__item__link} href='/'>Inicio</Link></li>
                <li onClick={() => setIsOpen(false)} className={styles.menu__list__item}><Link className={styles.menu__list__item__link} href='/articulos'>Artículos</Link>
                    <ul className={styles.menu__list__dropdown}>
                        <li><Link className={styles.menu__list__dropdown__link} href='/articulos/khabib-ferguson'>Khabib v Ferguson</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/articulos/top5-mejores-peleadores'>Mejores Peleadores</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/articulos/conor-vs-khabib'>McGregor v Khabib</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/articulos/most-ppv'>Top5 PPV</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/articulos/ko-mas-rapido-ufc'>KO Más Rápido</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/articulos/jim-miller-historia'>Nate Diaz</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/articulos/nate-diaz-historia'>Jim Miller</Link></li>
                    </ul>
                </li>
                <li onClick={() => setIsOpen(false)} className={styles.menu__list__item}><Link className={styles.menu__list__item__link} href='/noticias'>Noticias</Link>
                    <ul className={styles.menu__list__dropdown}>
                        <li><Link className={styles.menu__list__dropdown__link} href='/noticias/dogfight-wild-tournament-2'>DWT 2</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/noticias/ortega-vs-lopes-previa'>Ortega vs Lopes</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/noticias/dan-hooker-tattoos'>Dan Hooker Tattoos</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/noticias/tony-ferguson-retiro'>Tony Ferguson Retiro</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/noticias/drake-apuesta-ufc'>Drake es Mufa</Link></li>
                    </ul>
                </li>
                <li onClick={() => setIsOpen(false)} className={styles.menu__list__item}><Link className={styles.menu__list__item__link} href='/peleadores'>Peleadores</Link>
                    <ul className={styles.menu__list__dropdown}>
                        <li><Link className={styles.menu__list__dropdown__link} href='/peleadores/alexander-volkanovski'>Alexander Volkanovski</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/peleadores/conor-mcgregor'>Conor Mcgregor</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/peleadores/khamzat-chimaev'>Khamzat Chimaev</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/peleadores/francis-ngannou'>Francis Ngannou</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/peleadores/sean-strickland'>Sean Stickland</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/peleadores/dustin-poirier'>Dustin Poirier</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/peleadores/justin-gaethje'>Justin Gaethje</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/peleadores/charles-oliveira'>Charles Oliveira</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/peleadores/max-holloway'>Max Holloway</Link></li>
                    </ul>
                </li>
                <li onClick={() => setIsOpen(false)} className={styles.menu__list__item}><Link className={styles.menu__list__item__link} href='/leyendas'>Leyendas</Link>
                    <ul className={styles.menu__list__dropdown}>
                        <li><Link className={styles.menu__list__dropdown__link} href='/leyendas/khabib-nurmagomedov'>Khabib Nurmagomedov</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/leyendas/george-st-pierre'>George St-Pierre</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/leyendas/anderson-silva'>Anderson Silva</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/leyendas/brock-lesnar'>Brock Lesnar</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/leyendas/daniel-cormier'>Daniel Cormier</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/leyendas/jose-aldo'>José Aldo</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/leyendas/ronda-rousey'>Ronda Rousey</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/leyendas/demetrious-johnson'>Demetrious Johnson</Link></li>
                    </ul>
                </li>
                <li onClick={() => setIsOpen(false)} className={styles.menu__list__item}><Link className={styles.menu__list__item__link} href='/mujeres'>Mujeres</Link>
                    <ul className={styles.menu__list__dropdown}>
                        <li><Link className={styles.menu__list__dropdown__link} href='/mujeres/alexa-grasso'>Alexa Grasso</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/mujeres/zhang-weili'>Zhang Weili</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/mujeres/julianna-pena'>Julianna Peña</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/argentinos/ailin-perez'>Ailín Pérez</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/mujeres/valentina-shevchenko'>Valentina Shevchenko</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/mujeres/raquel-pennington'>Raquel Pennington</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/mujeres/mayra-bueno-silva'>Mayra Bueno Silva</Link></li>
                    </ul>
                </li>
                <li onClick={() => setIsOpen(false)} className={styles.menu__list__item}><Link className={styles.menu__list__item__link} href='/covertura-ufc'>UFC</Link>
                    <ul className={styles.menu__list__dropdown}>
                        <li><Link className={styles.menu__list__dropdown__link} href='/covertura-ufc/ufc297'>UFC 297</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/covertura-ufc/ufc298'>UFC 298</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/covertura-ufc/ufc299'>UFC 299</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/covertura-ufc/ufc300-main-event'>UFC 300</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/covertura-ufc/ufc301'>UFC 301</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/covertura-ufc/ufc302'>UFC 302</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/covertura-ufc/ufc303'>UFC 303</Link></li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}