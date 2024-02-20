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
                <li className={styles.menu__list__item}><Link className={styles.menu__list__item__link} href='/articulos'>Artículos</Link>
                    <ul className={styles.menu__list__dropdown}>
                        <li><Link className={styles.menu__list__dropdown__link} href='/articulos/ufc297'>UFC 297</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/articulos/ufc298'>UFC 298</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/articulos/khabib-ferguson'>Khabib v Ferguson</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/articulos/ufc300'>UFC 300</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/articulos/top5-mejores-peleadores'>Mejores Peleadores</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/articulos/conor-vs-khabib'>McGregor v Khabib</Link></li>
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
                {/* <li className={styles.menu__list__item}><Link className={styles.menu__list__item__link} href='/estilos'>Estilos</Link>
                    <ul className={styles.menu__list__dropdown}>
                        <li><Link className={styles.menu__list__dropdown__link} href='/estilos/boxeo'>Boxeo</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/estilos/jiujitsu'>Jiu Jitsu</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/estilos/muay-thai'>Muay Thai</Link></li>
                    </ul>
                </li> */}
                <li onClick={() => setIsOpen(false)} className={styles.menu__list__item}><Link className={styles.menu__list__item__link} href='/campeones'>Campeones</Link>
                    <ul className={styles.menu__list__dropdown}>
                        <li><Link className={styles.menu__list__dropdown__link} href='/peleadores/ilia-topuria'>Ilia Topuria</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/peleadores/islam-makhachev'>Islam Makhachev</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/peleadores/du-plessis'>Dricus Du Plessis</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/peleadores/jon-jones'>Jon Jones</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/peleadores/alex-pereira'>Alex Pereira</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/peleadores/sean-omalley'>Sean O&apos;Malley</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/peleadores/leon-edwards'>Leon Edwards</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/peleadores/alexandre-pantoja'>Alexandre Pantoja</Link></li>
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
                <li onClick={() => setIsOpen(false)} className={styles.menu__list__item}><Link className={styles.menu__list__item__link} href='/argentinos'>Argentinos</Link>
                    <ul className={styles.menu__list__dropdown}>
                        <li><Link className={styles.menu__list__dropdown__link} href='/argentinos/emiliano-sordi'>Emiliano Sordi</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/argentinos/santiago-ponzinibbio'>Santiago Ponzinibbio</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/argentinos/laureano-staropoli'>Laureano Staropoli</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/argentinos/ailin-perez'>Ailín Pérez</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/argentinos/franco-tenaglia'>Franco Tenaglia</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/argentinos/guido-cannetti'>Guido Cannetti</Link></li>
                    </ul>
                </li>
                <li onClick={() => setIsOpen(false)} className={styles.menu__list__item}><Link className={styles.menu__list__item__link} href='/promotoras'>Promotoras</Link>
                    <ul className={styles.menu__list__dropdown}>
                        <li><Link className={styles.menu__list__dropdown__link} href='/promotoras/ufc'>UFC</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/promotoras/pfl'>PFL</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/promotoras/bellator'>BELLATOR</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/promotoras/one-championship'>ONE</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/promotoras/dogfight-wild-tournament'>Dogfight</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/promotoras/king-of-the-streets'>KOTS</Link></li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}