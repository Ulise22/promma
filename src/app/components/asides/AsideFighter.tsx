import Image from "next/image";
import Link from "next/link";
import styles from './asideChamps.module.css'
/* IMAGES */
import mcgregor from '@/assets/peleadores__images/conor-mcgregor/conor.jpg'
import chimaev from '@/assets/peleadores__images/khamzat-chimaev/khamzat_post2.jpg'
import gaethje from '@/assets/peleadores__images/justin-gaethje/gaethje_card.jpg'
import poirier from '@/assets/peleadores__images/dustin-poirier/poirier__card.jpg'
import colby from '@/assets/peleadores__images/0-10/colby-covington/colby.jpg'
import volkanovski from '@/assets/peleadores__images/alexander-volkanovski/volkanovski.jpg'

export default function AsideFighter () {
    return(
        <aside className={styles.campeones__container}>
            <h3>Peleadores Populares de UFC</h3>
            <Link href='/peleadores/conor-mcgregor' className={styles.campeones}>
                <Image className={styles.campeones__image} src={mcgregor} alt='Conor Mcgregor' />
                <h4>Conor McGregor</h4>
            </Link>
            <Link href='/peleadores/khamzat-chimaev' className={styles.campeones}>
                <Image className={styles.campeones__image} src={chimaev} alt='Khamzat Chimaev' />
                <h4>Khamzat Chimaev</h4>
            </Link>
            <Link href='/peleadores/justin-gaethje' className={styles.campeones}>
                <Image className={styles.campeones__image} src={gaethje} alt='Justin Gaethje' />
                <h4>Justin Gaethje</h4>
            </Link>
            <Link href='/peleadores/dustin-poirier' className={styles.campeones}>
                <Image className={styles.campeones__image} src={poirier} alt='Dustin Poirier' />
                <h4>Dustin Poirier</h4>
            </Link>
            <Link href='/peleadores/colby-covington' className={styles.campeones}>
                <Image className={styles.campeones__image} src={colby} alt='Colby Covington' />
                <h4>Colby Covington</h4>
            </Link>
            <Link href='/campeones/alexander-volkanovski' className={styles.campeones}>
                <Image className={styles.campeones__image} src={volkanovski} alt='Alexander Volkanovski' />
                <h4>Alexander Volkanovski</h4>
            </Link>
        </aside>
    )
}