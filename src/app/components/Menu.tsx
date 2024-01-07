'use client'
import { useState } from 'react'
import styles from './Menu.module.css'
import Image from 'next/image'
import logo from '../../assets/PROMMA.png'
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
                <li className={styles.menu__list__item}><Link className={styles.menu__list__item__link} href='/'>Inicio</Link></li>
                <li className={styles.menu__list__item}><Link className={styles.menu__list__item__link} href='/peleadores'>Peleadores</Link>
                    <ul className={styles.menu__list__dropdown}>
                        <li><Link className={styles.menu__list__dropdown__link} href='/peleadores/ilia-topuria'>Ilia Topuria</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/peleadores/conor-mcgregor'>Conor Mcgregor</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/peleadores/khamzat-chimaev'>Khamzat Chimaev</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/peleadores/francis-ngannou'>Francis Ngannou</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/peleadores/tony-ferguson'>Tony Ferguson</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/peleadores/dustin-poirier'>Dustin Poirier</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/peleadores/justin-gaethje'>Justin Gaethje</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/peleadores/charles-oliveira'>Charles Oliveira</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/peleadores/max-holloway'>Max Holloway</Link></li>
                    </ul>
                </li>
                <li className={styles.menu__list__item}><Link className={styles.menu__list__item__link} href='/estilos'>Estilos</Link>
                    <ul className={styles.menu__list__dropdown}>
                        <li><Link className={styles.menu__list__dropdown__link} href='/estilos/boxeo'>Boxeo</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/estilos/jiujitsu'>Jiu Jitsu</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/estilos/muay-thai'>Muay Thai</Link></li>
                    </ul>
                </li>
                <li className={styles.menu__list__item}><Link className={styles.menu__list__item__link} href='/promotoras'>Promotoras</Link>
                    <ul className={styles.menu__list__dropdown}>
                        <li><Link className={styles.menu__list__dropdown__link} href='/promotoras/ufc'>UFC</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/promotoras/pfl'>PFL</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/promotoras/bellator'>BELLATOR</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/promotoras/one-championship'>ONE</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/promotoras/dogfight-wild-tournament'>Dogfight</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/promotoras/king-of-the-streets'>KOTS</Link></li>
                    </ul>
                </li>
                <li className={styles.menu__list__item}><Link className={styles.menu__list__item__link} href='/campeones'>Campeones</Link>
                    <ul className={styles.menu__list__dropdown}>
                        <li><Link className={styles.menu__list__dropdown__link} href='/campeones/alexander-volkanovski'>Alexander Volkanovski</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/campeones/islam-makhachev'>Islam Makhachev</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/campeones/sean-strickland'>Sean Strickland</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/campeones/jon-jones'>Jon Jones</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/campeones/alex-pereira'>Alex Pereira</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/campeones/sean-omalley'>Sean O&apos;Malley</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/campeones/leon-edwards'>Leon Edwards</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/campeones/alexandre-pantoja'>Alexandre Pantoja</Link></li>
                    </ul>
                </li>
                <li className={styles.menu__list__item}><Link className={styles.menu__list__item__link} href='/mujeres'>Mujeres</Link>
                    <ul className={styles.menu__list__dropdown}>
                        <li><Link className={styles.menu__list__dropdown__link} href='/campeones/alexa-grasso'>Alexa Grasso</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/campeones/zhang-weili'>Zhang Weili</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/mujeres/julianna-pena'>Julianna Peña</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/argentinos/ailin-perez'>Ailín Pérez</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/mujeres/valentina-shevchenko'>Valentina Shevchenko</Link></li>
                    </ul>
                </li>
                <li className={styles.menu__list__item}><Link className={styles.menu__list__item__link} href='/argentinos'>Argentinos</Link>
                    <ul className={styles.menu__list__dropdown}>
                        <li><Link className={styles.menu__list__dropdown__link} href='/argentinos/emiliano-sordi'>Emiliano Sordi</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/argentinos/santiago-ponzinibbio'>Santiago Ponzinibbio</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/argentinos/laureano-staropoli'>Laureano Staropoli</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/argentinos/ailin-perez'>Ailín Pérez</Link></li>
                        <li><Link className={styles.menu__list__dropdown__link} href='/argentinos/franco-tenaglia'>Franco Tenaglia</Link></li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}