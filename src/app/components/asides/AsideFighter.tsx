import Image from "next/image";
import Link from "next/link";
import styles from './asideChamps.module.css'
/* IMAGES */
import mcgregor from '@/assets/peleadores__images/0-100/0-10/conor-mcgregor/conor.jpg'
import chimaev from '@/assets/peleadores__images/0-100/10-20/khamzat-chimaev/khamzat_post2.jpg'
import gaethje from '@/assets/peleadores__images/0-100/10-20/justin-gaethje/gaethje_card.jpg'
import poirier from '@/assets/peleadores__images/0-100/0-10/dustin-poirier/poirier__card.jpg'
import colby from '@/assets/peleadores__images/0-100/0-10/colby-covington/colby.jpg'
import volkanovski from '@/assets/peleadores__images/0-100/0-10/alexander-volkanovski/volkanovski.jpg'

export default function AsideFighter () {
    return(
        <aside className={styles.campeones__container}>
            <h3 className={styles.campones__title}>Peleadores Populares de UFC</h3>
            <Link href='/peleadores/conor-mcgregor' className={styles.campeones}>
                <Image className={styles.campeones__image} loading="lazy" src={mcgregor} alt='Conor Mcgregor' />
                <h4 className={styles.campeones__name}>Conor McGregor</h4>
            </Link>
            <Link href='/peleadores/khamzat-chimaev' className={styles.campeones}>
                <Image className={styles.campeones__image} loading="lazy" src={chimaev} alt='Khamzat Chimaev' />
                <h4 className={styles.campeones__name}>Khamzat Chimaev</h4>
            </Link>
            <Link href='/peleadores/justin-gaethje' className={styles.campeones}>
                <Image className={styles.campeones__image} loading="lazy" src={gaethje} alt='Justin Gaethje' />
                <h4 className={styles.campeones__name}>Justin Gaethje</h4>
            </Link>
            <Link href='/peleadores/dustin-poirier' className={styles.campeones}>
                <Image className={styles.campeones__image} loading="lazy" src={poirier} alt='Dustin Poirier' />
                <h4 className={styles.campeones__name}>Dustin Poirier</h4>
            </Link>
            <Link href='/peleadores/colby-covington' className={styles.campeones}>
                <Image className={styles.campeones__image} loading="lazy" src={colby} alt='Colby Covington' />
                <h4 className={styles.campeones__name}>Colby Covington</h4>
            </Link>
            <Link href='/peleadores/alexander-volkanovski' className={styles.campeones}>
                <Image className={styles.campeones__image} loading="lazy" src={volkanovski} alt='Alexander Volkanovski' />
                <h4 className={styles.campeones__name}>Alexander Volkanovski</h4>
            </Link>
            {/* <article className={styles.donation__container}>
                <h3 className={styles.campones__title}>¡Recuerda que puedes colaborar con este proyecto mediante una donación a Paypal!</h3>
                <a className={styles.donation__btn} href="https://paypal.me/uliMontenegro" target="_Blank">Donar</a>
            </article> */}
        </aside>
    )
}