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
            <h3>Campeones de la UFC</h3>
            <Link href='/peleadores/ilia-topuria' className={styles.campeones}>
                <Image className={styles.campeones__image} src={topuria} alt='Ilia Topuria' />
                <h4>Ilia Topuria</h4>
            </Link>
            <Link href='/peleadores/islam-makhachev' className={styles.campeones}>
                <Image className={styles.campeones__image} src={makhachev} alt='Islam Makhachev' />
                <h4>Islam Makhachev</h4>
            </Link>
            <Link href='/peleadores/du-plessis' className={styles.campeones}>
                <Image className={styles.campeones__image} src={duPlessis} alt='Dricus Du Plessis' />
                <h4>Dricus Du Plessis</h4>
            </Link>
            <Link href='/peleadores/sean-omalley' className={styles.campeones}>
                <Image className={styles.campeones__image} src={omalley} alt='Sean O&apos;Malley' />
                <h4>Sean O&apos;Malley</h4>
            </Link>
            <Link href='/peleadores/alex-pereira' className={styles.campeones}>
                <Image className={styles.campeones__image} src={pereira} alt='Sean O&apos;Malley' />
                <h4>Alex Pereira</h4>
            </Link>
            <Link href='/peleadores/leon-edwards' className={styles.campeones}>
                <Image className={styles.campeones__image} src={edwards} alt='Leon Edwards' />
                <h4>Leon Edwards</h4>
            </Link>
        </aside>
    )
}