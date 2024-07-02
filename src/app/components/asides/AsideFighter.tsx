import Image from "next/image";
import Link from "next/link";
import styles from './asideChamps.module.css'
/* IMAGES */
import mcgregor from '@/assets/peleadores__images/0-10/conor-mcgregor/conor.jpg'
import chimaev from '@/assets/peleadores__images/10-20/khamzat-chimaev/khamzat_post2.jpg'
import gaethje from '@/assets/peleadores__images/10-20/justin-gaethje/gaethje_card.jpg'
import poirier from '@/assets/peleadores__images/0-10/dustin-poirier/poirier__card.jpg'
import colby from '@/assets/peleadores__images/0-10/colby-covington/colby.jpg'
import volkanovski from '@/assets/peleadores__images/0-10/alexander-volkanovski/volkanovski.jpg'

export default function AsideFighter () {
    return(
        <aside className={styles.campeones__container}>
            <p className={styles.campones__title}>Peleadores Populares de UFC</p>
            <Link href='/peleadores/conor-mcgregor' className={styles.campeones}>
                <Image className={styles.campeones__image} src={mcgregor} alt='Conor Mcgregor' />
                <p className={styles.campeones__name}>Conor McGregor</p>
            </Link>
            <Link href='/peleadores/khamzat-chimaev' className={styles.campeones}>
                <Image className={styles.campeones__image} src={chimaev} alt='Khamzat Chimaev' />
                <p className={styles.campeones__name}>Khamzat Chimaev</p>
            </Link>
            <Link href='/peleadores/justin-gaethje' className={styles.campeones}>
                <Image className={styles.campeones__image} src={gaethje} alt='Justin Gaethje' />
                <p className={styles.campeones__name}>Justin Gaethje</p>
            </Link>
            <Link href='/peleadores/dustin-poirier' className={styles.campeones}>
                <Image className={styles.campeones__image} src={poirier} alt='Dustin Poirier' />
                <p className={styles.campeones__name}>Dustin Poirier</p>
            </Link>
            <Link href='/peleadores/colby-covington' className={styles.campeones}>
                <Image className={styles.campeones__image} src={colby} alt='Colby Covington' />
                <p className={styles.campeones__name}>Colby Covington</p>
            </Link>
            <Link href='/peleadores/alexander-volkanovski' className={styles.campeones}>
                <Image className={styles.campeones__image} src={volkanovski} alt='Alexander Volkanovski' />
                <p className={styles.campeones__name}>Alexander Volkanovski</p>
            </Link>
        </aside>
    )
}