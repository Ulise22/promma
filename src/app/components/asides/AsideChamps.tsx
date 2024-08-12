import Image from "next/image";
import Link from "next/link";
import styles from './asideChamps.module.css'
/* IMAGES */
import makhachev from '@/assets/peleadores__images/10-20/islam-makhachev/islam__makhachev.jpg'
import duPlessis from '@/assets/peleadores__images/0-10/dricus-du-plessis/du-plessis_card.jpg'
import omalley from '@/assets/peleadores__images/20-30/sean-omalley/sean__omalley.jpg'
import pereira from '@/assets/peleadores__images/0-10/alex-pereira/pereira_sparring2.jpg'
import belal from '@/assets/peleadores__images/20-30/belal-muhammad/belal-card.jpg'
import topuria from '@/assets/peleadores__images/10-20/ilia-topuria/ilia-topuria.jpg'

export default function AsideChamps () {
    return(
        <aside className={styles.campeones__container}>
            <h3 className={styles.campones__title}>Campeones de la UFC</h3>
            <Link href='/peleadores/ilia-topuria' className={styles.campeones}>
                <Image className={styles.campeones__image} src={topuria} alt='Ilia Topuria' />
                <h4 className={styles.campeones__name}>Ilia Topuria</h4>
            </Link>
            <Link href='/peleadores/islam-makhachev' className={styles.campeones}>
                <Image className={styles.campeones__image} src={makhachev} alt='Islam Makhachev' />
                <h4 className={styles.campeones__name}>Islam Makhachev</h4>
            </Link>
            <Link href='/peleadores/du-plessis' className={styles.campeones}>
                <Image className={styles.campeones__image} src={duPlessis} alt='Dricus Du Plessis' />
                <h4 className={styles.campeones__name}>Dricus Du Plessis</h4>
            </Link>
            <Link href='/peleadores/sean-omalley' className={styles.campeones}>
                <Image className={styles.campeones__image} src={omalley} alt='Sean O&apos;Malley' />
                <h4 className={styles.campeones__name}>Sean O&apos;Malley</h4>
            </Link>
            <Link href='/peleadores/alex-pereira' className={styles.campeones}>
                <Image className={styles.campeones__image} src={pereira} alt='Sean O&apos;Malley' />
                <h4 className={styles.campeones__name}>Alex Pereira</h4>
            </Link>
            <Link href='/peleadores/belal-muhammad' className={styles.campeones}>
                <Image className={styles.campeones__image} src={belal} alt='Belal Muhammad' />
                <h4 className={styles.campeones__name}>Belal Muhammad</h4>
            </Link>
        </aside>
    )
}