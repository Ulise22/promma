'use client'
import Image from "next/image";
import Link from "next/link";
import styles from './asideChamps.module.css'
/* IMAGES */
import makhachev from '@/assets/peleadores__images/10-20/islam-makhachev/islam__makhachev.jpg'
import duPlessis from '@/assets/peleadores__images/0-10/dricus-du-plessis/du-plessis_card.jpg'
import omalley from '@/assets/peleadores__images/20-30/sean-omalley/sean__omalley.jpg'
import pereira from '@/assets/peleadores__images/0-10/alex-pereira/pereira_sparring2.jpg'
import edwards from '@/assets/peleadores__images/10-20/leon-edwards/edwards_card.jpg'
import topuria from '@/assets/peleadores__images/10-20/ilia-topuria/ilia-topuria.jpg'

export default function AsideChamps () {
    return(
        <aside className={styles.campeones__container}>
            <p className={styles.campones__title}>Campeones de la UFC</p>
            <Link href='/peleadores/ilia-topuria' className={styles.campeones}>
                <Image className={styles.campeones__image} src={topuria} alt='Ilia Topuria' />
                <p className={styles.campeones__name}>Ilia Topuria</p>
            </Link>
            <Link href='/peleadores/islam-makhachev' className={styles.campeones}>
                <Image className={styles.campeones__image} src={makhachev} alt='Islam Makhachev' />
                <p className={styles.campeones__name}>Islam Makhachev</p>
            </Link>
            <Link href='/peleadores/du-plessis' className={styles.campeones}>
                <Image className={styles.campeones__image} src={duPlessis} alt='Dricus Du Plessis' />
                <p className={styles.campeones__name}>Dricus Du Plessis</p>
            </Link>
            <Link href='/peleadores/sean-omalley' className={styles.campeones}>
                <Image className={styles.campeones__image} src={omalley} alt='Sean O&apos;Malley' />
                <p className={styles.campeones__name}>Sean O&apos;Malley</p>
            </Link>
            <Link href='/peleadores/alex-pereira' className={styles.campeones}>
                <Image className={styles.campeones__image} src={pereira} alt='Sean O&apos;Malley' />
                <p className={styles.campeones__name}>Alex Pereira</p>
            </Link>
            <Link href='/peleadores/leon-edwards' className={styles.campeones}>
                <Image className={styles.campeones__image} src={edwards} alt='Leon Edwards' />
                <p className={styles.campeones__name}>Leon Edwards</p>
            </Link>
        </aside>
    )
}